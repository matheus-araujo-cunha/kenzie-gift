import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Content = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
  list-style: none;
  width: 80%;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
