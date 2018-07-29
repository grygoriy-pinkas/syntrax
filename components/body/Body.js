import React from "react";
import data from "../../data";
import Introduction from "./Introduction";
import Feedback from "./Feedback";

export default class Body extends React.Component {
  render() {
    return (
      <div className="intro">
        <div className="intro_background">
          <div className="intro_text_area">
            <Introduction />
          </div>
          <div className="feedback">
            <Feedback />
          </div>
        </div>
      </div>
    );
  }
}
