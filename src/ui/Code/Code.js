import React from "react";
import { CodeBlock, monokaiSublime } from "react-code-blocks";

const theme = {
  lineNumberColor: `#333333`,
  lineNumberBgColor: `white`,
  backgroundColor: `#2B2B2BFF`,
  textColor: `#A9B7C6`,
  substringColor: `#6A8759`,
  keywordColor: `#2F92D9`,
  attributeColor: `#A9B7C6`,
  selectorAttributeColor: `#a71d5d`,
  docTagColor: `#333333`,
  nameColor: `#63a35c`,
  builtInColor: `#333333`,
  literalColor: `#0086b3`,
  bulletColor: `#0086b3`,
  codeColor: `#333333`,
  additionColor: `#55a532`,
  regexpColor: `#333333`,
  symbolColor: `#0086b3`,
  variableColor: `#df5000`,
  templateVariableColor: `#df5000`,
  linkColor: `#0366d6`,
  selectorClassColor: `#795da3`,
  typeColor: `#a71d5d`,
  stringColor: `#6eb240`,
  selectorIdColor: `#795da3`,
  quoteColor: `#df5000`,
  templateTagColor: `#FFC66D`,
  deletionColor: `#bd2c00`,
  titleColor: `#795da3`,
  sectionColor: `#eabe10`,
  commentColor: `#969896`,
  metaKeywordColor: `#333333`,
  metaColor: `#969896`,
  functionColor: `#f5c20a`,
  numberColor: `#6897BB`,
};

const Code = ({ children }) => {
  return (
    <div
      style={{
        margin: "1rem 0",
      }}
    >
      <CodeBlock
        text={children}
        language={"jsx"}
        showLineNumbers={false}
        startingLineNumber={1}
        theme={theme}
      />
    </div>
  );
};

export default Code;
