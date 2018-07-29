import React, { Component } from "react";
import Social from "./Social";

const date = new Date();
const period =
  date.getFullYear() === 2018 ? 2018 + " " : 2018 + "-" + date.getFullYear() + " ";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
          <Social />
         <p className="copyrigth">&copy; {period} <a href="https://web.facebook.com/gricha.p">Grygoriy Pinkas</a></p>
      </div>
    );
  }
}
