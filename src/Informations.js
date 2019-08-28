import React, { Component } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import InformationsBackground from './Images/Informations.jpg'

export default class Informations extends Component {
    render() {
        return (
            <div>
                <div className="informations-container">
                </div>
                <div className="page-background">
                    <IoIosCloseCircleOutline onClick={this.props.onBackClick} className="icon-circle"/>
                    <img className="subpages-background" src={InformationsBackground}/>
                </div>
            </div>
        )
    }
}
