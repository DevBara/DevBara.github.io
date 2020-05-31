import React from 'react'
import { Slide } from 'react-slideshow-image';

import ImgOne from '../assets/ImgOne.png'
import ImgTwo from '../assets/ImgTwo.png'
import ImgThree from '../assets/ImgThree.jpg'

import Silver10 from '../assets/Silver10.png'
import platinum1 from '../assets/platinum1.png'
import SilverRnd from '../assets/SilverRnd.png'

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
          <div className="topTitle"><h1>Top Picks</h1></div>
          <div className="cardHome" >
            <img src ={Silver10} alt="silver" className="homeTop"/> 
            <p>10oz Silver Bar</p>
            <p>As low as: $210 </p>       
          </div>
          <div className="cardHome" >
            <img src ={SilverRnd} alt="silver" className="homeTop"/> 
            <p>1oz Silver Coin</p>
            <p>As low as: $22.50 </p>
          </div>
          <div className="cardHome" >
            <img src ={platinum1} alt="silver" className="homeTop"/> 
            <p>1oz Platinum Bar</p>
            <p>As low as: $960.89 </p>
          </div>
        </div>
      )
  }