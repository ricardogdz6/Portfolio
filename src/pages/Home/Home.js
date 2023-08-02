import React, { Component } from 'react';
import './Home.css';
import Presentation from "../../components/presentation/Presentation";
import Technologies from "../../components/technologies/technologies";

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
                <div className={"floatingCard"}>
                    dhtd
                </div>
            </div>

            {/* RIGHT CONTAINER */}
            <div className={"rightContainer"}>
                <Presentation></Presentation>
                <Technologies></Technologies>
            </div>

        </div>



        </body>
    );
  }
}

export default Home;