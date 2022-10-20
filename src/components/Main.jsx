import React from "react";
import "./styles.css";
import arrow from "./images/arrow.png";
import last from "./images/last.svg";
import frame from "./images/frame.png";
import frame2 from "./images/frame22.png";
import topImg from "./images/Group 33.png";
import codeBoard from "./images/codeboard.png";
import shape from "./images/shape.svg";
import group33Yellow from "./images/Group 34.svg";

function Main() {
  return (
    <main>
      <img src={topImg} alt="" className="top-img" />
      <h1 className="title">AI Regex Generation</h1>
      <img src={group33Yellow} alt="" className="g33-yellow" />
      <input
        className="input"
        type="text"
        placeholder="pull the domain out of an email address john@smith.com "
      />
      <button type="button" className="btn">
        new
      </button>
      <img src={arrow} alt="arrow" className="arrow" />
      <img src={shape} alt="shape" className="shape" />
      <img src={codeBoard} alt="board" className="code-board" />
      <img src={frame2} alt="frame2" className="frame-2" />
      <img src={frame} alt="frame" className="frame" />
      <img src={last} alt="last" className="last" />
    </main>
  );
}

export default Main;
