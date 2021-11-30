import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 200px;
  border-radius: 10px;
  border: 2px solid gray;
  font-family: "Inter", sans-serif;
  box-sizing: border-box;
  color: #333;
  width: 80vw;
  margin-bottom: 20px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 1.2rem;
      font-weight: bold;
      color: #333;
    }

    h3 {
      font-size: 1.1rem;
      color: #333;
    }

    h2,
    h3 {
      width: 80%;
      text-align: center;
    }
  }

  header {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid gray;
    margin-bottom: 25px;

    h3 {
      margin-left: 3%;
    }

    h4 {
      margin-right: 5%;
    }
  }

  @media (min-width: 768px) {
    width: 48vw;

    header {
      h4 {
        margin-right: 8%;
      }
    }
  }
`;

export const Content = styled.ul`
  display: flex;
  box-sizing: border-box;
  margin-bottom: 25px;
  flex-direction: column;
  height: 300px;
  overflow-y: scroll;
  gap: 30px;
  align-items: center;
  list-style: none;
  width: inherit;

  @media screen and (min-width: 768px) {
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: visible;
    justify-content: center;
  }
`;
