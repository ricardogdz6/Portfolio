import React, { Component } from 'react';
import './Home.css';
import '../../global.css';
import Presentation from "../../components/presentation/Presentation";
import Technologies from "../../components/technologies/technologies";
import FixedNav from "../../components/fixedNav/fixedNav";
import pfp from '../../resources/images/ricardopfp.png';
import { AiOutlineMail } from 'react-icons/ai';
import ReactCountryFlag from "react-country-flag"
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

class Home extends Component {
    componentDidMount() {
        document.title = 'Ricardo Gallego Domínguez';
    }
  render() {
    return (

        <body>
        <div className={"flexLateral"}>

            {/* LEFT CONTAINER */}
            <div className={"parentContainer"}>

                {/* MOBILE LAYOUT */}
                <div className={"floatingCard"}>
                    <div className={"phoneContent"}>
                        {/* NOTCH DECORATION */}
                        <div className={"notch"}></div>

                        {/* CONTENT */}

                        {/* UPPER HALF */}
                        <div className={"upperHalf center-content flex-vertical"}>
                            <img className={"pfp"} style={{marginBottom: '10px'}} src={pfp} alt="My pfp" />
                            <text className={"nameText"}>Ricardo Gallego Domínguez</text>
                            <text className={"subText"}>Mobile & Web Developer</text>
                        </div>

                        {/* BELOW HALF */}
                        <div className={"belowHalf"}>
                            {/* WHITE DECORATION */}
                            <div className={"trickyWhiteDecoration"}></div>
                            <div style={{marginLeft: '15px', marginRight:'15px', marginBottom:'15px'}}>
                                <text className={"bodyText littleTopOffset"}>Passionate Mobile Developer with interest in Web-Developing. Providing clean interfaces with intelligent solutions.</text>
                                <br></br>
                                <text className={"bodyText littleTopOffset "}>Eager to learn new knowledge.</text>
                            </div>

                            {/* SPANISH FLAG */}
                            <div className={"vertical-center"} >
                                <ReactCountryFlag className={"iconEmail"} countryCode="ES" svg />
                                <text className={"bodyText text_bold "} style={{marginLeft:'5px',marginRight:'5px'}}>Spanish: </text>
                                <text className={"bodyText "} style={{marginLeft:'0px',marginRight:'0px'}}>Native</text>
                            </div>

                            {/* ENGLISH FLAG */}
                            <div className={"vertical-center"} >
                                <ReactCountryFlag className={"iconEmail"} countryCode="US" svg />
                                <text className={"bodyText text_bold "} style={{marginLeft:'5px',marginRight:'5px'}}>English: </text>
                                <text className={"bodyText "} style={{marginLeft:'0px',marginRight:'0px'}}>Advanced</text>
                            </div>

                            {/* EMAIL */}
                            <div className={"flex-horizontal vertical-center"} style={{marginTop:'25px'}}>
                                <AiOutlineMail className={"iconEmail"}></AiOutlineMail>
                                <text className={"bodyText"} style={{marginLeft:'5px'}}>ricardogdz6@gmail.com</text>
                            </div>

                            <div className={"socialIcons flexLateral"}>
                                <a href="https://www.linkedin.com/in/ricardo-gallego-domínguez-928a80213" target="_blank" rel="noopener noreferrer">
                                    <BsLinkedin className={"socialIcon"}></BsLinkedin>
                                </a>
                                <a href="https://github.com/ricardogdz6" target="_blank" rel="noopener noreferrer">
                                    <BsGithub className={"socialIcon"}></BsGithub>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

            {/* RIGHT CONTAINER */}
            <div className={"rightContainer"}>
                <Presentation></Presentation>
                <Technologies></Technologies>
            </div>
        </div>
        <FixedNav></FixedNav>

        </body>
    );
  }
}

export default Home;