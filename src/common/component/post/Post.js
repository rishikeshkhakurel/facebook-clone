import React from "react";
import Avatar from "../avatar/Avatar";
import PostStyle from "./Post.Style";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import pp from "../../../assets/rishi.jpg";

function Post() {
  return (
    <PostStyle>
      <div id="avatarse">
        <Avatar img={pp} link="/profile" size="medium" />
        <input placeholder="What's on your mind, Rishikesh?"></input>
      </div>
      <div id="icon">
        <div className="icons-dark">
          <VideoCallIcon style={{ color: "#f02849", fontSize: "30px" }} />
          <p>Live Video</p>
        </div>
        <div className="icons-dark">
          <PhotoLibraryIcon style={{ color: "#45bd62", fontSize: "30px" }} />
          <p>Photo/Video</p>
        </div>
        <div className="icons-dark">
          <EmojiEmotionsOutlinedIcon
            style={{ color: "#f7b928", fontSize: "30px" }}
          />
          <p>Felling/Activity</p>
        </div>
      </div>
    </PostStyle>
  );
}

export default Post;
