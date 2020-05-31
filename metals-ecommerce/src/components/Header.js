import React, { Component } from 'react'
import Metals_burned from '../assets/metals_burned.png'


export default class Header extends Component {
    render() {
        return (
            <div className="headerParent">
                <div> 
                    <img src={Metals_burned} alt="precious metals" className="siteLogo"/> 
                </div>
                <h1 className="headerTitle">PM Exchange</h1>
                <p className="headerSubTitle">Assets you can hold!</p>
                
            </div>
        )
    }
}

