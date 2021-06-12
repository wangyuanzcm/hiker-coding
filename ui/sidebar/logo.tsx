import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Container = styled.div`
  font-size: 25px;
  text-align: left;
  margin-bottom: 15px;
`;

export default function Logo() {
  return (
    <Container>
      手写代码在线复习
    </Container>
  );
}
