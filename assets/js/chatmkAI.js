/**
 * ChatMK AI Integration using wllama
 * Handles AI model loading and inference for ChatMK chatbot
 */

class ChatMKAI {
  constructor() {
    this.wllama = null;
    this.isLoading = false;
    this.isLoaded = false;
    this.downloadController = null; // For cancelling downloads
    this.modelPath =
      "https://huggingface.co/QuantFactory/SmolLM2-360M-Instruct-GGUF/resolve/main/SmolLM2-360M-Instruct.Q8_0.gguf";
  }

  /**
   * Initialize the AI model
   */
  async initialize() {
    if (this.isLoading || this.isLoaded) {
      return;
    }

    this.isLoading = true;
    this.downloadController = new AbortController(); // Create abort controller
    console.log("ChatMK AI: Starting model initialization...");

    try {
      // Import wllama from the correct ESM path
      const { Wllama } = await import(
        "https://cdn.jsdelivr.net/npm/@wllama/wllama@2.3.2/esm/index.js"
      );

      // Configure wllama with correct CDN paths for WASM files
      const CONFIG_PATHS = {
        "single-thread/wllama.wasm":
          "https://cdn.jsdelivr.net/npm/@wllama/wllama@2.3.2/esm/single-thread/wllama.wasm",
        "multi-thread/wllama.wasm":
          "https://cdn.jsdelivr.net/npm/@wllama/wllama@2.3.2/esm/multi-thread/wllama.wasm",
      };

      // Initialize wllama
      this.wllama = new Wllama(CONFIG_PATHS, {
        // Use single-threaded mode for better browser compatibility
        n_threads: 1,
        n_ctx: 2048, // Balanced context size for good performance
        n_ctx_per_seq: 2048, // Match per-sequence context
        n_batch: 256, // Smaller batch for better browser performance
        logger: {
          debug: (...args) => console.debug("ChatMK AI:", ...args),
          log: (...args) => console.log("ChatMK AI:", ...args),
          warn: (...args) => console.warn("ChatMK AI:", ...args),
          error: (...args) => console.error("ChatMK AI:", ...args),
        },
      });

      console.log("ChatMK AI: Loading model from", this.modelPath);

      await this.wllama.loadModelFromUrl(this.modelPath, {
        n_ctx: 2048, // Set context size during model loading
        n_ctx_per_seq: 2048, // Set per-sequence context during model loading
        progressCallback: ({ loaded, total }) => {
          // Check if cancelled - stop immediately
          if (this.downloadController?.signal.aborted) {
            return; // Stop progress updates
          }

          const percent = Math.round((loaded / total) * 100);
          const mbLoaded = Math.round(loaded / 1024 / 1024);
          const mbTotal = Math.round(total / 1024 / 1024);

          console.log(
            `ChatMK AI: Model loading ${percent}% (${mbLoaded}/${mbTotal}MB)`
          );

          // Show progress in modal if open
          this.showProgressInModal(percent, mbLoaded, mbTotal);
        },
      });

      this.isLoaded = true;
      this.isLoading = false;
      this.downloadController = null;
      console.log("ChatMK AI: Model loaded successfully!");

      return true;
    } catch (error) {
      this.isLoading = false;
      this.downloadController = null;

      if (error.message.includes('cancelled')) {
        console.log("ChatMK AI: Download cancelled by user");
        this.showProgressInModal(0, 0, 150, 'Language model skipped → using search only');
        return false;
      }

      console.error("ChatMK AI: Failed to initialize model:", error);
      this.showProgressInModal(0, 0, 150, 'Language model failed → using search only');
      return false;
    }
  }

  /**
   * Cancel the download
   */
  cancelDownload() {
    if (this.downloadController) {
      this.downloadController.abort();
      console.log("ChatMK AI: Download cancelled");
      // Show cancellation message immediately
      this.showProgressInModal(0, 0, 150, 'Language model skipped → using search only');
    }
  }

  /**
   * Generate AI response (without search results - those are shown separately)
   */
  async generateResponse(query, searchResults = []) {
    if (!this.isLoaded || !this.wllama) {
      throw new Error("Language model not loaded. Please wait for initialization.");
    }

    try {
      // Build context from search results - LIMITED to prevent context overflow
      let context = "";
      if (searchResults.length > 0) {
        context =
          "Based on the following information from Michal's knowledge base:\n\n";

        // First result: limited content (max 800 chars)
        if (searchResults[0]) {
          const limitedContent =
            searchResults[0].content.substring(0, 800).trim() + "...";
          context += `1. ${searchResults[0].title}\n${limitedContent}\n\n`;
        }

        // Results 2 & 3: excerpts only (max 200 chars each)
        searchResults.slice(1, 3).forEach((result, index) => {
          const limitedExcerpt =
            result.excerpt.substring(0, 200).trim() + "...";
          context += `${index + 2}. ${result.title}\n${limitedExcerpt}\n\n`;
        });

        context += "Question: ";
      }

      // Create the prompt
      const prompt = this.buildPrompt(context + query);

      console.log("ChatMK AI: Generating response for:", query);
      console.log("ChatMK AI: Prompt length:", prompt.length);

      // Generate response using wllama
      const responsePromise = this.wllama.createCompletion(prompt, {
        nPredict: 50,
        temperature: 0.7,
        stream: false,
      });

      console.log("ChatMK AI: Waiting for response...");

      const response = await responsePromise;

      console.log("ChatMK AI: Raw response:", response);

      const cleanedResponse = this.cleanResponse(response);
      console.log("ChatMK AI: Cleaned response:", cleanedResponse);

      return cleanedResponse || "I generated a response but it was empty.";
    } catch (error) {
      console.error("ChatMK AI: Failed to generate response:", error);

      // Provide a fallback response based on search results
      if (searchResults.length > 0) {
        throw new Error(
          `Language model generation failed, but here are relevant results: ${searchResults
            .map((r) => r.title)
            .join(", ")}`
        );
      }

      throw error;
    }
  }

  /**
   * Build a proper prompt template for TinyLlama
   */
  buildPrompt(userMessage) {
    return `<|system|>
You are Michal, a data analytics expert and teacher. Answer as Michal would, using "I" when sharing experiences. Be conversational and practical. Answer in EXACTLY ONE SENTENCE. Only use the provided context - don't make up information.

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
    cleaned = cleaned.replace(/^<\|assistant\|>/, "");
    cleaned = cleaned.replace(/<\|.*?\|>/g, "");

    return cleaned.trim();
  }



  /**
   * Show progress in ChatMK modal if it's open
   */
  showProgressInModal(percent, mbLoaded, mbTotal, customMessage = null) {
    const modal = document.getElementById("chatmk-modal");
    if (modal && modal.classList.contains("is-active")) {
      // Add a system message about AI loading progress
      const progressMsg = customMessage 
        ? customMessage
        : percent === 100 
        ? `Language model loaded: SmolLM2-360M-Q8`
        : `Language model loading: ${percent}% (${mbLoaded}/${mbTotal} MB) <span onclick="window.chatMKAI.cancelDownload()" style="margin-left: 10px; font-size: 11px; color: var(--text-sub); cursor: pointer; text-decoration: underline; white-space: nowrap;">skip magic</span>`;

      // Check if there's already a progress message and update it
      const messages = document.getElementById("chatmk-messages");
      const lastMessage = messages?.lastElementChild;

      if (lastMessage && lastMessage.classList.contains("ai-progress")) {
        // Update existing progress message
        const content = lastMessage.querySelector(".message-content");
        if (content) {
          content.innerHTML = `<p>${progressMsg}</p>`;
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
    if (typeof addChatMKMessage === "function") {
      const messagesContainer = document.getElementById("chatmk-messages");

      const messageDiv = document.createElement("div");
      messageDiv.className = "chatmk-message system ai-progress";
      messageDiv.innerHTML = `
        <div class="message-content">
          <p>${message}</p>
        </div>
      `;

      messagesContainer.appendChild(messageDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  /**
   * Hide AI progress message
   */
  hideProgressMessage() {
    const messagesContainer = document.getElementById("chatmk-messages");
    if (messagesContainer) {
      const progressMessage = messagesContainer.querySelector(".ai-progress");
      if (progressMessage) {
        progressMessage.remove();
      }
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

// Initialize AI model only when ChatMK modal is opened
// The modal will call window.chatMKAI.initialize() when first opened
