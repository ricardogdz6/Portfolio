import React, { Component } from 'react';
import './skillchip.css';



class Skillchip extends Component {
    render() {

        const { name, uri } = this.props; // Recibiendo los parámetros de props

        return (
            <div className={"flex-vertical center-content scaleAnim"} style={{margin:'15px'}}>
                <img className={"chip"} src={uri} alt="Descripción de la imagen" />
                <text className={"bodyText"}>{name}</text>
            </div>
        );
    }
}


export default Skillchip;