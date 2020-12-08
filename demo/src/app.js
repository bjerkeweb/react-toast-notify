/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';
import { useToast } from '../../src/index';
import { ToastIcon, GithubIcon } from './icons';
import * as colors from '../../src/colors';
import CodeBlock from '../CodeBlock';

const exampleCode = type => `import { ToastProvider, useToast } from 'react-toast-notify';

  const Alert = ({ content }) => (
    const { addToast } = useToast();
    <button
      onClick={() => addToast(content, {type: '${type}'})}
    >
      Add Toast
    </button>
  )

  const App = () => (
    <ToastProvider>
      <Alert />
    </ToastProvider>
  )`;

const exampleMessages = {
  success: 'Everything is a-okay',
  info: 'Here is some info for you',
  error: 'Oops! Something went wrong',
  warn: 'You might want to know about this'
};

export default function App() {
  const { addToast, removeAll } = useToast();
  const [type, setType] = useState('success');
  const [dismiss, setDismiss] = useState(true);

  const onSubmit = e => {
    e.preventDefault();
    addToast(`${exampleMessages[type]}`, { type, autoDismiss: dismiss });
  };

  const onChange = e => {
    setType(e.target.value);
  };

  return (
    <div
      css={{
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0'
      }}
    >
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          // paddingTop: '1.5rem',
          // paddingBottom: '1.5rem',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          padding: '1rem 2rem'
        }}
      >
        <div
          css={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ToastIcon width={40} color="#344250" />
          <div css={{ marginLeft: 16 }}>
            <h1 css={{ fontSize: 20, fontWeight: 500, marginBottom: -4 }}>
              react-toast-notify
            </h1>
            <p css={{ marginTop: 0, fontSize: 14 }}>
              A simple notification system using Context and Hooks
            </p>
          </div>
          <h1
            css={{
              fontSize: 21,
              fontWeight: 400,
              display: 'none'
            }}
          >
            React Toast Notify
          </h1>
        </div>
        <a
          href="https://github.com/bjerkeweb/react-toast-notify"
          css={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 18px',
            backgroundColor: 'rgba(41, 45, 63, 0.05)',
            color: 'rgba(41, 45, 63, 1)',
            fontSize: 14,
            fontWeight: 500,
            textDecoration: 'none',
            borderRadius: 30,
            transition: 'background-color 200ms ease, color 200ms ease',
            ':hover': {
              color: '#fff',
              backgroundColor: 'rgba(41, 45, 63, 1)'
            }
          }}
        >
          <GithubIcon width={20} css={{ marginRight: 8, opacity: 0.6 }} />
          <span>View on Github →</span>
        </a>
      </div>

      <div
        css={{
          marginTop: '22vh',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: 1100,
          padding: '0 2rem'
        }}
      >
        <div>
          <h1 css={{ fontSize: 24, fontWeight: 500, marginBottom: 10 }}>
            Send notifications in a jiffy
          </h1>
          <p>
            Just wrap your app in the <code>ToastProvider</code> component and
            then call the <code>useToast</code> hook from anywhere inside. Easy
            peasy.
          </p>

          <div
            css={{
              marginTop: 30,
              // backgroundColor: '#fff',
              // border: '1px solid #e5e7eb',
              borderRadius: 6,
              // padding: 20,
              flexGrow: 1,
              maxWidth: '500px'
            }}
          >
            <form onSubmit={onSubmit}>
              <input
                type="radio"
                name="type"
                value="success"
                id="success"
                onChange={onChange}
                defaultChecked
              />
              <label htmlFor="success">Success</label>

              <input
                type="radio"
                name="type"
                value="error"
                id="error"
                onChange={onChange}
              />
              <label htmlFor="error">Error</label>

              <input
                type="radio"
                name="type"
                value="warn"
                id="warning"
                onChange={onChange}
              />
              <label htmlFor="warning">Warning</label>

              <input
                type="radio"
                name="type"
                value="info"
                id="info"
                onChange={onChange}
              />
              <label htmlFor="info">Info</label>

              <div
                css={{ marginTop: 14, display: 'flex', alignItems: 'center' }}
              >
                <button
                  type="submit"
                  css={{
                    backgroundColor: colors[type],
                    backgroundImage:
                      'linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,0.05) 100%);',
                    transition: 'background 125ms ease',
                    textShadow: '1px 1px rgba(0,0,0,0.05)',
                    borderRadius: 30
                  }}
                >
                  Add Toast
                </button>

                <div css={{ marginLeft: 14 }}>
                  <input
                    type="checkbox"
                    name="dismiss"
                    id="dismiss"
                    onChange={() => setDismiss(!dismiss)}
                    defaultChecked
                  />
                  <label htmlFor="dismiss">Auto-dismiss</label>
                </div>

                <button
                  type="button"
                  css={{
                    display: 'none',
                    background: 'none',
                    border: '1px solid #eaeaed',
                    marginLeft: 10,
                    color: 'rgba(41, 45, 63, 1)',
                    fontWeight: 400,
                    borderRadius: 30
                  }}
                  onClick={() => removeAll()}
                >
                  Clear All
                </button>
              </div>
            </form>
          </div>
        </div>
        <CodeBlock>{exampleCode(type)}</CodeBlock>
      </div>
    </div>
  );
}
