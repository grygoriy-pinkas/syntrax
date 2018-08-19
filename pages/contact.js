import React from "react";
import Header from "../components/header/Header";
import Container from "muicss/lib/react/container";
import Footer from "../components/Footer";
import Panel from "muicss/lib/react/panel";
import data from "../data";

export default class Services extends React.Component {
  render() {
    return (
      <Container>
        <Container>
          <Header />
        </Container>
        <Container >
        <Panel className="contacts">
        <Panel >
          <p>{data.adress}</p>
          </Panel>
           <ul>
             <li>Manager 1, +48 666 777 888</li>
             <li>Manager 1, +48 111 222 333</li>
             <li>Manager 1, +48 444 555 333</li>

           </ul>
          </Panel>
        </Container>
        <Container>
          <Footer />
        </Container>
      </Container>
    );
  }
}
