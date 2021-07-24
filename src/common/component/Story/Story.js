import React from "react";
import StoryStyle from "./Story.Style";

function Story(props) {
  return (
    <StoryStyle>
      <div>
        <img
          className="story"
          alt=""
          src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        />
        <img
          alt=""
          className="pp"
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        />
      </div>
      <p>Rishikesh Khakurel</p>
    </StoryStyle>
  );
}

export default Story;
