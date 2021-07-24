import React from "react";
import AddStoryStyle from "./AdddStory.Style";
import PP from "../../../assets/rishi.jpg";
import AddIcon from "@material-ui/icons/Add";

function AddStory() {
  return (
    <AddStoryStyle>
      <img alt="" src={PP} id="PP" />
      <AddIcon id="icon" />
      <p>
        Create
        <br /> Story
      </p>
    </AddStoryStyle>
  );
}

export default AddStory;
