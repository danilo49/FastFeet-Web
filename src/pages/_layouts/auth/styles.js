import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7 0% 0% no-repeat padding-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  padding: 30px;
  width: 100%;
  max-width: 395px;

  text-align: center;
  background: #ffffff;
  border-radius: 4px;

  img {
    margin-top: 30px;
    max-width: 250px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    span {
      color: #444444;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    input {
      border: 2px solid #dddddd;
      border-radius: 4px;
      height: 44px;
      margin-bottom: 10px;
      margin: 0 0 10px;

      padding: 0 15px;
      &::placeholder {
        color: #dddddd;
      }
    }

    button {
      margin: 5px 0 20px;
      height: 44px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }
    }
  }
`;
