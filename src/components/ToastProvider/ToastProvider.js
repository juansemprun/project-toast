import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

import useKeydown from '../../hooks/use-keydown';

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const handleEscape = useCallback(() => {
    setToasts([]);
  });

  useKeydown('Escape', handleEscape);

  function createToast(message, variant) {
    const nextToasts = [
      ...toasts,
      { id: crypto.randomUUID(), message, variant },
    ];
    setToasts(nextToasts);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider
      value={{ toasts, createToast, dismissToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
