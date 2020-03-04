import styled from 'styled-components';
/* top | right | bottom | left */
export const Container = styled.div`
  background: #ffffff;
  padding: 0 30px;
  border-bottom: 1px solid #dddd;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: left;

  aside {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      padding-right: 20px;
      height: 30px;
    }

    strong {
      padding: 10px;
      color: #777777;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  align-items: center;

  div {
    margin-right: 10px;

    span {
      display: block;
      color: #444444;
      font-weight: bold;
    }

    a {
      left: 0;
      margin-top: 2px;
      font-size: 12px;
      color: #ff0000;
    }
  }
`;
