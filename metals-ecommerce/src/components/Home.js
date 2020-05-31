import React from 'react'
import { Slide } from 'react-slideshow-image';

import ImgOne from '../assets/ImgOne.png'
import ImgTwo from '../assets/ImgTwo.png'
import ImgThree from '../assets/ImgThree.jpg'

const slideImages = [
    ImgOne,
    ImgTwo,
    ImgThree
  ];
   
  const properties = {
    duration: 4000,
    transitionDuration: 400,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
  
  }

export default function Home() {
    return (  
        <div className="slide-container" id="slide-box">
          <Slide {...properties}>
  
            <div className="slides">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <span>Precious Metals is only a click away</span>
              </div>
            </div>
  
            <div className="slides">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <span>Assets you can hold!</span>
              </div>
            </div>
  
            <div className="slides">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <span>Free Shipping on Orders over $50</span>
              </div>
            </div>
          </Slide>
          <h1>Precious Metals Top Picks</h1>
        </div>
      )
  }