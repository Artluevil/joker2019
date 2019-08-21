import React, { Component } from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";

export default class Trailer extends Component {
    render() {
        return (
            <div className="container-trailer">
                <iframe className="video" src="https://www.youtube.com/embed/t433PEQGErc" title="Joker2019-Trailer" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <IoMdCloseCircleOutline  onClick={this.props.onClickClose} className="icon-close"/>
            </div>
        )
    }
}
