import React, { Component } from 'react';
import OnlyJoker from './Images/OnlyJoker.png';
import Alley from './Images/Alley.png';
import JokerLogo from './Images/JokerLogo.png';
import { IoIosArrowDropright } from "react-icons/io";
import Trailer from './Trailer';
import JokerMask from './Images/JokerMask.png';
import Menu from './Menu';
import Actors from './Actors';
import Galery from './Galery';
import Informations from './Informations';

export default class App extends Component {
    state = {
        trailerClicked: false,
        menuClicked: false,
        pageStyle: "container",
        actors: false,
        galery: false,
        informations: false,
    }

    onTrailerClick = () => {
        this.setState({
            trailerClicked: true,
            pageStyle: "container-hidden",
        })
    }

    onClickClose = () => {
        this.setState({
            trailerClicked: false,
            actors: false,
            galery: false,
            informations: false,
            pageStyle: "container"
        })
    }

    onMenuClick = () => {
        this.setState({
            menuClicked: !this.state.menuClicked
        })
    }

    onOptionClick = (e) => {
        this.setState({
            [e.target.getAttribute('name')]: true,
        })
    }

    render() {
        console.log(this.state.actors)
        return (
            <div>
                <div className="actors-page">
                    {this.state.actors ? <Actors /> : null}
                </div>
                <div className="galery-page">
                    {this.state.galery ? <Galery /> : null}
                </div>
                <div className="information-page">
                    {this.state.informations ? <Informations /> : null}
                </div>
                 <div className="menu">
                    {this.state.menuClicked ? <Menu onOptionClick={this.onOptionClick}/> : null}
                </div>
                <div className={this.state.pageStyle}>
                    <div className="imgs-container">
                        <img className="joker"  alt="Joker"src={OnlyJoker}/>
                        <img className="alley" alt="Alley" src={Alley}/>
                        <img className="logo" alt="JokerPoster" src={JokerLogo}/>
                        <img className="jokerMask" alt="JokerLogo" src={JokerMask}/>
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
