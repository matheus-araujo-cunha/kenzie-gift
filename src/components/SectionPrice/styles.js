import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  align-items: center;
  border-radius: 10px;
  width: 65%;
  height: 200px;
  box-sizing: border-box;
  border: 2px solid #999999;
  font-family: "Inter", sans-serif;

  h2 {
    /* margin-left: 15px; */
    width: 90%;
    color: #333;
    text-align: left;
    font-weight: 600;
  }

  section {
    display: flex;
    justify-content: space-between;
    width: 90%;

    p {
      color: #333;
    }

    span {
      font-weight: 600;
    }
  }

  button {
    width: 80%;
    color: white;
  }

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`;
