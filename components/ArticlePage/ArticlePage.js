import VerticalSpacer from "../../ui/VerticalSpacer/VerticalSpacer";
import BlogLayout from "../BlogLayout/BlogLayout";
import Posting from "../Posting/Posting";
import Color from "../../ui/Color/Color";
import H1 from "../../ui/H1/H1";
import React from "react";

const ArticlePage = ({
  author: { url, name },
  dataPublished,
  title,
  content,
  dataCreated,
  inLanguage,
  partfOf,
  copyRight: { name: copyRightName, email: copyRightEmail },
  organisation: {
    email: organizationEmail,
    name: organizationName,
    funder: { name: funderName },
  },
}) => {
  return (
    <div>
      <VerticalSpacer space={"4rem"} />
      <BlogLayout>
        <main>
          <article>
            <Posting>
              <Color color={"#6e6e73"}>
                <Posting.Author name={name} url={url} />
                <Posting.DatePublished>{dataPublished}</Posting.DatePublished>
              </Color>
              <Posting.Headline>
                <H1>{title}</H1>
              </Posting.Headline>
              <Posting.Body
                style={{
                  marginBottom: "2rem",
                }}
              >
                {content}
              </Posting.Body>

              <div
                style={{
                  padding: "3rem 0 1rem 0",
                }}
              >
                <Posting.DateCreated>{dataCreated}</Posting.DateCreated>
                <Posting.Language>{inLanguage}</Posting.Language>
                <Posting.Organization
                  funder={{ name: funderName }}
                  name={organizationName}
                  email={organizationEmail}
                />
                <Posting.PartOf url={partfOf} />
                <Posting.CopyRight
                  name={copyRightName}
                  email={copyRightEmail}
                />
              </div>
            </Posting>
          </article>
        </main>
      </BlogLayout>
    </div>
  );
};

export default ArticlePage;
