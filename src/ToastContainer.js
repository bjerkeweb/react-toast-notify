/** @jsx jsx */
import { jsx } from '@emotion/react';

const placements = {
  'top-left': { top: 0, left: 0 },
  'top-center': { top: 0, left: '50%', transform: 'translateX(-50%)' },
  'top-right': { top: 0, right: 0 },
  'bottom-left': { bottom: 0, left: 0 },
  'bottom-center': { bottom: 0, left: '50%', transform: 'translateX(-50%)' },
  'bottom-right': { bottom: 0, right: 0 }
};

const gutter = '10px';

const ToastContainer = ({ placement = 'top-right', children }) => (
  <div
    css={{
      position: 'fixed',
      boxSizing: 'border-box',
      maxHeight: '100%',
      zIndex: '1000',
      overflow: 'hidden',
      padding: gutter,
      ...placements[placement]
    }}
  >
    {children}
  </div>
);

export default ToastContainer;
