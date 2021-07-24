import React from "react";
import CoverPhoto from "../../common/component/coverphoto/CoverPhoto";
import ProfileStyle from "./Profile.Style";
import Post from "../../common/component/post/Post";
import PostCollection from "../../common/component/post-data/Post";

function Profile() {
  return (
    <ProfileStyle>
      <div id="coverphoto">
        <CoverPhoto />
      </div>
      <div id="postcollection">
        <div id="post">
          <Post />
          <PostCollection />
          <PostCollection />
          <PostCollection />
          <PostCollection />
        </div>
      </div>
    </ProfileStyle>
  );
}

export default Profile;
