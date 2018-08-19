import React from "react";
import Header from "../components/header/Header";
import Panel from "muicss/lib/react/panel";
import Container from "muicss/lib/react/container";
import {Image} from 'react-bootstrap';
import Footer from "../components/Footer";
import data from "../data";

export default class Services extends React.Component {
  render() {
    // const image = (
    //   <div>
    //     <style type="text/css">{`
    //     .custom {
    //       maxHeight: 30px;
    //       maxWidth: 30px;
    //     }
    //     `}</style>
    //     <Image className="custom" src="/static/gal1.png" responsive />
    //   </div>
    // );
    return (
      <Container>
        <Container>
        <Header />
      </Container >
        <Container className="services">
        <Panel><p className="descr">Будова: {data.introText}</p></Panel>
        <Panel><p>Прибирання: {data.introText}</p></Panel>
        <Panel><p>Розкладання товару: {data.introText}</p></Panel>
        <Panel><p>Кухня: {data.introText}</p></Panel>
        <Panel><p>Курєрcька служба: {data.introText}</p></Panel>
      </Container>
      <Container>
        <Footer />
      </Container >
      </Container>
    );
  }
}
