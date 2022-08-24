import React from "react";
import ArticlePage from "../ArticlePage/ArticlePage";

const StansArticle = ({
  title,
  inLanguage,
  dateCreated,
  datePublished,
  content,
}) => {
  return (
    <ArticlePage
      title={title}
      copyRight={{
        name: "Stanislav Panchenko",
        email: "email@stanislavpanchenko.de",
      }}
      content={content}
      inLanguage={inLanguage}
      partfOf={"https://rilexus.github.io/advanced-react-pattern/"}
      dataCreated={dateCreated}
      dataPublished={datePublished}
      organisation={{
        email: "email@stanislavpanchenko.de",
        name: "Stanislav Panchenko",
        funder: { name: "Stanislav Panchenko" },
      }}
      author={{
        url: "https://github.com/rilexus",
        name: "Stanislav Panchenko",
      }}
    />
  );
};

export default StansArticle;
