import React, { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import { createContext, useContext } from "react";
import styled, { css } from "styled-components";
import useStyle from "../../hooks/useStyle/useStyle";

hljs.registerLanguage("xml", xml);
hljs.registerLanguage("javascript", javascript);

const initLinesPlugin = (hljs) => {
  hljs.highlightLinesAll = highlightLinesAll;
  hljs.highlightLinesElement = highlightLinesElement;

  function highlightLinesAll(options) {
    for (var i = 0; i < options.length; ++i) {
      for (var option of options[i]) {
        --option.start;
        --option.end;
      }
    }
    initHighlightLinesOnLoad(options);
  }

  function initHighlightLinesOnLoad(options) {
    function callHighlightLinesCode() {
      var codes = document.getElementsByClassName("hljs");
      for (var i = 0; i < codes.length; ++i) {
        highlightLinesCode(codes[i], options[i]);
      }
    }

    if (document.readyState !== "loading") {
      callHighlightLinesCode();
    } else {
      window.addEventListener("DOMContentLoaded", function () {
        callHighlightLinesCode();
      });
    }
  }

  function highlightLinesElement(code, options, has_numbers) {
    for (var option of options) {
      --option.start;
      --option.end;
    }
    highlightLinesCode(code, options, has_numbers);
  }

  function highlightLinesCode(code, options, has_numbers) {
    function highlightLinesCodeWithoutNumbers() {
      code.innerHTML = code.innerHTML.replace(
        /([ \S]*\n|[ \S]*$)/gm,
        function (match) {
          return '<div class="highlight-line">' + match + "</div>";
        }
      );

      if (options === undefined) {
        return;
      }

      var paddingLeft = parseInt(window.getComputedStyle(code).paddingLeft);
      var paddingRight = parseInt(window.getComputedStyle(code).paddingRight);

      var lines = code.getElementsByClassName("highlight-line");
      var scroll_width = code.scrollWidth;
      for (var option of options) {
        for (var j = option.start; j <= option.end; ++j) {
          lines[j].style.backgroundColor = option.color;
          lines[j].style.minWidth =
            scroll_width - paddingLeft - paddingRight + "px";
        }
      }
    }
    function highlightLinesCodeWithNumbers() {
      var tables = code.getElementsByTagName("table");
      if (tables.length == 0) {
        if (count-- < 0) {
          clearInterval(interval_id);
          highlightLinesCodeWithoutNumbers();
        }
        return;
      }

      clearInterval(interval_id);

      var table = tables[0];
      table.style.width = "100%";
      var hljs_ln_numbers = table.getElementsByClassName("hljs-ln-numbers");
      for (var hljs_ln_number of hljs_ln_numbers) {
        hljs_ln_number.style.width = "2em";
      }

      if (options === undefined) {
        return;
      }
      var lines = code.getElementsByTagName("tr");
      for (var option of options) {
        for (var j = option.start; j <= option.end; ++j) {
          lines[j].style.backgroundColor = option.color;
        }
      }
    }

    if (hljs.hasOwnProperty("initLineNumbersOnLoad") && has_numbers !== false) {
      var count = 100;
      var interval_id = setInterval(highlightLinesCodeWithNumbers, 100);
      return;
    }

    highlightLinesCodeWithoutNumbers();
  }
};

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState;
    }

    return null;
  });

  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify(value === null ? fallbackState : value)
    );
  }, [value, storageKey]);

  return [value, setValue];
};

const codeContext = createContext(null);
const useCodeContext = () => useContext(codeContext);

const CodeContext = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("code-theme", "white");

  const toggle = () => {
    if (theme === "white") {
      setTheme("black");
    } else {
      setTheme("white");
    }
  };

  return (
    <codeContext.Provider value={{ theme, toggle }}>
      {children}
    </codeContext.Provider>
  );
};

const blackCodeCSS = css`
  /*
 * Visual Studio 2015 dark style
 * Author: Nicolas LLOBERA <nllobera@gmail.com>
 */
  p {
  }
  figure {
    margin: 0;
  }

  .hljs {
    background: #1e1e1e;
    color: #dcdcdc;
    padding: 2rem 1rem 2rem 2rem;
    font-size: 0.95rem;
    line-height: 1.25;
    border-radius: 0.5rem;
  }

  .hljs-keyword,
  .hljs-literal,
  .hljs-symbol,
  .hljs-name {
    color: #569cd6;
  }
  .hljs-link {
    color: #569cd6;
    text-decoration: underline;
  }

  .hljs-built_in,
  .hljs-type {
    color: #4ec9b0;
  }

  .hljs-number,
  .hljs-class {
    color: #b8d7a3;
  }

  .hljs-string,
  .hljs-meta .hljs-string {
    color: #d69d85;
  }

  .hljs-regexp,
  .hljs-template-tag {
    color: #9a5334;
  }

  .hljs-subst,
  .hljs-function,
  .hljs-title,
  .hljs-params,
  .hljs-formula {
    color: #dcdcdc;
  }

  .hljs-comment,
  .hljs-quote {
    color: #57a64a;
    font-style: italic;
  }

  .hljs-doctag {
    color: #608b4e;
  }

  .hljs-meta,
  .hljs-meta .hljs-keyword,
  .hljs-tag {
    color: #9b9b9b;
  }

  .hljs-variable,
  .hljs-template-variable {
    color: #bd63c5;
  }

  .hljs-attr,
  .hljs-attribute {
    color: #9cdcfe;
  }

  .hljs-section {
    color: gold;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  /*.hljs-code {
    font-family:'Monospace';
  }*/

  .hljs-bullet,
  .hljs-selector-tag,
  .hljs-selector-id,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo {
    color: #d7ba7d;
  }

  .hljs-addition {
    background-color: #144212;
    display: inline-block;
    width: 100%;
  }

  .hljs-deletion {
    background-color: #600;
    display: inline-block;
    width: 100%;
  }
`;
const whiteCodeCSS = css`
  /*
  XCode style (c) Angel Garcia <angelgarcia.mail@gmail.com>
  */

  figure {
    margin: 0;
  }

  .hljs {
    background: #f6f6f6;
    color: black;
    border-radius: 0.5rem;
    padding: 2rem 1rem 2rem 2rem;
    font-size: 0.95rem;
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
    color: #3f6e74;
  }

  .hljs-code,
  .hljs-string,
  .hljs-meta .hljs-string {
    color: #c41a16;
  }

  .hljs-regexp,
  .hljs-link {
    color: #0e0eff;
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
    color: #836c28;
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
const CodeTheme = styled.div`
  ${({ theme }) => {
    return theme === "black" ? blackCodeCSS : whiteCodeCSS;
  }}
`;

const ThemeButton = ({ onClick, style }) => {
  const context = useCodeContext();
  const theme = context?.theme;
  const toggle = context?.toggle;

  const s = useStyle(
    {
      ...style,
      border: "none",
      cursor: "pointer",
      margin: ".5rem",
      background: "transparent",
    },
    [style]
  );

  return (
    <button onClick={toggle} style={s}>
      <svg
        stroke={theme === "white" ? "black" : "white"}
        fill={theme === "white" ? "black" : "white"}
        strokeWidth="0"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 30 30"
        height="1.3rem"
        width="1.3rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M4.94,14.44
	c0,1.37,0.27,2.67,0.8,3.91s1.25,2.31,2.15,3.21s1.97,1.61,3.21,2.15s2.54,0.8,3.9,0.8h0.21V4.39h-0.21c-1.36,0-2.66,0.27-3.9,0.8
	S8.79,6.44,7.89,7.34s-1.61,1.97-2.15,3.21S4.94,13.09,4.94,14.44z"
        ></path>
      </svg>
    </button>
  );
};

const Code = ({ children, highlight }) => {
  const ref = useRef(null);
  const context = useCodeContext();
  const theme = context?.theme;

  useEffect(() => {
    const applyStyle = () => {
      hljs.highlightElement(ref.current);
    };
    applyStyle();

    if (highlight) {
      if (window.hljs === undefined) {
        initLinesPlugin(hljs);
      }

      hljs.highlightLinesElement(
        ref.current,
        highlight.map((h) => ({
          color: theme === "black" ? "#0c4771" : "#fcf7aa",
          ...h,
        })),
        false
      );
    }
  }, [highlight, theme]);

  return (
    <CodeTheme
      theme={theme}
      style={{
        position: "relative",
      }}
    >
      {theme ? (
        <ThemeButton
          style={{
            position: "absolute",
            right: 0,
          }}
        />
      ) : null}
      <pre ref={ref}>{children}</pre>
    </CodeTheme>
  );
};

export { CodeContext };
export default Code;
