import React, { useState, useContext } from 'react';
import uniqueId from 'lodash.uniqueid';
import { TransitionGroup, Transition } from 'react-transition-group';
import ToastContainer from './ToastContainer';
import ToastController from './ToastController';
import Toast from './Toast';

const ToastContext = React.createContext();

export function ToastProvider({ children, placement }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, { type = 'info', autoDismiss = true } = {}) => {
    const id = uniqueId('toast-');
    const toast = { message, type, id, autoDismiss };
    setToasts(prev => [...prev, toast]);
  };

  const removeToast = id => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const removeAll = () => {
    if (!toasts.length) {
      return;
    }

    toasts.forEach(t => removeToast(t.id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast, removeAll }}>
      {children}
      <ToastContainer placement={placement}>
        <TransitionGroup component={null}>
          {toasts.map(({ message, type, id, autoDismiss }) => (
            <Transition
              key={id}
              appear
              mountOnEnter
              unmountOnExit
              timeout={220}
            >
              {transitionState => (
                <ToastController
                  key={id}
                  type={type}
                  onDismiss={() => removeToast(id)}
                  message={message}
                  transitionState={transitionState}
                  autoDismiss={autoDismiss}
                  placement={placement}
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
