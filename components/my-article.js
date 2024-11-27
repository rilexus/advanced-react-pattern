import React from "react";
import {
  Article,
  Author,
  CopyrightHolder,
  Headline,
  ArticleBody,
  DatePublished,
  Keywords,
} from "@react-microdata/article";
import Flex from "../ui/Flex/Flex";
import { Name as PersonName } from "@react-microdata/person/dist/src/itemProps/Name";
import { Email } from "@react-microdata/person";

const date = new Date().toLocaleDateString();

export default function MyArticle({ title, body }) {
  return (
    <div
      style={{
        marginBottom: "1rem",
      }}
    >
      <Article as={"article"}>
        <Headline>{title}</Headline>
        <ArticleBody>{body}</ArticleBody>
        <div
          style={{
            fontSize: ".8rem",
            color: "gray",
          }}
        >
          <div>
            <Author.Person>
              <Flex>
                <div>Author: &nbsp;</div>
                <PersonName>Stanislav Panchenko &nbsp;</PersonName>
              </Flex>
              <div>
                Email: &nbsp;
                <Email as={"a"} href="mailto:email@stanislavpanchenko.de">
                  email@stanislavpanchenko.de
                </Email>
              </div>
            </Author.Person>
          </div>
          <Flex>
            <div>Copy rights: &nbsp;</div>
            <CopyrightHolder.Person>
              <PersonName>Stanislav Panchenko</PersonName>
            </CopyrightHolder.Person>
          </Flex>
          <Flex>
            <div>Published: &nbsp;</div>
            <DatePublished>{date}</DatePublished>
          </Flex>
        </div>
      </Article>
    </div>
  );
}
