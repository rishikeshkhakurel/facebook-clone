import styled from "styled-components";

const DashboardStyles = styled.div`
  display: flex;
  background: var(--primary);

  #sidenavbar {
    padding: 20px !important;
  }

  #content-center {
    width: 56%;
    display: flex;
    margin-left: 20%;
    justify-content: center;
    @media only screen and (max-width: 1400px) and (min-width: 1300px) {
      width: 54%;
    }
    @media only screen and (max-width: 1500px) and (min-width: 1300px) {
      width: 54%;
    }
    @media only screen and (max-width: 1700px) and (min-width: 1500px) {
      width: 55%;
    }
  }
  #center {
    width: 70%;
    display: flex;
    flex-direction: column;
  }
  #story {
    display: flex;
    margin: 20px 0px;
  }

  @media only screen and (max-width: 1100px) {
    width: 100vh;
    #sidenavbar,
    #chatsection {
      display: none;
    }

    #content-center {
      width: 100vh;
      margin-left: 0;
    }

    #center {
      width: 100vh;
      margin-left: 0;
    }
  }
`;

export default DashboardStyles;
