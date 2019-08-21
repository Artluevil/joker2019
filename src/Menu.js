import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div className="options-container">
                <div onClick={this.props.onOptionClick} name="actors" className="option1">
                    <h2 onClick={this.props.onOptionClick} name="actors">Actors</h2>
                </div>
                <div onClick={this.props.onOptionClick} name="galery" className="option2">
                    <h2>Galery</h2>
                </div>
                <div onClick={this.props.onOptionClick} name="informations" className="option3">
                    <h2>Informations</h2>
                </div>
            </div>
        )
    }
}
