import { createGlobalStyle } from "styled-components";

const Style = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  /*
  XCode style (c) Angel Garcia <angelgarcia.mail@gmail.com>
  */
  
  figure {
    margin: 0;
  }
  
  .hljs {
    background: #f6f6f6;
    border-radius: .5rem;
    padding: 2rem 1rem 2rem 2rem;
    color: black;
    font-size: .95rem;
    line-height: 1.25;
  }

  /* Gray DOCTYPE selectors like WebKit */
  .xml .hljs-meta {
    color: #c0c0c0;
  }

  .hljs-comment,
  .hljs-quote {
    color: #007400;
  }

  .hljs-tag,
  .hljs-attribute,
  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-name {
    color: #aa0d91;
  }

  .hljs-variable,
  .hljs-template-variable {
    color: #3F6E74;
  }

  .hljs-code,
  .hljs-string,
  .hljs-meta .hljs-string {
    color: #c41a16;
  }

  .hljs-regexp,
  .hljs-link {
    color: #0E0EFF;
  }

  .hljs-title,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-number {
    color: #1c00cf;
  }

  .hljs-section,
  .hljs-meta {
    color: #643820;
  }


  .hljs-title.class_,
  .hljs-class .hljs-title,
  .hljs-type,
  .hljs-built_in,
  .hljs-params {
    color: #5c2699;
  }

  .hljs-attr {
    color: #836C28;
  }

  .hljs-subst {
    color: #000;
  }

  .hljs-formula {
    background-color: #eee;
    font-style: italic;
  }

  .hljs-addition {
    background-color: #baeeba;
  }

  .hljs-deletion {
    background-color: #ffc8bd;
  }

  .hljs-selector-id,
  .hljs-selector-class {
    color: #9b703f;
  }

  .hljs-doctag,
  .hljs-strong {
    font-weight: bold;
  }

  .hljs-emphasis {
    font-style: italic;
  }
`;

function App({ Component, pageProps }) {
  return (
    <>
      <Style />
      <Component {...pageProps} />
    </>
  );
}

export default App;
