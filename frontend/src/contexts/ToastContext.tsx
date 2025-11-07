'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { registerToastHandler, unregisterToastHandler } from '@/utils/toast';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  showToast: (message: string, type?: ToastType, duration?: number) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'info', duration: number = 5000) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = { id, message, type, duration };
    
    setToasts((prev) => [...prev, newToast]);

    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  // Register toast handler for use outside React components
  useEffect(() => {
    registerToastHandler(showToast);
    return () => {
      unregisterToastHandler();
    };
  }, [showToast]);

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div 
      className="fixed z-[9999] pointer-events-none top-4 left-1/2 -translate-x-1/2 w-full max-w-[420px] px-4 sm:px-0"
    >
      <div className="flex flex-col gap-2 sm:gap-3">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
}

interface ToastItemProps {
  toast: Toast;
  onRemove: (id: string) => void;
}

function ToastItem({ toast, onRemove }: ToastItemProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleRemove = () => {
    setIsExiting(true);
    setTimeout(() => {
      onRemove(toast.id);
    }, 300);
  };

  const typeStyles = {
    success: {
      bg: 'bg-gradient-to-r from-[#026838] to-[#014d29]',
      iconBg: 'bg-[#014d29]',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      border: 'border-[#aad83a]',
    },
    error: {
      bg: 'bg-gradient-to-r from-red-500 to-red-600',
      iconBg: 'bg-red-700',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      border: 'border-red-400',
    },
    warning: {
      bg: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
      iconBg: 'bg-yellow-700',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      border: 'border-yellow-400',
    },
    info: {
      bg: 'bg-gradient-to-r from-blue-500 to-blue-600',
      iconBg: 'bg-blue-700',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      border: 'border-blue-400',
    },
  };

  const style = typeStyles[toast.type];

  return (
    <div
      className={`pointer-events-auto transform transition-all duration-300 ease-out ${
        isExiting ? 'opacity-0 -translate-y-full scale-95' : 'opacity-100 translate-y-0 scale-100 animate-slide-in'
      }`}
    >
      <div
        className={`
          ${style.bg}
          border-2 ${style.border}
          rounded-xl sm:rounded-2xl
          shadow-2xl
          backdrop-blur-sm
          flex items-center gap-2 sm:gap-4
          px-3 py-3 sm:px-5 sm:py-4
          w-full
          relative
          overflow-hidden
        `}
      >
        {/* Icon */}
        <div className={`${style.iconBg} rounded-full p-1.5 sm:p-2 flex-shrink-0 text-white shadow-lg`}>
          {style.icon}
        </div>

        {/* Message */}
        <div className="flex-1 min-w-0">
          <p
            className="text-white font-semibold text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: 'var(--font-almarai)' }}
          >
            {toast.message}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={handleRemove}
          className="flex-shrink-0 text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-all duration-200"
          aria-label="Close"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Progress Bar */}
        {toast.duration && toast.duration > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 rounded-b-2xl overflow-hidden">
            <div
              className="h-full bg-white/60 animate-shrink"
              style={{
                animationDuration: `${toast.duration}ms`,
              }}
            />
          </div>
        )}
      </div>

    </div>
  );
}

