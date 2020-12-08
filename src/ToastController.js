import React, { useEffect, useRef, useState } from 'react';
import Toast from './Toast';

const NOOP = () => {};

export const ToastController = ({
  type,
  autoDismiss = true,
  dismissTimeout = 6000,
  onDismiss,
  transitionState,
  transitionDuration,
  message
}) => {
  const [running, setRunning] = useState(true);
  const [start, setStart] = useState(null);
  const [remaining, setRemaining] = useState(dismissTimeout);
  const timerRef = useRef();

  const pauseTimer = () => {
    clearTimeout(timerRef.current);
    setRemaining(prev => prev - (Date.now() - start));
  };

  const startTimer = () => {
    setStart(Date.now());
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(onDismiss, remaining);
  };

  useEffect(() => {
    if (!autoDismiss) {
      return;
    }
    startTimer();
  }, []);

  // cleanup effect in case compoment is unmounted
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const onMouseEnter = () => {
    setRunning(false);
    pauseTimer();
  };

  const onMouseLeave = () => {
    setRunning(true);
    startTimer();
  };

  const handleMouseEnter = autoDismiss ? onMouseEnter : NOOP;
  const handleMouseLeave = autoDismiss ? onMouseLeave : NOOP;

  return (
    <Toast
      type={type}
      autoDismiss={autoDismiss}
      dismissTimeout={dismissTimeout}
      isRunning={running}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onDismiss={onDismiss}
      transitionDuration={transitionDuration}
      transitionState={transitionState}
      message={message}
    />
  );
};

export default ToastController;
