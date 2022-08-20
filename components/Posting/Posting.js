import React from "react";
import {
  ArticleBody,
  BlogPosting,
  Headline as BlogHeadline,
  InLanguage,
  Publisher,
  Url,
  Author as BlogAuthor,
  CopyrightHolder,
  IsPartOf,
} from "@react-microdata/blog-posting";
import { Name } from "@react-microdata/person";
import { Email, Funder } from "@react-microdata/organization";

const Author = ({ name, url, ...props }) => {
  return (
    <BlogAuthor.Person {...props}>
      <div>
        Author:
        <Name as={"span"}> {name}</Name>
      </div>
      <div>
        URL:
        <Url as={"a"} href={url}>
          {url}
        </Url>
      </div>
    </BlogAuthor.Person>
  );
};

const DatePublished = ({ children, props }) => {
  return (
    <div itemProp={"datePublished"} {...props}>
      Published at: {children}
    </div>
  );
};
const DateCreated = ({ children }) => {
  return <meta itemProp={"dateCreated"} content={children} />;
};

const Language = ({ children, props }) => {
  return <InLanguage as={"meta"} {...props} content={children} />;
};

const Headline = (props) => {
  return <BlogHeadline {...props} />;
};

const Body = (props) => {
  return <ArticleBody {...props} />;
};

const Organization = ({ name, email, funder: { name: funderName } }) => {
  return (
    <Publisher.Organization>
      Published by:
      <div>
        Email: <Email as={"span"}>{email}</Email>
      </div>
      <Funder.Person>
        <div>
          Name: <Name as={"span"}>{funderName}</Name>
        </div>
      </Funder.Person>
    </Publisher.Organization>
  );
};

const PartOf = ({ url }) => {
  return (
    <IsPartOf.CreativeWork>
      <meta itemProp={"url"} content={url} />
    </IsPartOf.CreativeWork>
  );
};

const Posting = (props) => {
  return <BlogPosting {...props} />;
};

const CopyRight = ({ name, email, ...props }) => {
  return (
    <CopyrightHolder.Person {...props}>
      Copyright: <Name as={"span"}>{name}</Name>
    </CopyrightHolder.Person>
  );
};

Posting.Headline = Headline;
Posting.DatePublished = DatePublished;
Posting.DateCreated = DateCreated;
Posting.Language = Language;
Posting.Body = Body;
Posting.Author = Author;
Posting.Organization = Organization;
Posting.CopyRight = CopyRight;
Posting.PartOf = PartOf;

export default Posting;
