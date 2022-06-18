import React from "react";
import Container from "../../ui/Container/Container";
import Flex from "../../ui/Flex/Flex";

const Layout = ({ navigation, content }) => {
  return (
    <Container>
      <Flex>
        <div
          style={{
            marginRight: "1rem",
          }}
        >
          {navigation}
        </div>
        <div>{content}</div>
      </Flex>
    </Container>
  );
};

export default Layout;
