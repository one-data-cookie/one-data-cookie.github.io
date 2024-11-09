Jekyll::Hooks.register :documents, :pre_render do |document|
  document.content.gsub!(/\[\[(.*?)\|(.*?)\]\]/) do
    title = Regexp.last_match(1).strip
    label = Regexp.last_match(2).strip
    title_url = title.gsub(/\s+/, '-')
    "[#{label}](#{title_url})"
  end
end
