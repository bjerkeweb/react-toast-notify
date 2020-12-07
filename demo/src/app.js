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

export default function App() {
  const { addToast, removeAll } = useToast();
  const [type, setType] = useState('info');

  const onSubmit = e => {
    e.preventDefault();
    addToast(`This is a ${type} message`, { type });
  };

  const onChange = e => {
    setType(e.target.value);
  };

  return (
    <div
      css={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 1050,
        padding: '0 20px'
      }}
    >
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
        }}
      >
        <div
          css={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ToastIcon width={45} color="#344250" />
          <div css={{ marginLeft: 20 }}>
            <h1 css={{ fontSize: 20, fontWeight: 600, marginBottom: 4 }}>
              react-toast-notify
            </h1>
            <p css={{ marginTop: 0, fontSize: 15 }}>
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
          marginTop: 300,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div>
          <h1 css={{ fontSize: 24, fontWeight: 500, marginBottom: 10 }}>
            Send notifications in a jiffy
          </h1>
          <p>Just wrap your </p>
          {/* <p css={{ marginTop: 0 }}>
        A simple notification system for React using Context and Hooks
        </p> */}

          <div
            css={{
              marginTop: 30
              // backgroundColor: '#fff',
              // border: '1px solid #e5e7eb',
              // borderRadius: 6,
              // padding: 30,
              // flexGrow: 1,
              // maxWidth: '500px'
            }}
          >
            <form onSubmit={onSubmit}>
              <input
                type="radio"
                name="type"
                value="info"
                id="info"
                onChange={onChange}
                defaultChecked
              />
              <label htmlFor="info">Info</label>

              <input
                type="radio"
                name="type"
                value="success"
                id="success"
                onChange={onChange}
              />
              <label htmlFor="success">Success</label>

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
                value="error"
                id="error"
                onChange={onChange}
              />
              <label htmlFor="error">Error</label>

              <div css={{ marginTop: 20 }}>
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
                <button
                  type="button"
                  css={{
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
