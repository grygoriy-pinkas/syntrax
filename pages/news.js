import React from "react";
import Panel from "muicss/lib/react/panel";

import Header from '../components/header/Header'
import Container from "muicss/lib/react/container";
import {Image} from 'react-bootstrap';
import Footer from "../components/Footer";
import data from "../data";



export default class News extends React.Component {
  render() {
    return (
      <Container>
      <Container>
      <Header />
    </Container >
      <Container className="services">
      <Panel className="news"><p >Новина №1</p></Panel>
      <Panel className="news"><p className="news">Новина №2</p></Panel>
      <Panel className="news"><p className="news">Новина №3</p></Panel>
      <Panel className="news"><p className="news">Новина №4</p></Panel>
    </Container>
    <Container>
      <Footer />
    </Container >
    </Container>
        
    );
  }
}
