import styled from "styled-components";

const PostStyle = styled.div`
  background: var(--primary-sec);
  border-radius: 10px;
  width: 100%;

  #avatarse {
    display: flex;
    padding: 10px 0;
    padding: 10px 20px !important;
  }

  input {
    background: var(--primary-hover);
    outline: none;
    border: 0;
    font-size: 18px;
    color: var(--primary-text);
    width: 92%;
    margin: auto;
    padding: 10px;
    border-radius: 20px;
    :hover {
      cursor: pointer;
    }
  }

  #icon {
    display: flex;
    padding: 10px 20px !important;
    justify-content: space-between;
    padding: 7px 0px;
    border-top: 1px solid #3a3b3c;
  }

  .icons-dark {
    color: #b0b3b8;
    padding: 10px 45px;
    font-size: 30px;
    font-weight: 300;
    display: flex;
    align-items: center;
    :hover {
      background: #3a3b3c;
      border-radius: 10px;
      cursor: pointer;
    }
  }
  p {
    font-size: 16px;
    margin-left: 5px;
  }
`;

export default PostStyle;
