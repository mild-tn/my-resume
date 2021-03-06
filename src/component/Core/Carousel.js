import React, { Component } from 'react';
import Slider from "react-slick";
import styled from "styled-components"

const Img = styled.img`
  width: 100%;
  height: 20%;
`
class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const { pic } = this.props
    return (
      <div>
        <Slider {...settings}>
          {pic.map((data,i) => {
            return (
              <Img key={i} src={`/img/protoForPortfolio/${data.img}`}/>
            )
          })
          }
        </Slider>
      </div>
    );
  }
}

export default Carousel;