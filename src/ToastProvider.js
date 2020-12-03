import React, { useState, useContext } from 'react';
import uniqueId from 'lodash.uniqueid';
import { TransitionGroup, Transition } from 'react-transition-group';
import ToastContainer from './ToastContainer';
import Toast from './Toast';

const ToastContext = React.createContext();

export function ToastProvider({ children, placement }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, { type = 'success' } = {}) => {
    const id = uniqueId('toast-');
    const toast = { message, type, id };
    setToasts(prev => [...prev, toast]);
  };

  const removeToast = id => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer placement={placement}>
        <TransitionGroup component={null}>
          {toasts.map(({ message, type, id }) => (
            <Transition
              key={id}
              appear
              mountOnEnter
              unmountOnExit
              timeout={220}
            >
              {state => (
                <Toast
                  key={id}
                  type={type}
                  remove={() => removeToast(id)}
                  message={message}
                  transitionState={state}
                />
              )}
            </Transition>
          ))}
        </TransitionGroup>
      </ToastContainer>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);

  if (!ctx) {
    throw new Error('`useToasts` must be called from within a `ToastContext`');
  }

  return ctx;
}
