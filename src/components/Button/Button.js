import React from "react";
import "./button.css";

function Button() {
  const onClick = () => {
    alert("Button clicked");
  };
  return <div onClick={onClick}>Print Page</div>;
}

export default Button;
