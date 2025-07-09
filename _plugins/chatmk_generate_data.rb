require 'json'

module Jekyll
  class ChatMKDataGenerator < Jekyll::Generator
    safe true
    priority :low

    def generate(site)
      # Store the site reference for the hook
      @site = site
      @brain_data = extract_brain_data(site)
    end
    
    private
    
    def generate_excerpt(item, max_length = 200)
      # Try front matter excerpt or Jekyll's auto-excerpt first
      excerpt = item.data['excerpt'] || 
               item.excerpt.to_s.gsub(/<\/?[^>]*>/, "").strip
      
      # If still empty, extract from content
      if excerpt.to_s.strip.empty?
        content_text = item.content.gsub(/<\/?[^>]*>/, "").strip
        # Take first paragraph or max_length characters
        excerpt = content_text.split("\n\n").first || ""
        excerpt = excerpt[0..max_length] + (excerpt.length > max_length ? "..." : "")
      end
      
      excerpt
    end
    
    def extract_brain_data(site)
      # Initialize our data structure
      brain_data = {
        pages: [],
        notes: []
      }

      # Process all pages from /pages directory
      site.pages.each do |page|
        # Only include pages from the /pages directory
        next unless page.path.start_with?('pages/')
        
        # Use filename as title if no title is set
        title = page.data['title'] || File.basename(page.path, '.*').capitalize
        
        brain_data[:pages] << {
          title: title,
          content: page.content,
          url: page.url,
          excerpt: generate_excerpt(page, 200)
        }
      end

      # Process notes with season filter (only spring and summer)
      if site.collections.key?('notes')
        site.collections['notes'].docs.each do |note|
          season = note.data['season']
          # Only include notes with season 'spring' or 'summer'
          next unless season == 'spring' || season == 'summer'
          
          brain_data[:notes] << {
            title: note.data['title'],
            content: note.content,
            url: note.url,
            tags: note.data['tags'] || [],
            excerpt: generate_excerpt(note, 150)
          }
        end
      end

      # Return the data for the hook to write
      return brain_data
    end
  end
  
  # Hook to write the file after all processing is complete
  Jekyll::Hooks.register :site, :post_write do |site|
    generator = site.generators.find { |g| g.is_a?(ChatMKDataGenerator) }
    if generator && generator.instance_variable_get(:@brain_data)
      brain_data = generator.instance_variable_get(:@brain_data)
      
      # Write to destination assets/json directory
      dest_dir = File.join(site.dest, 'assets', 'json')
      dest_path = File.join(dest_dir, 'chatmk-data.json')
      FileUtils.mkdir_p(dest_dir)
      File.open(dest_path, 'w') do |f|
        f.write(JSON.generate(brain_data))
      end
      
      # Generate embeddings using Python script
      embedding_script = File.join(site.source, '_plugins', 'chatmk_generate_embeddings.py')
      if File.exist?(embedding_script)
        temp_path = dest_path + '.tmp'
        system("python3 #{embedding_script} #{dest_path} #{temp_path}")
        if File.exist?(temp_path)
          FileUtils.mv(temp_path, dest_path)
          Jekyll.logger.info "ChatMKDataGenerator:", "Added embeddings to chatmk-data.json"
        else
          Jekyll.logger.warn "ChatMKDataGenerator:", "Failed to generate embeddings, continuing without them"
        end
      else
        Jekyll.logger.warn "ChatMKDataGenerator:", "Embedding script not found, skipping embeddings"
      end
      
    end
  end
end
