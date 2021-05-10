import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image from './images/2/difference.jpg';
import image2 from './images/2/GBHK010-W.jpg';
import image3 from './images/2/GBHK010-W_2(90ml).jpg';


function Carouselcomp() {
  return (
    <Carousel dir="ltr">
      <div dir="ltr">
        <img src={image} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={image2} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={image3} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default Carouselcomp;