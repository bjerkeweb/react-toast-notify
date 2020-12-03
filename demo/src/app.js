/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';
import { useToast } from '../../src/index';

export default function App() {
  const { addToast } = useToast();
  const [message, setMessage] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (!message) {
      return;
    }
    addToast(message, { type: 'success' });
    setMessage('');
  };

  return (
    <React.Fragment>
      <div
        css={css`
          display: flex;
        `}
      >
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Toast message"
            onChange={e => setMessage(e.target.value)}
            value={message}
          />
          <button type="submit">Add Toast</button>
        </form>
      </div>
      <div
        css={{
          marginTop: 20
        }}
      >
        <button
          onClick={() =>
            addToast('This is a success message', { type: 'success' })
          }
        >
          Success
        </button>
        <button
          onClick={() => addToast('This is an info message', { type: 'info' })}
        >
          Info
        </button>
        <button
          onClick={() =>
            addToast('This is a warning message', { type: 'warn' })
          }
        >
          Warn
        </button>
        <button
          onClick={() =>
            addToast('This is an error message', { type: 'error' })
          }
        >
          Error
        </button>
      </div>
    </React.Fragment>
  );
}
