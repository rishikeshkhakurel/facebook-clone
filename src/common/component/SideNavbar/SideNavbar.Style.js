import styled from "styled-components";

const SideNavbarStyle = styled.div`
  margin: 0;
  width: 20%;
  position: fixed;
  height: 100%;
  display: flex;
  flex-direction: column;

  .Button {
    margin-top: 10px;
  }

  .border {
    border: 1px solid var(--primary-hover);
    margin-bottom: 10px !important;
  }

  .title {
    p {
      font-weight: 600;
      color: var(--primary-text-secondary);
      font-size: 18px;
      margin: 10px;
    }
  }
`;

export default SideNavbarStyle;
