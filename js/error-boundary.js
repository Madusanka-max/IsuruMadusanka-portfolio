class ErrorBoundary {
    static init() {
        window.addEventListener('error', this.handleError.bind(this));
        window.addEventListener('unhandledrejection', this.handlePromiseError.bind(this));
        this.errorCount = 0;
        this.lastErrorTime = 0;
    }

    static shouldShowError() {
        const now = Date.now();
        if (now - this.lastErrorTime > 5000) { // Reset counter after 5 seconds
            this.errorCount = 0;
        }
        this.lastErrorTime = now;
        return ++this.errorCount <= 3; // Only show 3 errors within 5 seconds
    }

    static handleError(event) {
        console.error('Error caught by boundary:', event.error);
        
        // Prevent error loops
        if (!this.shouldShowError()) return;
        
        // Log to analytics or monitoring service if available
        if (window.gtag) {
            gtag('event', 'error', {
                'event_category': 'Error Boundary',
                'event_label': event.error?.message || 'Unknown error',
                'non_interaction': true
            });
        }

        this.showErrorUI(event.error);
    }    static handlePromiseError(event) {
        console.error('Unhandled promise rejection:', event.reason);
        
        // Prevent error loops
        if (!this.shouldShowError()) return;
        
        if (window.gtag) {
            gtag('event', 'error', {
                'event_category': 'Promise Rejection',
                'event_label': event.reason?.message || 'Unknown rejection',
                'non_interaction': true
            });
        }

        this.showErrorUI(event.reason);
    }static showErrorUI(error) {
        // Remove existing error UI if present
        const existingError = document.querySelector('.error-boundary-container');
        if (existingError) {
            existingError.remove();
        }

        const errorContainer = document.createElement('div');
        errorContainer.className = 'error-boundary-container fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center';
        
        // Format error stack trace for development
        const stackTrace = error.stack 
            ? `<pre class="text-xs text-gray-500 dark:text-gray-400 mt-4 p-2 bg-gray-100 dark:bg-gray-700 rounded overflow-auto max-h-32">${error.stack}</pre>`
            : '';

        errorContainer.innerHTML = `
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
                <h2 class="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
                    <i class="fas fa-exclamation-triangle mr-2"></i>
                    Oops! Something went wrong
                </h2>
                <p class="text-gray-600 dark:text-gray-300 mb-4">${error.message || 'An unexpected error occurred'}</p>
                ${process.env.NODE_ENV === 'development' ? stackTrace : ''}
                <div class="flex gap-3">
                    <button onclick="window.location.reload()" 
                            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                        <i class="fas fa-redo mr-2"></i>
                        Reload Page
                    </button>
                    <button onclick="this.closest('.error-boundary-container').remove()" 
                            class="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
                        <i class="fas fa-times mr-2"></i>
                        Dismiss
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(errorContainer);

        // Auto-dismiss after 10 seconds
        setTimeout(() => {
            errorContainer.remove();
        }, 10000);
    }
}

// Initialize error boundary
ErrorBoundary.init(); 