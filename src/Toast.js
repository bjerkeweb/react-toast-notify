/** @jsx jsx */
import { jsx, css } from '@emotion/react';

export default function Toast({ message, type, remove }) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-bottom: 12px;
        min-width: 250px;
        min-height: 34px;
        box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1),
          0 2px 15px 0 rgba(0, 0, 0, 0.05);
        &:hover {
          cursor: pointer;
        }
      `}
      onClick={remove}
      // onKeyDown={remove}
      // role="button"
      // tabIndex={0}
    >
      <div
        css={css`
          margin: auto 0;
          flex: 1 1 auto;
          font-size: 14px;
        `}
      >
        {message}
      </div>
      <span
        css={css`
          align-self: flex-start;
        `}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 352 512"
          height="12px"
          width="12px "
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
        </svg>
      </span>
    </div>
  );
}
