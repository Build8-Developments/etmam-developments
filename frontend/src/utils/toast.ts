/**
 * Utility functions for showing toast messages throughout the application
 * This allows showing toasts from non-React contexts (like Apollo Client error handlers)
 */

let toastShowFunction: ((message: string, type?: 'success' | 'error' | 'warning' | 'info', duration?: number) => void) | null = null;

/**
 * Register the toast show function (called from ToastProvider)
 */
export function registerToastHandler(handler: (message: string, type?: 'success' | 'error' | 'warning' | 'info', duration?: number) => void) {
  toastShowFunction = handler;
}

/**
 * Unregister the toast show function
 */
export function unregisterToastHandler() {
  toastShowFunction = null;
}

/**
 * Show a toast message from anywhere in the application
 */
export function showToast(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info', duration: number = 5000) {
  if (toastShowFunction) {
    toastShowFunction(message, type, duration);
  } else {
    // Fallback to console if toast handler is not registered
    console[type === 'error' ? 'error' : 'log'](`[Toast ${type}]: ${message}`);
  }
}

