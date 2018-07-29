import React from "react";
import data from "../../data";

export default class Introduction extends React.Component {
  render() {
    return (
      <div>
        <p className="intro_text">{data.introText}</p>
      </div>
    );
  }
}
