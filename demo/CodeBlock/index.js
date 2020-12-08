/** @jsx jsx */
import { jsx } from '@emotion/react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsxSyntax from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
// import nord from 'react-syntax-highlighter/dist/esm/styles/prism/nord';
import oceanic from 'react-syntax-highlighter/dist/esm/styles/prism/material-oceanic';
import React from 'react';
import theme from './theme';

const baseStyles = {
  'code[class*="language-"]': {
    fontSize: 14
  },
  'pre[class*="language-"]': {
    fontSize: 14
  }
};

SyntaxHighlighter.registerLanguage('jsx', jsxSyntax);

export const CodeBlock = ({ children, ...props }) => (
  <div
    css={{
      flexGrow: 1,
      marginLeft: 50,
      minWidth: 575
    }}
  >
    <div
      css={{
        backgroundColor: '#062a3b',
        padding: '.1rem .75rem',
        borderBottom: '1px solid #20404f',
        borderTopRightRadius: '0.3em',
        borderTopLeftRadius: '0.3em'
      }}
    >
      <div
        css={{
          display: 'inline-block',
          width: '8px',
          height: '8px',
          border: '1px solid #647088',
          borderRadius: '9999px',
          marginRight: 4
        }}
      />
      <div
        css={{
          display: 'inline-block',
          width: '8px',
          height: '8px',
          border: '1px solid #647088',
          borderRadius: '9999px',
          marginRight: 4
        }}
      />
      <div
        css={{
          display: 'inline-block',
          width: '8px',
          height: '8px',
          border: '1px solid #647088',
          borderRadius: '9999px',
          marginRight: 4
        }}
      />
    </div>
    <SyntaxHighlighter language="jsx" {...props} style={theme} showLineNumbers>
      {children}
    </SyntaxHighlighter>
  </div>
);

export default CodeBlock;
