import React, { Component } from 'react'
import OnlyJoker from './Images/OnlyJoker.png'
import Smoke from './Images/Smoke.png'
import { MdMenu } from "react-icons/md";
import Alley from './Images/Alley.png'
import JokerLogo from './Images/JokerLogo.png'
import { IoIosArrowDropright } from "react-icons/io";
import Trailer from './Trailer'
import JokerMask from './Images/JokerMask.png'
import Menu from './Menu'

export default class App extends Component {
    state = {
        trailerClicked: false,
        menuClicked: false,
        pageStyle: "container",
    }

    onTrailerClick = () => {
        this.setState({
            trailerClicked: true,
            pageStyle: "container-hidden"
        })
    }

    onClickClose = () => {
        this.setState({
            trailerClicked: false,
            pageStyle: "container"
        })
    }

    onMenuClick = () => {
        this.setState({
            menuClicked: !this.state.menuClicked
        })
    }

    render() {
        console.log(this.state.trailerClicked)
        return (
            <div>
                 <div className="menu">
                    {this.state.menuClicked ? <Menu /> : null}
                </div>
                <div className={this.state.pageStyle}>
                    <div className="imgs-container">
                        <img className="joker" src={OnlyJoker}/>
                        <img className="alley" src={Alley}/>
                        <img className="logo" src={JokerLogo}/>
                        <img className="jokerMask" src={JokerMask}/>
                    </div>
                    <div onClick={this.onMenuClick} className="menu-container">
                        <div className={this.state.menuClicked ? "line1-close": "line1-menu"}></div>
                        <div className={this.state.menuClicked ? "line2-close": "line2-menu"}></div>
                        <div className={this.state.menuClicked ? "line3-close": "line3-menu"}></div>
                    </div>
                    <div className="btn-trailer" onClick={this.onTrailerClick}>
                        <div style={{background: 'red', padding: '1px 40px', marginLeft: '-55px'}}>
                            <p>Watch Trailer <IoIosArrowDropright className="playIcon"/></p>
                        </div>
                    </div>
                </div>
                <div>
                    {this.state.trailerClicked ? <Trailer onClickClose={this.onClickClose} style={{zIndex: '999 !important'}}/> : null}
                </div>
            </div>
        )
    }
}
