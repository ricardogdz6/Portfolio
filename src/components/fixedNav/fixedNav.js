import React, { Component } from 'react';
import './fixedNav.css';

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

    handleWindowResize = () => {
        this.setState({ windowWidth: window.innerWidth });
    };
  render() {

      const { windowWidth } = this.state;

      return (
        <div className={`fixedNav ${windowWidth < 600 ? 'slide-out' : 'slide-in'}`} ></div>
    );
  }
}

export default FixedNav;