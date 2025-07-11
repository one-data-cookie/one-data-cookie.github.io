/**
 * ChatMK Modal - AI Chat Interface for Michal's Brain
 * Handles the chat modal open/close functionality
 */

/**
 * Check if user is on a mobile device
 */
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
         (window.innerWidth <= 768);
}

/**
 * Open the ChatMK modal
 */
function openChatMKModal() {
  console.log('Opening ChatMK modal...');
  
  // Track modal opening event
  if (typeof umami !== 'undefined') {
    umami.track('modal-chatmk-open');
  }
  
  // Close command palette if it's open
  const ninjaKeys = document.querySelector('ninja-keys');
  if (ninjaKeys) {
    // Check if ninja-keys modal is currently open
    let isOpen = false;
    
    // Check for 'open' attribute (primary method)
    if (ninjaKeys.hasAttribute('open')) {
      isOpen = true;
    }
    
    // Fallback: Check shadow DOM for visible modal
    if (!isOpen && ninjaKeys.shadowRoot) {
      const modal = ninjaKeys.shadowRoot.querySelector('[class*="modal"], [class*="ninja"], [role="dialog"]');
      if (modal) {
        const modalStyle = window.getComputedStyle(modal);
        isOpen = modalStyle.display !== 'none' && modalStyle.visibility !== 'hidden';
      }
    }
    
    // Close if open
    if (isOpen) {
      ninjaKeys.close();
    }
  }
  
  // Create modal if it doesn't exist
  let modal = document.getElementById('chatmk-modal');
  if (!modal) {
    modal = createChatMKModal();
    document.body.appendChild(modal);
  }
  
  // Show the modal
  modal.style.display = 'block';
  modal.classList.add('is-active');
  
  // Focus on the input field only on desktop
  const input = modal.querySelector('#chatmk-input');
  if (input && !isMobileDevice()) {
    setTimeout(() => input.focus(), 100);
  }
  
  // Initialize ChatMK search if not already done
  if (!window.chatMKSearch) {
    window.chatMKSearch = new ChatMKSearch();
  }
  
  // Load models in the right order: embedding first, then AI
  initializeChatMKModels();
}

/**
 * Initialize ChatMK models in the correct order
 */
async function initializeChatMKModels() {
  console.log('ChatMK: Starting model initialization...');
  
  try {
    // 1. Load embedding model first (smaller, faster, core functionality)
    if (window.chatMKSearch && !window.chatMKSearch.model) {
      console.log('ChatMK: Loading embedding model first...');
      // Pre-load the embedding model
      await window.chatMKSearch.preloadEmbeddingModel();
    }
    
    // 2. Then start AI model loading (larger, enhancement)
    if (window.chatMKAI && !window.chatMKAI.isLoading && !window.chatMKAI.isLoaded) {
      console.log('ChatMK: Starting AI model initialization...');
      window.chatMKAI.initialize();
    }
    
  } catch (error) {
    console.error('ChatMK: Error during model initialization:', error);
  }
}

/**
 * Close the ChatMK modal
 */
function closeChatMKModal() {
  console.log('Closing ChatMK modal...');
  
  const modal = document.getElementById('chatmk-modal');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.remove('is-active');
  }
}

/**
 * Create the ChatMK modal HTML structure
 */
function createChatMKModal() {
  const modal = document.createElement('div');
  modal.id = 'chatmk-modal';
  modal.className = 'modal';
  
  modal.innerHTML = `
    <div class="modal-background" onclick="closeChatMKModal()"></div>
    <div class="modal-content">
      <div class="chatmk-container">
        <div class="chatmk-header">
          <div class="chatmk-header-info">
            <h3>ChatMK</h3>
            <p>Talk to my virtual self!</p>
          </div>
          <div class="chatmk-header-buttons">
            <button class="chatmk-header-btn" onclick="newChatMKConversation()" title="New conversation">↻</button>
            <button class="chatmk-header-btn" onclick="closeChatMKModal()" title="Close">✕</button>
          </div>
        </div>
        
        <div class="chatmk-messages" id="chatmk-messages">
          <div class="chatmk-message system">
            <div class="message-content">
              <p>Hello, I'm ChatMK – AI chatbot on top of Michal's knowledge base.</p>
              <p>Ask me anything about his notes and pages!</p>
            </div>
          </div>
        </div>
        
        <div class="chatmk-input-container">
          <input type="text" id="chatmk-input" placeholder="Ask me something..." 
                 onkeypress="handleChatMKKeypress(event)">
          <button onclick="sendChatMKMessage()" class="chatmk-send-btn">Send</button>
        </div>
        
        <div class="chatmk-status" id="chatmk-status">
          <span class="status-text">This is just a (mostly useless) experiment. More info <a href="/chatmk" target="_blank">here</a>.</span>
        </div>
      </div>
    </div>
  `;
  
  return modal;
}

/**
 * Start a new conversation (clear messages)
 */
function newChatMKConversation() {
  const messagesContainer = document.getElementById('chatmk-messages');
  if (messagesContainer) {
    // Remove only user and assistant messages, keep system messages that are status-related
    const messagesToRemove = messagesContainer.querySelectorAll('.chatmk-message.user, .chatmk-message.assistant, .chatmk-message.system:not(.ai-progress):not(.embedding-loading)');
    messagesToRemove.forEach(msg => msg.remove());
    
    // Add fresh welcome message
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'chatmk-message system';
    welcomeMessage.innerHTML = `
      <div class="message-content">
        <p>Hello! I'm ChatMK, your AI assistant trained on Michal's knowledge base.</p>
        <p>Ask me anything about his notes and pages!</p>
      </div>
    `;
    
    // Add the welcome message at the beginning (before any status messages)
    messagesContainer.insertBefore(welcomeMessage, messagesContainer.firstChild);
  }
  
  // Clear input and focus only on desktop
  const input = document.getElementById('chatmk-input');
  if (input) {
    input.value = '';
    if (!isMobileDevice()) {
      input.focus();
    }
  }
}

/**
 * Handle keypress in ChatMK input
 */
function handleChatMKKeypress(event) {
  if (event.key === 'Enter') {
    sendChatMKMessage();
  }
}

/**
 * Send a message to ChatMK
 */
async function sendChatMKMessage() {
  const input = document.getElementById('chatmk-input');
  const messagesContainer = document.getElementById('chatmk-messages');
  const statusContainer = document.getElementById('chatmk-status');
  
  const query = input.value.trim();
  if (!query) return;
  
  // Clear input
  input.value = '';
  
  // Add user message
  addChatMKMessage('user', query);
  
  try {
    // Initialize ChatMK search if not already done
    if (!window.chatMKSearch) {
      window.chatMKSearch = new ChatMKSearch();
    }
    
    // Search for relevant content
    let results;
    try {
      results = await window.chatMKSearch.search(query, 3);
    } catch (embeddingError) {
      console.warn('Semantic search failed, falling back to keyword search:', embeddingError);
      results = window.chatMKSearch.keywordSearch(query, 3);
    }
    
    // Show search results immediately
    if (results.length > 0) {
      let searchResponse = `**📚 Related notes:**\n`;
      results.slice(0, 3).forEach((result, index) => {
        searchResponse += `${index + 1}. **[${result.title}](${result.url})**\n`;
      });
      addChatMKMessage('assistant', searchResponse);
    } else {
      addChatMKMessage('assistant', "I couldn't find any relevant information about that topic. Try asking about data analytics, teaching, or other topics from Michal's knowledge base.");
    }

    // Try to get AI response if available
    if (window.chatMKAI && window.chatMKAI.isReady()) {
      try {
        console.log('ChatMK: Generating AI response...');
        
        // Add loading indicator for AI response
        addChatMKMessage('assistant', '<div class="typing-indicator"><span></span><span></span><span></span></div>');
        const loadingMessage = document.querySelector('.chatmk-messages .chatmk-message:last-child');
        
        const aiResponse = await window.chatMKAI.generateResponse(query, results);
        
        // Remove loading indicator and add actual response
        if (loadingMessage) {
          loadingMessage.remove();
        }
        addChatMKMessage('assistant', aiResponse);
        
      } catch (aiError) {
        console.warn('ChatMK: AI response failed:', aiError);
        // Remove loading indicator if there was an error
        const loadingMessage = document.querySelector('.chatmk-messages .chatmk-message:last-child');
        if (loadingMessage && loadingMessage.innerHTML.includes('typing-indicator')) {
          loadingMessage.remove();
        }
      }
    } else {
      // AI model not ready yet - this is fine, user already has search results
      console.log('ChatMK: AI model not ready yet, showing search results only');
    }
    
  } catch (error) {
    console.error('ChatMK error:', error);
    addChatMKMessage('assistant', "Sorry, I encountered an error while processing your request. Please try again.");
  }
}

/**
 * Add a message to the chat
 */
function addChatMKMessage(sender, content) {
  const messagesContainer = document.getElementById('chatmk-messages');
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `chatmk-message ${sender}`;
  
  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';
  
  // Convert markdown-like formatting to HTML
  const htmlContent = content
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
    .replace(/\n/g, '<br>');
  
  contentDiv.innerHTML = `<p>${htmlContent}</p>`;
  messageDiv.appendChild(contentDiv);
  
  messagesContainer.appendChild(messageDiv);
  
  // Scroll to bottom
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}  

// Handle ESC key to close modal
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeChatMKModal();
  }
}); 
