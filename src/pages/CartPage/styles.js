import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 50px;

  /* gap: 200px; */

  @media (min-width: 768px) {
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: row;
  }
`;
