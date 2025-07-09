/**
 * ChatMK AI Integration using wllama
 * Handles AI model loading and inference for ChatMK chatbot
 */

class ChatMKAI {
  constructor() {
    this.wllama = null;
    this.isLoading = false;
    this.isLoaded = false;
    this.modelPath = 'https://huggingface.co/QuantFactory/SmolLM-135M-Instruct-GGUF/resolve/main/SmolLM-135M-Instruct.Q4_K_M.gguf';
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
      // Import wllama from the correct ESM path
      const { Wllama } = await import('https://cdn.jsdelivr.net/npm/@wllama/wllama@2.3.2/esm/index.js');
      
      // Configure wllama with correct CDN paths for WASM files
      const CONFIG_PATHS = {
        'single-thread/wllama.wasm': 'https://cdn.jsdelivr.net/npm/@wllama/wllama@2.3.2/esm/single-thread/wllama.wasm',
        'multi-thread/wllama.wasm': 'https://cdn.jsdelivr.net/npm/@wllama/wllama@2.3.2/esm/multi-thread/wllama.wasm',
      };
      
      // Initialize wllama
      this.wllama = new Wllama(CONFIG_PATHS, {
        // Use single-threaded mode for better browser compatibility
        n_threads: 1,
        logger: {
          debug: (...args) => console.debug('ChatMK AI:', ...args),
          log: (...args) => console.log('ChatMK AI:', ...args),
          warn: (...args) => console.warn('ChatMK AI:', ...args),
          error: (...args) => console.error('ChatMK AI:', ...args),
        }
      });
      
      console.log('ChatMK AI: Loading model from', this.modelPath);
      
      // Load the model with user-visible progress
      this.updateLoadingStatus('Downloading AI model from Hugging Face...');
      
      await this.wllama.loadModelFromUrl(this.modelPath, {
        progressCallback: ({ loaded, total }) => {
          const percent = Math.round((loaded / total) * 100);
          const mbLoaded = Math.round(loaded / 1024 / 1024);
          const mbTotal = Math.round(total / 1024 / 1024);
          
          console.log(`ChatMK AI: Model loading ${percent}% (${mbLoaded}/${mbTotal}MB)`);
          this.updateLoadingStatus(`Loading AI model... ${percent}% (${mbLoaded}/${mbTotal}MB)`);
          
          // Show progress in modal if open
          this.showProgressInModal(percent, mbLoaded, mbTotal);
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
      
      // For now, disable AI if it fails to load
      this.updateLoadingStatus('AI unavailable - using search only');
      return false;
    }
  }

  /**
   * Generate AI response based on context and query
   */
  async generateResponse(query, searchResults = []) {
    if (!this.isLoaded || !this.wllama) {
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
      console.log('ChatMK AI: Prompt length:', prompt.length);
      
      // Debug: Check available methods
      console.log('ChatMK AI: Available wllama methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(this.wllama)));
      
      // Generate response using wllama with timeout
      const responsePromise = this.wllama.createCompletion(prompt, {
        nPredict: 50,
        temperature: 0.7,
        stream: false
      });
      
      console.log('ChatMK AI: Waiting for response...');
      
      const response = await responsePromise;
      
      console.log('ChatMK AI: Raw response:', response);
      
      const cleanedResponse = this.cleanResponse(response);
      console.log('ChatMK AI: Cleaned response:', cleanedResponse);
      
      return cleanedResponse || 'I generated a response but it was empty.';
      
    } catch (error) {
      console.error('ChatMK AI: Failed to generate response:', error);
      
      // Provide a fallback response based on search results
      if (searchResults.length > 0) {
        throw new Error(`AI generation failed, but here are relevant results: ${searchResults.map(r => r.title).join(', ')}`);
      }
      
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
   * Show progress in ChatMK modal if it's open
   */
  showProgressInModal(percent, mbLoaded, mbTotal) {
    const modal = document.getElementById('chatmk-modal');
    if (modal && modal.classList.contains('is-active')) {
      // Add a system message about AI loading progress
      const progressMsg = `AI model loading: ${percent}% (${mbLoaded}/${mbTotal}MB)`;
      
      // Check if there's already a progress message and update it
      const messages = document.getElementById('chatmk-messages');
      const lastMessage = messages?.lastElementChild;
      
      if (lastMessage && lastMessage.classList.contains('ai-progress')) {
        // Update existing progress message
        const content = lastMessage.querySelector('.message-content');
        if (content) {
          content.textContent = progressMsg;
        }
      } else {
        // Add new progress message
        this.addProgressMessage(progressMsg);
      }
    }
  }

  /**
   * Add AI loading progress message to chat
   */
  addProgressMessage(message) {
    if (typeof addChatMKMessage === 'function') {
      const messagesContainer = document.getElementById('chatmk-messages');
      
      const messageDiv = document.createElement('div');
      messageDiv.className = 'chatmk-message system ai-progress';
      messageDiv.innerHTML = `
        <div class="message-content">
          ${message}
        </div>
      `;
      
      messagesContainer.appendChild(messageDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  /**
   * Check if AI is ready
   */
  isReady() {
    return this.isLoaded && this.wllama !== null;
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
