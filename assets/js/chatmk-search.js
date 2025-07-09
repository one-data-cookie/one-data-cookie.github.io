/**
 * ChatMK Search - Semantic Search for Michal's Knowledge
 * Handles vector similarity search using pre-computed embeddings
 */

class ChatMKSearch {
  constructor() {
    this.brainData = null;
    this.isLoaded = false;
  }

  /**
   * Load ChatMK data with embeddings
   */
  async loadChatMKData() {
    if (this.isLoaded) return;
    
    try {
      const response = await fetch('/assets/json/chatmk-data.json');
      this.brainData = await response.json();
      this.isLoaded = true;
      console.log(`Loaded ${this.brainData.pages.length} pages and ${this.brainData.notes.length} notes with embeddings`);
    } catch (error) {
      console.error('Failed to load brain data:', error);
      throw error;
    }
  }

  /**
   * Generate embedding for a query text using transformers.js
   */
  async generateQueryEmbedding(text) {
    console.log('Generating embedding for query:', text);
    
    try {
      // Check if transformers.js is available
      if (!window.transformers) {
        console.warn('Transformers.js not available, falling back to keyword search');
        throw new Error('Transformers not available');
      }
      
      // Initialize the model (same as used for content embeddings)
      if (!this.model) {
        console.log('Loading embedding model...');
        this.model = await window.transformers.pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
        console.log('Model loaded successfully');
      }
      
      // Generate embedding
      const output = await this.model(text, { pooling: 'mean', normalize: true });
      const embedding = Array.from(output.data);
      
      console.log(`Generated ${embedding.length}D embedding for query`);
      return embedding;
      
    } catch (error) {
      console.error('Failed to generate query embedding:', error);
      // Return zeros as fallback - will result in low similarity scores
      return new Array(384).fill(0);
    }
  }

  /**
   * Calculate cosine similarity between two vectors
   */
  cosineSimilarity(vec1, vec2) {
    // Check if vectors are valid
    if (!vec1 || !vec2 || !Array.isArray(vec1) || !Array.isArray(vec2)) {
      console.warn('Invalid vectors provided to cosineSimilarity:', vec1, vec2);
      return 0;
    }
    
    if (vec1.length !== vec2.length) {
      console.warn('Vectors have different lengths:', vec1.length, vec2.length);
      return 0;
    }

    let dotProduct = 0;
    let norm1 = 0;
    let norm2 = 0;

    for (let i = 0; i < vec1.length; i++) {
      dotProduct += vec1[i] * vec2[i];
      norm1 += vec1[i] * vec1[i];
      norm2 += vec2[i] * vec2[i];
    }

    norm1 = Math.sqrt(norm1);
    norm2 = Math.sqrt(norm2);

    if (norm1 === 0 || norm2 === 0) {
      return 0;
    }

    return dotProduct / (norm1 * norm2);
  }

  /**
   * Search for content similar to the query
   */
  async search(query, maxResults = 5) {
    if (!this.isLoaded) {
      await this.loadChatMKData();
    }

    // Generate embedding for the query
    const queryEmbedding = await this.generateQueryEmbedding(query);
    
    // Calculate similarity scores for all content
    const results = [];
    
    // Search pages
    for (const page of this.brainData.pages) {
      // Skip items without embeddings
      if (!page.embedding || !Array.isArray(page.embedding)) {
        console.warn('Page missing embedding:', page.title);
        continue;
      }
      
      const similarity = this.cosineSimilarity(queryEmbedding, page.embedding);
      results.push({
        type: 'page',
        title: page.title,
        url: page.url,
        excerpt: page.excerpt,
        content: page.content,
        similarity: similarity
      });
    }
    
    // Search notes
    for (const note of this.brainData.notes) {
      // Skip items without embeddings
      if (!note.embedding || !Array.isArray(note.embedding)) {
        console.warn('Note missing embedding:', note.title);
        continue;
      }
      
      const similarity = this.cosineSimilarity(queryEmbedding, note.embedding);
      results.push({
        type: 'note',
        title: note.title,
        url: note.url,
        excerpt: note.excerpt,
        content: note.content,
        tags: note.tags,
        similarity: similarity
      });
    }
    
    // Sort by similarity score (descending) and return top results
    results.sort((a, b) => b.similarity - a.similarity);
    return results.slice(0, maxResults);
  }

  /**
   * Simple keyword fallback search for when embeddings aren't working
   */
  keywordSearch(query, maxResults = 5) {
    if (!this.isLoaded) {
      throw new Error('ChatMK data not loaded');
    }

    const terms = query.toLowerCase().split(/\s+/);
    const results = [];
    
    // Search pages
    for (const page of this.brainData.pages) {
      const searchText = `${page.title} ${page.excerpt} ${page.content}`.toLowerCase();
      let score = 0;
      
      for (const term of terms) {
        const matches = (searchText.match(new RegExp(term, 'g')) || []).length;
        score += matches;
      }
      
      if (score > 0) {
        results.push({
          type: 'page',
          title: page.title,
          url: page.url,
          excerpt: page.excerpt,
          content: page.content,
          similarity: score / terms.length // Normalize by number of terms
        });
      }
    }
    
    // Search notes
    for (const note of this.brainData.notes) {
      const searchText = `${note.title} ${note.excerpt} ${note.content} ${note.tags.join(' ')}`.toLowerCase();
      let score = 0;
      
      for (const term of terms) {
        const matches = (searchText.match(new RegExp(term, 'g')) || []).length;
        score += matches;
      }
      
      if (score > 0) {
        results.push({
          type: 'note',
          title: note.title,
          url: note.url,
          excerpt: note.excerpt,
          content: note.content,
          tags: note.tags,
          similarity: score / terms.length
        });
      }
    }
    
    // Sort by score and return top results
    results.sort((a, b) => b.similarity - a.similarity);
    return results.slice(0, maxResults);
  }
}

// Export for use in other modules
window.ChatMKSearch = ChatMKSearch;
