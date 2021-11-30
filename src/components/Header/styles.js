import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 50px;
  font-size: 1rem;
  border-bottom: 1px solid #999999;
  border-radius: 2px;

  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  font-family: "Inter", sans-serif;
  color: #333;
  font-weight: 600;

  h1 {
    margin-left: 7%;
    text-align: center;
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
    margin-right: 7%;
    height: inherit;

    gap: 10px;

    h3 {
      height: inherit;
      display: flex;
      align-items: center;
      gap: 2px;
      cursor: pointer;
    }
  }
`;
