import React, { Component } from 'react';
import './phoneframe.css';
import Button from '@mui/joy/Button';
import {ChakraProvider, IconButton} from '@chakra-ui/react'
import {AiFillHome, AiOutlineMail, AiTwotoneExperiment} from "react-icons/ai";
import {FaLightbulb} from "react-icons/fa";
import pfp from "../../../resources/images/ricardopfp.png";
import ReactCountryFlag from "react-country-flag";
import {BsGithub, BsLinkedin} from "react-icons/bs";


class PhoneframeFilled extends Component {

    render() {

        return (
            <div className={"floatingCard"}>
                <div className={"phoneContent"} >
                    {/* NOTCH DECORATION */}
                    <div className={"notch"}></div>
                    {/* UPPER HALF */}
                    <div className={"upperHalf center-content flex-vertical"}>
                        <img className={"pfp"} style={{marginBottom: '10px'}} src={pfp} alt="My pfp"/>
                        <text className={"nameText"}>Ricardo Gallego Domínguez</text>
                        <text className={"subText"}>Full-Stack Developer</text>
                    </div>
                    {/* BELOW HALF */}
                    <div className={"belowHalf"}>
                        {/* WHITE DECORATION */}
                        <div className={"trickyWhiteDecoration"}></div>
                        <div style={{marginLeft: '15px', marginRight: '15px', marginBottom: '15px'}}>
                            <text className={"bodyText littleTopOffset"}><b>Full-Stack Developer</b> with a special passion for <b>frontend</b>,
                                <b> mobile</b> and <b>web</b> projects. Always eager to learn and enhance my skills to deliver innovative and efficient solutions.
                            </text>
                        </div>

                        {/* SPANISH FLAG */}
                        <div className={"vertical-center"}>
                            <ReactCountryFlag className={"iconEmail"} countryCode="ES" svg/>
                            <text className={"bodyText text_bold "}
                                  style={{marginLeft: '5px', marginRight: '5px'}}>Spanish:
                            </text>
                            <text className={"bodyText "} style={{marginLeft: '0px', marginRight: '0px'}}>Native
                            </text>
                        </div>

                        {/* ENGLISH FLAG */}
                        <div className={"vertical-center"}>
                            <ReactCountryFlag className={"iconEmail"} countryCode="US" svg/>
                            <text className={"bodyText text_bold "}
                                  style={{marginLeft: '5px', marginRight: '5px'}}>English:
                            </text>
                            <text className={"bodyText "} style={{marginLeft: '0px', marginRight: '0px'}}>Advanced
                            </text>
                        </div>

                        {/* EMAIL */}
                        <div className={"flex-horizontal vertical-center"} style={{marginTop: '25px'}}>
                            <AiOutlineMail className={"iconEmail"}></AiOutlineMail>
                            <text className={"bodyText"} style={{marginLeft: '5px'}}>ricardogdz6@gmail.com</text>
                        </div>

                        <div className={"socialIcons flexLateral"}>
                            <a href="https://www.linkedin.com/in/ricardo-gallego-domínguez-928a80213"
                               target="_blank" rel="noopener noreferrer">
                                <BsLinkedin className={"socialIcon"}></BsLinkedin>
                            </a>
                            <a href="https://github.com/ricardogdz6" target="_blank" rel="noopener noreferrer">
                                <BsGithub className={"socialIcon"}></BsGithub>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default PhoneframeFilled;
