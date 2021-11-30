import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  width: 90%;
  justify-content: start;
  align-items: center;
  box-sizing: border-box;
  height: 18vh;
  text-align: center;

  transition: 1s linear;

  img {
    border-radius: 5px;
    width: 60px;
    /* height: 120px; */
  }

  div {
    box-sizing: border-box;
    /* padding: 10px; */
    margin: 0 5px;
    display: flex;
    align-items: center;
    width: 70%;
    height: 70%;
  }

  section {
    color: #333;
    font-weight: 600;
    display: flex;
    box-sizing: border-box;
    height: 70%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    button {
      box-sizing: border-box;
      padding: 10px;
      font-size: 0.6rem;
      width: 80%;
      border-radius: 10px;
    }
  }
  @media screen and (min-width: 768px) {
    gap: 20px;
    height: 25vh;
    img {
      width: 100px;
    }

    div {
      justify-content: center;
    }

    section {
      height: 60%;
      align-self: flex-end;

      button {
        width: 90%;
        padding: auto;
        font-size: 0.7rem;
      }
    }
  }
`;
