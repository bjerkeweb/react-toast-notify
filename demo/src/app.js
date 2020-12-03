/** @jsx jsx */
import { useState } from 'react';
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
    addToast(message);
    setMessage('');
  };

  return (
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
  );
}
