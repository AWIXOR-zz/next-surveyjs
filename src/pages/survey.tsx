import React from "react";
// import OneLayout from "./../../../../Layout/One/index";
import dynamic from "next/dynamic";
import styled from "styled-components";

const PartOneComponent = dynamic(() => import("../components/survey"), {
  ssr: false,
});
const Container = styled.div`
  margin: 2rem;
`;
const Items = () => {
  return (
    <Container>
      <PartOneComponent />
    </Container>
  );
};
export default Items;
