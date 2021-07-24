import styled from "styled-components";

const PostStyle = styled.div`
  background: var(--primary-sec);
  margin-top: 20px !important;
  width: 100%;

  .detail {
    display: flex;
    justify-content: space-between;
  }

  .detail,
  .info {
    padding: 10px 20px !important;
  }

  .avatarname {
    display: flex;
  }

  .nametime {
    display: flex;
  }

  .margin {
    margin-left: 10px;
  }

  .img {
    img {
      width: 100%;
      height: auto;
      color: #b0b3b8;
    }
  }

  p {
    color: var(--primary-text);
    font-size: 15px;
  }

  .name {
    font-weight: 600;
    margin-bottom: 5px;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .time {
    color: #b0b3b8;
    margin-right: 8px;
  }

  .menuicon {
    height: 24px;
    width: 24px;
    padding: 5px;
    border-radius: 50%;
    :hover {
      cursor: pointer;
      background: var(--primary-hover);
    }
  }

  .react {
    display: flex;
    p {
      margin-left: 10px;
    }
  }

  .likecmt {
    display: flex;
    justify-content: space-between;
    padding: 8px 15px !important;
    margin: 8px 15px !important;
    border-bottom: 1px solid var(--primary-hover);
  }

  .likecmtshare {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 5px 0px !important;
  }

  .like,
  .cmt,
  .share {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1% 10%;
    border-radius: 5px;
    :hover {
      background: var(--primary-hover);
    }
    p {
      color: var(--primary-text-secondary);
      font-weight: 600;
      margin-left: 10px;
    }
  }

  @media only screen and (max-width: 410px) {
    width: 100vh;
  }
`;

export default PostStyle;
