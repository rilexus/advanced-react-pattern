import React, { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";

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

const Code = ({ children, highlight }) => {
  const ref = useRef(null);

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
        highlight.map((h) => ({ color: "#fcf7aa", ...h })),
        false
      );
    }
  }, [highlight]);

  return <pre ref={ref}>{children}</pre>;
};

export default Code;
