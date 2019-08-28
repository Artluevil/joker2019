import React, { Component } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import GaleryBackground from './Images/Galery.jpg'

export default class Galery extends Component {
    render() {
        return (
            <div>
                <div className="galery-container">
                </div>
                <div className="page-background">
                    <IoIosCloseCircleOutline onClick={this.props.onBackClick} className="icon-circle"/>
                    <img className="subpages-background" src={GaleryBackground}/>
                </div>
            </div>
        )
    }
}
