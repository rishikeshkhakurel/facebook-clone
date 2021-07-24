import styled from "styled-components";

const ChatSectionStyle = styled.div`
  margin: 0;
  padding: 20px !important;
  width: 20%;
  position: fixed;
  height: 97%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  p {
    font-weight: 600;
    color: var(--primary-text-secondary);
    font-size: 18px;
    margin: 10px;
  }
  .border {
    border: 1px solid var(--primary-hover);
  }

  #nav {
    display: flex;
    justify-content: space-between;
    #icon {
      display: flex;
      margin: 10px;
    }
  }

  .button p {
    font-weight: 400;
    font-size: 15px;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #5e5e5f;
    border-radius: 5px;
  }
`;

export default ChatSectionStyle;
