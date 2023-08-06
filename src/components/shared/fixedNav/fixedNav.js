import React, { Component } from 'react';
import './fixedNav.css';
import Button from '@mui/joy/Button';
import {ChakraProvider, IconButton} from '@chakra-ui/react'
import {AiFillHome, AiTwotoneExperiment} from "react-icons/ai";
import {FaLightbulb} from "react-icons/fa";


class FixedNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize);
    }

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    scrollToSecondPage = () => {
        const element = document.getElementById('second-page');
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth',
        });
    };

    scrollToThirdPage = () => {
        const element = document.getElementById('third-page');
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth',
        });
    };

    handleWindowResize = () => {
        this.setState({ windowWidth: window.innerWidth });
    };
  render() {

      const { windowWidth } = this.state;

      return (
          <ChakraProvider>
            <div className={`fixedNav`} >

                <IconButton
                  onClick={this.scrollToTop}
                  className={"IconButton "}
                  isRound={true}
                  variant='solid'
                  colorScheme='green'
                  aria-label='Done'
                  fontSize='30px'
                  icon={<AiFillHome />}
              />

            <IconButton
                onClick={this.scrollToSecondPage}
                className={"IconButton"}
                isRound={true}
                variant='solid'
                colorScheme='green'
                aria-label='Done'
                fontSize='30px'
                icon={<FaLightbulb />}
            />

            <IconButton
                onClick={this.scrollToThirdPage}
                className={"IconButton"}
                isRound={true}
                variant='solid'
                colorScheme='green'
                aria-label='Done'
                fontSize='30px'
                icon={<AiTwotoneExperiment />}
            />


          </div>
          </ChakraProvider>
    );
  }
}

export default FixedNav;