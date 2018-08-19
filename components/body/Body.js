import React from "react";
import data from "../../data";
import Introduction from "./Introduction";
import Feedback from "./Feedback";
import Container from "muicss/lib/react/container";
import Carusel from "./Carusel";

export default class Body extends React.Component {
  render() {
    return (
      <Container >
        <div className="intro">
          <div className="intro_background">
            <Container className="intro">
              <div className="intro_text_area">
                <Introduction  />
              </div>
              <div className="feedback">
                <Feedback  />
              </div>
            </Container>
            <Container  className="car">
              <Carusel />
            </Container>
          </div>
        </div>
      </Container>
    );
  }
}
