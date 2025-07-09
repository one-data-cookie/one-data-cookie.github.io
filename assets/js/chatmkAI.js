/**
 * ChatMK AI Integration using wllama
 * Handles AI model loading and inference for ChatMK chatbot
 */

class ChatMKAI {
  constructor() {
    this.model = null;
    this.isLoading = false;
    this.isLoaded = false;
    this.modelPath = '/assets/models/tinyllama-1.1b-chat-v1.0.Q5_K_M.gguf';
  }

  /**
   * Initialize the AI model
   */
  async initialize() {
    if (this.isLoading || this.isLoaded) {
      return;
    }

    this.isLoading = true;
    console.log('ChatMK AI: Starting model initialization...');
    
    try {
      // Import wllama
      const { getLLama } = await import('https://cdn.jsdelivr.net/npm/@wllama/wllama@1.4.0/dist/esm/index.js');
      
      // Initialize wllama
      const llama = await getLLama({
        // Use single-threaded mode for better browser compatibility
        single: true,
        logger: console.log
      });
      
      console.log('ChatMK AI: Loading model from', this.modelPath);
      
      // Load the model
      this.model = await llama.loadModel({
        url: this.modelPath,
        // Progress callback
        progressCallback: (progress) => {
          const percent = Math.round(progress.loaded / progress.total * 100);
          console.log(`ChatMK AI: Model loading ${percent}%`);
          this.updateLoadingStatus(`Loading AI model... ${percent}%`);
        }
      });
      
      this.isLoaded = true;
      this.isLoading = false;
      console.log('ChatMK AI: Model loaded successfully!');
      
      // Update UI to show AI is ready
      this.updateLoadingStatus('AI ready!');
      
      return true;
    } catch (error) {
      console.error('ChatMK AI: Failed to initialize model:', error);
      this.isLoading = false;
      this.updateLoadingStatus('AI initialization failed');
      return false;
    }
  }

  /**
   * Generate AI response based on context and query
   */
  async generateResponse(query, searchResults = []) {
    if (!this.isLoaded) {
      throw new Error('AI model not loaded. Please wait for initialization.');
    }

    try {
      // Build context from search results
      let context = '';
      if (searchResults.length > 0) {
        context = 'Based on the following information from Michal\'s knowledge base:\n\n';
        searchResults.forEach((result, index) => {
          context += `${index + 1}. ${result.title}\n${result.excerpt}\n\n`;
        });
        context += 'Please answer the following question:\n\n';
      }

      // Create the prompt
      const prompt = this.buildPrompt(context + query);
      
      console.log('ChatMK AI: Generating response for:', query);
      
      // Generate response
      const response = await this.model.createCompletion(prompt, {
        nPredict: 256,
        temp: 0.7,
        topK: 40,
        topP: 0.9,
        repeatPenalty: 1.1,
        seed: -1
      });
      
      return this.cleanResponse(response);
      
    } catch (error) {
      console.error('ChatMK AI: Failed to generate response:', error);
      throw error;
    }
  }

  /**
   * Build a proper prompt template for TinyLlama
   */
  buildPrompt(userMessage) {
    return `<|system|>
You are Michal - a data analytics expert, teacher, and digital thinker. Respond as if you're actually Michal speaking directly.

Your communication style:
- Conversational and approachable, like talking to a colleague
- Direct and practical - no fluff or corporate speak
- Use "I" when sharing experiences ("I've found that...", "In my work...")
- Mix technical insights with human perspective
- Occasionally reference your teaching or analytics background
- Keep responses SHORT (2-3 sentences max) to stay focused

Rules:
- ONLY answer based on the provided context - don't make up information
- If you don't know something from the context, say "I haven't written about that" or "That's not in my notes"
- Be authentic to Michal's voice - thoughtful but not overly formal
- End responses naturally, don't always offer to help more

<|user|>
${userMessage}

<|assistant|>
`;
  }

  /**
   * Clean up the AI response
   */
  cleanResponse(response) {
    // Remove any prompt artifacts or repetition
    let cleaned = response.trim();
    
    // Remove common artifacts
    cleaned = cleaned.replace(/^<\|assistant\|>/, '');
    cleaned = cleaned.replace(/<\|.*?\|>/g, '');
    
    return cleaned.trim();
  }

  /**
   * Update loading status in the UI
   */
  updateLoadingStatus(message) {
    // This will be called from the modal to update status
    if (typeof window.updateAIStatus === 'function') {
      window.updateAIStatus(message);
    }
  }

  /**
   * Check if AI is ready
   */
  isReady() {
    return this.isLoaded && this.model !== null;
  }
}

// Global instance
window.chatMKAI = new ChatMKAI();

// Auto-initialize when loaded
document.addEventListener('DOMContentLoaded', () => {
  // Start loading the AI model in the background
  setTimeout(() => {
    window.chatMKAI.initialize();
  }, 2000); // Wait 2 seconds to not interfere with page load
});
