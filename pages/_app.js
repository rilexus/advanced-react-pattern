import { createGlobalStyle, css } from "styled-components";
import { CodeContext } from "../ui/Code/Code";

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
  
`;

function App({ Component, pageProps }) {
  return (
    <>
      <CodeContext>
        <Style />
        <Component {...pageProps} />
      </CodeContext>
    </>
  );
}

export default App;
