import React from "react";
import ButtonStyle from "./Button.Style";
import Avatar from "../avatar/Avatar";

function Button(props) {
  return (
    <ButtonStyle>
      <Avatar img={props.img} size={props.size} link={props.link} />
      <p>{props.children}</p>
    </ButtonStyle>
  );
}

export default Button;
