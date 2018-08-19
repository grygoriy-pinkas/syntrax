import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from "muicss/lib/react/container";

export default class Carusel extends React.Component {
  render() {
    return (
      <Container>
        <Carousel infiniteLoop={true} autoPlay={true} emulateTouch={true}>
          <div>
            <img src="/static/small/i1.jpg" />
            <p className="text">Legend 1</p>
          </div>
          <div>
            <img src="/static/small/i2.jpg" />
            <p className="text">Legend 2</p>
          </div>
          <div>
            <img src="/static/small/i3.jpg" />
            <p className="text">Legend 3</p>
          </div>
          <div>
            <img src="/static/small/i4.jpg" />
            <p className="text">Legend 3</p>
          </div>
          <div>
            <img src="/static/small/i5.jpg" />
            <p className="text">Legend 3</p>
          </div>
        </Carousel>
      </Container>
    );
  }
}
