import React, { Component } from 'react';
import './phoneframe.css';
import Button from '@mui/joy/Button';
import {ChakraProvider, IconButton} from '@chakra-ui/react'
import {AiFillHome, AiTwotoneExperiment} from "react-icons/ai";
import {FaLightbulb} from "react-icons/fa";


class Phoneframe extends Component {

    render() {
        return (
            <div className={"floatingCard"}>
                <div className={"phoneContent"}>
                    {/* NOTCH DECORATION */}
                    <div className={"notch"}></div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Phoneframe;