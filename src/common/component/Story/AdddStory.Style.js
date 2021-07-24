import styled from "styled-components";

const AddStoryStyle = styled.div`
  position: relative;
  height: 190px;
  width: 110px;
  color: var(--primary-text);
  overflow: hidden;
  border-radius: 10px;
  background: var(--primary-sec);
  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
  #PP {
    height: 140px;
    width: 110px;
    object-fit: cover;
    z-index: -2;
    opacity: 0.8;
  }

  #icon {
    position: absolute;
    bottom: 40px;
    left: 35px;
    z-index: 1;
    font-size: 30px;
    background: var(--primary-theme);
    border-radius: 50%;
    border: 3px solid var(--primary-sec);
  }

  p {
    position: absolute;
    bottom: 8px;
    left: 30px;
    font-weight: 550;
    font-size: 15px;
    text-align: center;
  }
`;

export default AddStoryStyle;
