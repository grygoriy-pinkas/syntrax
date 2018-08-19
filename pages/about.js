import React from "react";

import Header from "../components/header/Header";
import Panel from "muicss/lib/react/panel";
import Container from "muicss/lib/react/container";
import { Image } from "react-bootstrap";
import Footer from "../components/Footer";
import data from "../data";

export default class About extends React.Component {
  render() {
    return (
      <Container>
        <Container>
          <Header />
        </Container>
        <Container >
          <Panel className="about">
            <p>{data.about}</p>
          </Panel>
        </Container>
        <Container>
          <Footer />
        </Container>
      </Container>
    );
  }
}
