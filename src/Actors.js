import React, { Component } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import ActorsBackground from './Images/ActorsBackground.jpg'

export default class Actors extends Component {
    render() {
        return (
            <div>
                <div className="actors-container">
                </div>
                <div className="page-background">
                    <IoIosCloseCircleOutline onClick={this.props.onBackClick} className="icon-circle"/>
                    <img className="subpages-background" src={ActorsBackground}/>
                </div>
            </div>
        )
    }
}
