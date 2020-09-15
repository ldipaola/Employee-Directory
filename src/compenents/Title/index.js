import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div class="hero-image">
  <div class="hero-text">
  <h1 className="title">{props.children}</h1>
  </div>
</div>
  );
}

export default Title;
