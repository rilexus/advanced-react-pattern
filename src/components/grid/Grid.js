import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const GridStyled = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "header header header header"
    "article article aside aside"
    "article article aside aside"
    "footer footer footer footer";
`;

const HeaderStyled = styled.div`
  background-color: red;
`;

const AsideStyled = styled.div`
  background-color: blue;
`;

const BodyStyled = styled.div``;

const ArticleStyled = styled.div`
  background-color: yellow;
`;

const FooterStyled = styled.div`
  background-color: green;
`;

const GridArea = styled.div`
  grid-area: ${({ name }) => name};
`;

const Grid = (props) => {
  return (
    <GridStyled>
      <GridArea name={"header"}>
        <HeaderStyled>header</HeaderStyled>
      </GridArea>
      <GridArea name={"article"}>
        <ArticleStyled>body</ArticleStyled>
      </GridArea>
      <GridArea name={"aside"}>
        <AsideStyled>aside</AsideStyled>
      </GridArea>
      <GridArea name={"footer"}>
        <FooterStyled>footer</FooterStyled>
      </GridArea>
    </GridStyled>
  );
};

Grid.propTypes = {};

export default Grid;
