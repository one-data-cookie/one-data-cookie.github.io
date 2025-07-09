/**
 * ChatMK Modal - AI Chat Interface for Michal's Brain
 * Handles the chat modal open/close functionality
 */

/**
 * Open the ChatMK modal
 */
function openChatMKModal() {
  console.log('Opening ChatMK modal...');
  
  // Create modal if it doesn't exist
  let modal = document.getElementById('chatmk-modal');
  if (!modal) {
    modal = createChatMKModal();
    document.body.appendChild(modal);
  }
  
  // Show the modal
  modal.style.display = 'block';
  modal.classList.add('is-active');
  
  // Focus on the input field
  const input = modal.querySelector('#chatmk-input');
  if (input) {
    setTimeout(() => input.focus(), 100);
  }
  
  // Initialize ChatMK search if not already done
  if (!window.chatMKSearch) {
    window.chatMKSearch = new ChatMKSearch();
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
          <h3>🤖 ChatMK</h3>
          <p>Ask questions about my knowledge and experience</p>
          <button class="delete" onclick="closeChatMKModal()"></button>
        </div>
        
        <div class="chatmk-messages" id="chatmk-messages">
          <div class="chatmk-message system">
            <div class="message-content">
              <p>👋 Hi! I'm ChatMK, your AI assistant trained on Michal's knowledge base. Ask me anything about his notes, projects, or expertise!</p>
            </div>
          </div>
        </div>
        
        <div class="chatmk-input-container">
          <input type="text" id="chatmk-input" placeholder="Ask me anything..." 
                 onkeypress="handleChatMKKeypress(event)">
          <button onclick="sendChatMKMessage()" class="chatmk-send-btn">Send</button>
        </div>
        
        <div class="chatmk-status" id="chatmk-status">
          <span class="status-text">Ready to help</span>
        </div>
      </div>
    </div>
  `;
  
  return modal;
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
  
  // Update status
  updateChatMKStatus('Searching knowledge base...');
  
  try {
    // Initialize ChatMK search if not already done
    if (!window.chatMKSearch) {
      window.chatMKSearch = new ChatMKSearch();
    }
    
    // Search for relevant content
    let results;
    try {
      results = await window.chatMKSearch.search(query, 5);
    } catch (embeddingError) {
      console.warn('Semantic search failed, falling back to keyword search:', embeddingError);
      updateChatMKStatus('Using keyword search...');
      results = window.chatMKSearch.keywordSearch(query, 5);
    }
    
    if (results.length === 0) {
      addChatMKMessage('assistant', "I couldn't find any relevant information about that topic. Try asking about data analytics, teaching, or other topics from Michal's knowledge base.");
      updateChatMKStatus('Ready to help');
      return;
    }
    
    // For now, show search results as the response
    // Later this will be replaced with AI-generated responses
    let response = `I found ${results.length} relevant items:\n\n`;
    
    results.forEach((result, index) => {
      response += `**${index + 1}. ${result.title}**\n`;
      response += `${result.excerpt}\n`;
      response += `[Read more](${result.url})\n\n`;
    });
    
    addChatMKMessage('assistant', response);
    updateChatMKStatus('Ready to help');
    
  } catch (error) {
    console.error('ChatMK search error:', error);
    addChatMKMessage('assistant', "Sorry, I encountered an error while searching. Please try again.");
    updateChatMKStatus('Error occurred');
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

/**
 * Update the status message
 */
function updateChatMKStatus(text) {
  const statusContainer = document.getElementById('chatmk-status');
  if (statusContainer) {
    const statusText = statusContainer.querySelector('.status-text');
    if (statusText) {
      statusText.textContent = text;
    }
  }
}

// Handle ESC key to close modal
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeChatMKModal();
  }
}); 
