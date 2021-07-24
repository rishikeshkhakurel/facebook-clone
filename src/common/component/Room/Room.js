import React from "react";
import RoomStyle from "./Room.Style";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import Avatar from "../avatar/Avatar";
import pp from "../../../assets/rishi.jpg";

function Room() {
  return (
    <RoomStyle>
      <div id="video">
        <VideoCallIcon style={{ color: "#f02849", fontSize: "30px" }} />
        <p>Create Room</p>
      </div>
      <div className="avatardiv">
        <Avatar img={pp} link="/profile" size="medium" />
      </div>
      <div className="avatardiv">
        <Avatar img={pp} size="medium" link="/profile" />
      </div>
      <div className="avatardiv">
        <Avatar img={pp} size="medium" link="/profile" />
      </div>
    </RoomStyle>
  );
}

export default Room;
