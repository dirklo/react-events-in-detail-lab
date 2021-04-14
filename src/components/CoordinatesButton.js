// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    
    handleClick = (e) => {
        const xpos = e.clientX
        const ypos = e.clientY
        this.props.onReceiveCoordinates([xpos, ypos])
    } 

    render() {
        return (
            <div>
                <button type='button' onClick={this.handleClick}>Coordinates</button>
            </div>
        )
    }
}
