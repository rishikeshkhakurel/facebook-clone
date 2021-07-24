import styled from "styled-components";

const RoomStyle = styled.div`
  background: var(--primary-sec);
  display: flex;
  padding: 10px 20px !important;

  #video {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid var(--primary-theme);
    border-radius: 20px;
    :hover {
      cursor: pointer;
      background: #3a3b3c;
    }
    p {
      font-weight: 600;
      font-size: 15px;
      color: var(--primary-text);
      color: var(--primary-theme);
      margin-left: 5px;
    }
  }
  .avatardiv {
    margin-left: 20px;
  }
`;

export default RoomStyle;
