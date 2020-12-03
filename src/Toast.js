/** @jsx jsx */
import { useEffect, useRef, useState } from 'react';
import { jsx, css } from '@emotion/react';
import { Transition } from 'react-transition-group';

const duration = 220;
export const gutter = 10;

const defaultStyles = {
  transition: `transform ${duration}ms cubic-bezier(0.2, 0, 0, 1), opacity ${duration}ms`,
  opacity: 0,
  overflow: 'hidden',
  width: '350px',
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid #ddd',
  borderRadius: 4,
  boxShadow: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)`,
  marginBottom: '12px',
  background: '#fff',
  borderLeft: '4px solid #2685ff'
};

const transitionStyles = {
  entering: {
    opacity: 1,
    transform: `translate3d(120%, 0, 0)`
  },
  entered: { opacity: 1, transform: 'translate3d(0,0,0)' },
  exiting: { opacity: 0, transform: 'scale(0.66)' },
  exited: { opacity: 0, transform: 'scale(0.66)' }
};

export default function Toast({
  transitionState,
  transitionDuration,
  remove,
  message
}) {
  const [height, setHeight] = useState('auto');
  const elementRef = useRef(null);

  useEffect(() => {
    if (transitionState === 'entered') {
      const el = elementRef.current;
      setHeight(el.offsetHeight + gutter);
    }

    if (transitionState === 'exiting') {
      setHeight(0);
    }
  }, [transitionState]);

  return (
    <div
      ref={elementRef}
      style={{ height }}
      css={{
        transition: `height ${duration - 100}ms 100ms`
      }}
    >
      <div
        style={{
          ...defaultStyles,
          ...transitionStyles[transitionState]
        }}
      >
        <div
          css={{
            padding: '8px 4px 0',
            backgroundColor: 'rgba(36, 131, 255, 0.11)'
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#2685ff"
            height="20"
            width="20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          css={{
            padding: '8px 12px',
            fontSize: 14,
            color: '#47494E',
            minHeight: 40,
            flexGrow: 1
          }}
        >
          {message}
        </div>
        <div
          role="button"
          css={{
            opacity: 0.5,
            padding: '8px 12px',
            transition: 'opacity 150ms ease',
            ':hover': {
              opacity: 1,
              cursor: 'pointer'
            }
          }}
        >
          <span
            onClick={remove}
            css={css`
              align-self: flex-start;
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              height="16px"
              width="16px"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
