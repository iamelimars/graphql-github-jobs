import React from "react";
import Loader from "../../assets/circles-menu-1.gif";
import HashLoader from "react-spinners/HashLoader";
import styled from "styled-components";

const LoadingComponent = () => {
  return (
    <Container>
      <HashLoader color="#0d62ff" size="75" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LoadingComponent;
