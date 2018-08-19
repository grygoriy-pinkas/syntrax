import React, { Component } from "react";
import Social from "./Social";
import Panel from 'muicss/lib/react/panel';
const date = new Date();
const period =
  date.getFullYear() === 2018 ? 2018 + " " : 2018 + "-" + date.getFullYear() + " ";

export default class Footer extends Component {
  render() {
    return (
      <Panel className="footer">
          <Social />
         <p className="copyrigth">&copy; {period} Website Developed by <a href="https://web.facebook.com/gricha.p">GriSHA</a></p>
         </Panel>
    );
  }
}
