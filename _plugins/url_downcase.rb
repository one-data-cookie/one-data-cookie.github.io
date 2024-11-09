# Inspired by https://github.com/morganp/octopress_url_downcase/blob/master/plugins/url_downcase.rb
# Updated to work with Jekyll 4
module Jekyll
  class Document
    # Copy the #url method to #old_url, so we can redefine #url
    alias_method :old_url, :url
    
    def url
      old_url.downcase
    end
  end
end
