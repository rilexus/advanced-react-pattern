import styled from "styled-components";
import NextLink from "next/link";

export const StyledLink = styled.a`
  cursor: pointer;
  font-size: 1.1rem;
  text-decoration: none;
  color: blue;
  position: relative;
  ${({ animate }) => {
    if (animate === false) {
      return "";
    }
    return `&:hover {
    &:after {
      transform: translateX(1rem) translateY(-50%) rotate(-45deg);
      opacity: 1;
    }
  }`;
  }}
  &:after {
    content: " ";
    width: 0.5rem;
    height: 0.5rem;
    opacity: 0;
    position: absolute;
    transform: translateY(-50%) rotate(-45deg);
    transform-origin: 50% 50%;
    transition: transform 200ms, opacity 200ms;
    right: 0;
    top: 50%;
    border-right: 2px solid blue;
    border-bottom: 2px solid blue;
  }
`;

const Link = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  );
};

export default Link;
