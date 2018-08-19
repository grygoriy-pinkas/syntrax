import React from "react";
import Header from "../components/header/Header";

import "../style.css";
import Head from "../components/Head";

import Body from "../components/body/Body";
import Footer from "../components/Footer";
import Container from "muicss/lib/react/container";

export default class extends React.Component {
  //   static async getInitialProps({ req }) {
  //     const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  //     return { userAgent }
  //   }
  render() {
    return (
      <Container>
        <Head />

        <Container >
          <Header />
        </Container>
        <Container className="body">
          <Body />
        </Container>
        <Container >
          <Footer />
        </Container>
      </Container>
    );
  }
}
