import React from "react";
import { styled } from "frontity";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
`;

const Container = (props) => <Wrapper>{props.children}</Wrapper>;

export default Container;
