import styled from "styled-components";

export const Container = styled.li`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  box-sizing: border-box;
  text-align: center;
  max-height: 250px;
  width: 250px;
  height: 250px;
  justify-content: space-between;
  display: flex;
  border-radius: 10px;
  padding: 10px 0;
  flex-direction: column;
  align-items: center;
  background-color: #e5e5e5;

  img {
    width: 100px;
  }
  h3 {
    color: #333;
  }

  span {
    font-weight: bold;
  }

  h3,
  span {
    width: 80%;
    text-align: left;
  }
`;
