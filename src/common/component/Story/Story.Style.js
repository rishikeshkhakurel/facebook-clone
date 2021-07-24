import styled from "styled-components";

const StoryStyle = styled.div`
  position: relative;
  height: 190px;
  width: 110px;
  color: var(--primary-text);
  overflow: hidden;
  margin-left: 10px !important;
  border-radius: 10px;
  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  .story {
    height: 190px;
    width: 110px;
    object-fit: cover;
    opacity: 0.8;
  }
  .pp {
    position: absolute;
    top: 8px;
    left: 8px;
    height: 31px;
    width: 31px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--primary-theme);
  }
  p {
    position: absolute;
    bottom: 8px;
    left: 8px;
    font-weight: 600;
    font-size: 15px;
  }
`;

export default StoryStyle;
