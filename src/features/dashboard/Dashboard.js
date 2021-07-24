import React from "react";
import Post from "../../common/component/post/Post";
import Room from "../../common/component/Room/Room";
import AddStory from "../../common/component/Story/AddStory";
import Story from "../../common/component/Story/Story";
import DashboardStyles from "./Dashboard.Style";
import PostCollection from "../../common/component/post-data/Post";
import SideNavbar from "../../common/component/SideNavbar/SideNavbar";
import ChatSection from "../../common/component/chatsection/ChatSection";

function Dashboard() {
  return (
    <DashboardStyles>
      <div id="sidenavbar">
        <SideNavbar />
      </div>
      <div id="content-center">
        <div id="center">
          <div id="story">
            <AddStory />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
          </div>
          <div id="post">
            <Post />
          </div>
          <div id="room">
            <Room />
          </div>
          <div id="/postcollection">
            <PostCollection />
            <PostCollection />
            <PostCollection />
          </div>
        </div>
      </div>
      <div id="chatsection">
        <ChatSection />
      </div>
    </DashboardStyles>
  );
}

export default Dashboard;
