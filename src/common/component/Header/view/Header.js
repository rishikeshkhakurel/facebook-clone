import React from "react";
import HeaderStyle from "./Header.Style";
import Logo from "../../../../assets/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import StorefrontIcon from "@material-ui/icons/Storefront";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import { AiFillMessage, AiOutlineHome } from "react-icons/ai";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";
import Avatar from "../../avatar/Avatar";
import pp from "../../../../assets/rishi.jpg";

function Header() {
  return (
    <HeaderStyle>
      <div id="logo-search">
        <Link to="/">
          <div id="logo">
            <img alt="" src={Logo} />
          </div>
        </Link>
        <div id="search">
          <SearchIcon className="icon-dark-search" />
          <input type="text" placeholder="Search Facebook"></input>
        </div>
      </div>

      <nav id="navbar">
        <Link to="/">
          <div id="home" title="Home">
            <AiOutlineHome className="icons-dark" />
          </div>
        </Link>
        <div id="watch" title="Watch">
          <OndemandVideoIcon className="icons-dark" />
        </div>

        <div id="store" title="MarketPlace">
          <StorefrontIcon className="icons-dark" />
        </div>

        <div id="group" title="Group">
          <PeopleAltOutlinedIcon className="icons-dark" />
        </div>
      </nav>

      <div id="profile">
        <Link to="/profile">
          <div id="profileimg">
            <Avatar img={pp} link="/profile" size="small" />
            <p>Rishikesh</p>
          </div>
        </Link>

        <div id="menu" title="Menu">
          <AppsRoundedIcon className="icons" />
        </div>
        <div id="message" title="Message">
          <AiFillMessage className="icons" />
          <span
            style={{
              borderRadius: "50%",
              background: "red",
              color: "white",
              padding: "1px 5px",
              fontSize: "12px",
              margin: "-5px",
            }}
          >
            2
          </span>
        </div>
        <div id="notification" title="Notification">
          <NotificationsIcon className="icons" />
          <span
            style={{
              borderRadius: "50%",
              background: "red",
              color: "white",
              padding: "1px 5px",
              fontSize: "12px",
              margin: "-5px",
            }}
          >
            5
          </span>
        </div>
        <div id="dropsown" title="Account">
          <ArrowDropDownIcon className="icons" />
        </div>
      </div>
    </HeaderStyle>
  );
}

export default Header;
