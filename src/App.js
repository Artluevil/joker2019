import React, { Component } from 'react'
import OnlyJoker from './Images/OnlyJoker.png'
import Smoke from './Images/Smoke.png'
import { MdMenu } from "react-icons/md";
import Alley from './Images/Alley.png'
import JokerLogo from './Images/JokerLogo.png'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="imgs-container">
                    <img className="joker" src={OnlyJoker}/>
                    <img className="alley" src={Alley}/>
                    <img className="logo" src={JokerLogo}/>
                </div>
                <div className="menu-container">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
        )
    }
}
