import React from "react";
import Container from 'muicss/lib/react/container';

import data from "../../data";

export default class Introduction extends React.Component {
  render() {
    return (
      // <div>
      <Container className="matherial">
        <p className="intro_text">{data.introText}</p>
        </Container>
      // {/* </div> */}
    );
  }
}
