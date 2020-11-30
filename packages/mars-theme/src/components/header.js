import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";

const Header = ({ state }) => {
  return (
    <>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const StyledLink = styled(Link)`
  text-decoration: none;
`;
