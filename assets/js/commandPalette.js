---
layout: null
---

// Command Palette Configuration
// Enhanced setup with all pages and theme switching

// Global function to toggle command palette from header button
// Based on implementation in https://github.com/alshedivat/al-folio
const openSearchModal = () => {
    const ninjaKeys = document.querySelector('ninja-keys');
    if (!ninjaKeys) {
        console.warn('ninja-keys element not found');
        return;
    }
    
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
    
    // Toggle: open if closed, close if open
    if (isOpen) {
        ninjaKeys.close();
    } else {
        ninjaKeys.open();
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const ninjaKeys = document.querySelector('ninja-keys');
    
    if (!ninjaKeys) {
        console.warn('ninja-keys element not found');
        return;
    }

    // Function to get current theme
    function getCurrentTheme() {
        return sessionStorage.getItem('theme') || 'dark';
    }

    // Function to toggle theme (reusing existing modeSwitcher logic)
    function toggleTheme() {
        if (typeof modeSwitcher === 'function') {
            modeSwitcher();
        } else {
            console.warn('modeSwitcher function not available');
        }
    }

    // Sync ninja-keys theme with site theme
    function syncTheme() {
        const currentTheme = getCurrentTheme();
        
        // Remove existing theme classes
        ninjaKeys.classList.remove('dark', 'light');
        
        // Add the current theme class
        ninjaKeys.classList.add(currentTheme);
    }

    // Fix ninja-keys blur, scrollbar, and hide "move to parent" footer element
    function fixBlurIssue() {
        // Wait for ninja-keys to be fully loaded
        setTimeout(() => {
            if (ninjaKeys.shadowRoot) {
                const style = document.createElement('style');
                const css = `
                    * {
                        will-change: unset !important;
                    }
                    
                    /* Hide scrollbar - comprehensive targeting */
                    * {
                        scrollbar-width: none !important;
                        -ms-overflow-style: none !important;
                    }
                    
                    *::-webkit-scrollbar {
                        display: none !important;
                        width: 0 !important;
                        height: 0 !important;
                    }
                    
                    /* Target common ninja-keys elements */
                    .ninja-results,
                    .results,
                    [part="ninja-results"],
                    [part="results"],
                    .ninja-list,
                    .list,
                    .ninja-modal,
                    .modal {
                        scrollbar-width: none !important;
                        -ms-overflow-style: none !important;
                    }
                    
                    .ninja-results::-webkit-scrollbar,
                    .results::-webkit-scrollbar,
                    [part="ninja-results"]::-webkit-scrollbar,
                    [part="results"]::-webkit-scrollbar,
                    .ninja-list::-webkit-scrollbar,
                    .list::-webkit-scrollbar,
                    .ninja-modal::-webkit-scrollbar,
                    .modal::-webkit-scrollbar {
                        display: none !important;
                        width: 0 !important;
                        height: 0 !important;
                    }
                    
                    /* Hide the last footer element (move to parent) */
                    .modal-footer .help:last-child {
                        display: none !important;
                    }
                `;
                style.appendChild(document.createTextNode(css));
                ninjaKeys.shadowRoot.appendChild(style);
            } else {
                console.warn('ninja-keys shadowRoot not available');
            }
        }, 100);
    }

    // Apply site-specific color scheme to ninja-keys using dynamic CSS variables
    function applySiteColors() {
        setTimeout(() => {
            if (ninjaKeys.shadowRoot) {
                // Get current CSS variable values from the document
                const computedStyle = getComputedStyle(document.documentElement);
                const bgMain = computedStyle.getPropertyValue('--bg-main').trim();
                const bgSub = computedStyle.getPropertyValue('--bg-sub').trim();
                const textMain = computedStyle.getPropertyValue('--text-main').trim();
                const textSub = computedStyle.getPropertyValue('--text-sub').trim();
                const colorBis = computedStyle.getPropertyValue('--color-bis').trim();
                const border = computedStyle.getPropertyValue('--border').trim();
                
                const colorStyle = document.createElement('style');
                const colorCSS = `
                    /* Dynamic colors using site's CSS variables */
                    :host {
                        --ninja-background-color: ${bgMain} !important;
                        --ninja-text-color: ${textMain} !important;
                        --ninja-placeholder-color: ${textSub} !important;
                        --ninja-selected-background: ${bgSub} !important;
                        --ninja-selected-text-color: ${textMain} !important;
                        --ninja-backdrop: ${textMain}80 !important; /* 50% opacity */
                        --ninja-border: ${border} !important;
                        --ninja-secondary-background-color: ${bgSub} !important;
                        --ninja-secondary-text-color: ${colorBis} !important;
                        --ninja-accent-color: ${textMain} !important;
                    }
                    
                    /* Ensure proper contrast for all elements */
                    .ninja-input {
                        background-color: var(--ninja-background-color) !important;
                        color: var(--ninja-text-color) !important;
                        border-color: var(--ninja-border) !important;
                    }
                    
                    .ninja-results {
                        background-color: var(--ninja-background-color) !important;
                        color: var(--ninja-text-color) !important;
                    }
                    
                    .ninja-result {
                        color: var(--ninja-text-color) !important;
                    }
                    
                    .ninja-result[aria-selected="true"] {
                        background-color: var(--ninja-selected-background) !important;
                        color: var(--ninja-selected-text-color) !important;
                    }
                    
                    .ninja-result-content {
                        color: var(--ninja-text-color) !important;
                    }
                    
                    .ninja-result-title {
                        color: var(--ninja-text-color) !important;
                    }
                    
                    .ninja-result-description {
                        color: var(--ninja-secondary-text-color) !important;
                    }
                `;
                colorStyle.appendChild(document.createTextNode(colorCSS));
                ninjaKeys.shadowRoot.appendChild(colorStyle);
            }
        }, 150);
    }

    // All page navigation actions
    const pageActions = [
        {
          id: 'home',
          title: 'Go to Home',
          section: 'Pages navigation',
          handler: () => window.location.href = '/'
        },
        {
          id: 'projects',
          title: 'Go to Projects',
          section: 'Pages navigation',
          handler: () => window.location.href = '/projects'
        },
        {
          id: 'garden',
          title: 'Go to Garden',
          section: 'Pages navigation',
          handler: () => window.location.href = '/garden'
        },
        {
          id: 'datavis',
          title: 'Go to Datavis',
          section: 'Pages navigation',
          handler: () => window.location.href = '/datavis'
        },
        {
          id: 'teach',
          title: 'Go to Teach',
          section: 'Pages navigation',
          handler: () => window.location.href = '/teach'
        },
        {
          id: 'imho',
          title: 'Go to Imho',
          section: 'Pages navigation',
          handler: () => window.location.href = '/imho'
        },
        {
          id: 'uses',
          title: 'Go to Uses',
          section: 'Pages navigation',
          handler: () => window.location.href = '/uses'
        },
        {
          id: 'nmk',
          title: 'Open Nmk',
          section: 'External links',
          handler: () => window.open('{{ site.social.nmk }}', '_blank')
        },
        {
          id: 'github',
          title: 'Open GitHub',
          section: 'External links',
          handler: () => window.open('{{ site.social.github }}', '_blank')
        },
        {
          id: 'linkedin',
          title: 'Open LinkedIn',
          section: 'External links',
          handler: () => window.open('{{ site.social.linkedin }}', '_blank')
        },
        {
          id: 'email',
          title: 'Open Email',
          section: 'External links',
          handler: () => window.location.href = 'mailto:{{ site.social.email }}'
        },
        {
          id: 'chatmk',
          title: 'Talk to me via ChatMK',
          section: 'Custom actions',
          handler: () => {
            if (typeof openChatMKModal === 'function') {
              openChatMKModal();
              // Close command palette after opening ChatMK
              setTimeout(() => {
                ninjaKeys.close();
              }, 100);
            } else {
              console.warn('ChatMK modal not available');
            }
          }
        },
        {
          id: 'hashart',
          title: 'Understand my hashart',
          section: 'Custom actions',
          handler: () => window.location.href = '/hashart'
        },
        {
          id: 'random',
          title: 'Open random note',
          section: 'Custom actions',
          handler: () => window.location.href = '/random'
        },
    ];

    // Confetti easter egg function
    function triggerConfetti() {
        if (typeof confetti !== 'undefined') {
            // Get current theme colors for confetti
            const computedStyle = getComputedStyle(document.documentElement);
            const textMain = computedStyle.getPropertyValue('--text-main').trim();
            const bgSub = computedStyle.getPropertyValue('--bg-sub').trim();
            
            // Create a burst of confetti with site colors
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: [textMain, bgSub, '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']
            });
            
            // Add a second burst for extra celebration
            setTimeout(() => {
                confetti({
                    particleCount: 50,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: [textMain, bgSub, '#ff9ff3', '#54a0ff', '#5f27cd']
                });
            }, 250);
            
            setTimeout(() => {
                confetti({
                    particleCount: 50,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: [textMain, bgSub, '#00d2d3', '#ff9f43', '#ee5a24']
                });
            }, 400);
        } else {
            console.warn('canvas-confetti library not loaded');
            // Fallback: simple alert
            alert('🎉 Let\'s celebrate! 🎉');
        }
    }

    // Theme actions
    const themeActions = [
        {
            id: 'toggle-theme',
            title: `Switch to ${getCurrentTheme() === 'dark' ? 'light' : 'dark'} theme`,
            section: 'Custom actions',
            handler: () => {
                toggleTheme();
                // Update the action title after theme change
                setTimeout(() => {
                    updateThemeAction();
                    syncTheme();
                }, 100);
            }
        }
    ];

    // Easter egg actions
    const easterEggActions = [
        {
            id: 'celebrate',
            title: 'Celebrate a bit!',
            section: 'Custom actions',
            handler: () => {
                // Trigger confetti
                triggerConfetti();
                // Close command palette using ninja-keys API
                setTimeout(() => {
                    ninjaKeys.close();
                }, 100);
            }
        }
    ];

    // Function to update theme action title
    function updateThemeAction() {
        const currentTheme = getCurrentTheme();
        const newTitle = `Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} theme`;
        
        const updatedActions = [...pageActions, {
            id: 'toggle-theme',
            title: newTitle,
            section: 'Custom actions',
            handler: () => {
                toggleTheme();
                setTimeout(() => {
                    updateThemeAction();
                    syncTheme();
                }, 100);
            }
        }, ...easterEggActions];
        
        ninjaKeys.data = updatedActions;
    }

    // Combine all actions
    const allActions = [...pageActions, ...themeActions, ...easterEggActions];

    // Set the actions
    ninjaKeys.data = allActions;
    
    // Configure ninja-keys behavior
    ninjaKeys.placeholder = 'Go and explore...';
    ninjaKeys.hideBreadcrumbs = true;
    
    // Apply blur fix
    fixBlurIssue();
    
    // Apply site-specific colors
    applySiteColors();
    
    // Initial theme sync
    syncTheme();
    
    // Listen for theme changes to keep popup in sync
    const observer = new MutationObserver(() => {
        // Update theme class
        syncTheme();
        // Re-apply colors with new theme values
        applySiteColors();
    });
    
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
    });
});
