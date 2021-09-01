import React from "react";
import { Link } from "react-router-dom";
function Avatar(props) {
  return (
    <div>
      <Link to={props.link}>
        {props.size === "small" && (
          <img
            style={{
              borderRadius: "50%",
              height: "31px",
              width: "31px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            alt=""
            src={props.img}
          />
        )}
      {props.size === "medium" && (
          <img
            style={{
              borderRadius: "50%",
              height: "41px",
              width: "41px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            alt=""
            src={props.img}
          />
        )}
      </Link>
    </div>
  );
}

export default Avatar;
