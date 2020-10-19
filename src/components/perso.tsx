import React from "react";
import { styled } from "../theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  @media ${({ theme }) => theme.breakpoint.mobile} {
    padding: 1rem;
  }
`;

const Perso = () => {
  return (
    <Container>
      <h2>About me</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cumque expedita similique sapiente quos non odio
        ratione nostrum, magni architecto cum impedit saepe ea perspiciatis possimus beatae enim repudiandae. Quisquam?
      </p>
    </Container>
  );
};

export default Perso;
