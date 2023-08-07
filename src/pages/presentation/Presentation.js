import React, { Component, useEffect, useState } from 'react';
import './Presentation.css';
import TypingAnimation from "../../components/utils/TypingAnimation/TypingAnimation";
import blink from "../../components/utils/blink/blink";

class Presentation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayedText: "",
            barBlink: false
        };
    }

    componentDidMount() {
        this.animateText();
        this.makeBarBlink()
    }

    animateText = () => {
        const words = "Mobile Developer, Web Developer";
        TypingAnimation(words, this.updateDisplayedText);
    };

    updateDisplayedText = (text) => {
        this.setState({ displayedText: text });
    };

    makeBarBlink =  () => {
        blink(this.updateBlink)
    }

    updateBlink = (newValue) => {
        this.setState({barBlink : newValue});
    }


  render() {
    return (
            <div className={"page center-content flex-vertical"} >

                {/* UPPER TEXT */}
                <div className={"enterAnimation dissapearFlow"} >
                    <text className={"bodyText2"}>Hi, I'm </text>
                    <text className={"nameText2"}>Ricardo</text>
                </div>

                {/* BELOW TEXT */}
                <div className={"enterAnimationLeft flex-horizontal vertical-center dissapearFlow"}>
                    <text className={"bodyText3"} style={{marginRight:'5px'}} >I am a </text>
                    <text className={"bodyText4"}><span style={{fontSize:'0px'}}>ㅤ</span>{this.state.displayedText}</text>
                    <div className={this.state.barBlink ? "barStyle hidden2" : "barStyle"}></div>
                </div>

            </div>
    );
  }
}




export default Presentation;
