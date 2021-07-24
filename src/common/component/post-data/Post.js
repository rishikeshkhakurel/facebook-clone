import React from "react";
import pp from "../../../assets/avatar.jpg";
import post from "../../../assets/post.jpg";
import Avatar from "../avatar/Avatar";
import PostStyle from "./Post.Style";
import PublicIcon from "@material-ui/icons/Public";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { RiShareForwardLine } from "react-icons/ri";

function PostCollection() {
  return (
    <PostStyle>
      <div className="detail">
        <div className="avatarname">
          <Avatar img={pp} size="medium" link="/engg" />
          <div className="margin">
            <div>
              <p className="name">The Engineering Bro</p>
            </div>
            <div className="nametime">
              <p className="time">8 hrs</p>
              <PublicIcon
                style={{ color: "var(--primary-text)", fontSize: "15px" }}
              />
            </div>
          </div>
        </div>
        <div className="menuicon">
          <MoreHorizIcon style={{ color: "#b0b3b8" }} />
        </div>
      </div>
      <div className="info">
        <p>Ibf@</p>
      </div>
      <div className="img">
        <img src={post} alt="" />
      </div>
      <div className="likecmt">
        <div className="react">
          <FavoriteIcon
            style={{
              color: "var(--primary-text)",
              background: "#eb294b",
              borderRadius: "50%",
              padding: "4px",
              fontSize: "12px",
            }}
          />
          <ThumbUpIcon
            style={{
              color: "var(--primary-text)",
              background: "var(--primary-theme)",
              borderRadius: "50%",
              padding: "4px",
              fontSize: "12px",
              marginLeft: "-4px",
            }}
          />
          <p className="time">2.7k</p>
        </div>
        <div>
          <p className="time">54 Comments 118 Shares</p>
        </div>
      </div>
      <div className="likecmtshare">
        <div className="like">
          <ThumbUpAltOutlinedIcon
            style={{ color: "var(--primary-text-secondary)" }}
          />
          <p>Like</p>
        </div>
        <div className="cmt">
          <ChatBubbleOutlineOutlinedIcon
            style={{ color: "var(--primary-text-secondary)" }}
          />
          <p>Comment</p>
        </div>
        <div className="share">
          <RiShareForwardLine
            style={{ color: "var(--primary-text-secondary)", fontSize: "28px" }}
          />
          <p>Share</p>
        </div>
      </div>
    </PostStyle>
  );
}

export default PostCollection;
