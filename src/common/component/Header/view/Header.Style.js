import styled from "styled-components";

const HeaderStyle = styled.div`
  background: var(--primary-header);
  padding: 5px 0px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  #logo-search {
    margin-left: 15px;
    #logo {
      img {
        height: 45px;
        width: auto;
      }
    }
  }

  #logo-search,
  #navbar,
  #search,
  #profile,
  #profileimg {
    display: flex;
    align-items: center;
  }

  #profileimg img {
    height: 31px;
    width: auto;
  }

  .icon-dark-search {
    color: #9c9c9c;
  }
  .icons-dark {
    color: #b0b3b8;
    padding: 5px 55px;
    font-size: 35px;
    font-weight: 300;

    :hover {
      background: #3a3b3c;
      border-radius: 10px;
      cursor: pointer;
    }
  }

  .icons {
    color: #e4e6ea;
    background: var(--primary-hover);
    border-radius: 50%;
    padding: 5px;
    font-size: 30px;
    font-weight: 300;
    margin-left: 10px;

    :hover {
      background: #5d5d5d;
      cursor: pointer;
    }
  }

  p {
    color: var(--primary-the);
    font-weight: 600;
    font-size: 14px;
  }

  #profile {
    margin-right: 15px;
    #profileimg {
      background: rgba(45, 136, 255, 0.3);
      padding: 1px 5px;
      border-radius: 20px;
      :hover {
        cursor: pointer;
      }
      p {
        margin: 0 8px;
      }
    }
  }

  #search {
    background: var(--primary-hover);
    border-radius: 20px;
    padding: 8px 10px;
    margin-left: 20px;
    input {
      background: transparent;
      outline: none;
      border: 0;
      font-size: 16px;
      margin-left: 5px;
      color: var(--primary-text);
    }
  }
  @media only screen and (max-width: 1100px) {
    width: 100%;
    #navbar {
      display: none;
    }

    #search {
      margin-left: 7px;
      input {
        display: none;
      }
    }

    #menu {
      display: none;
    }
    #profileimg p {
      display: none;
    }
  }
`;

export default HeaderStyle;
