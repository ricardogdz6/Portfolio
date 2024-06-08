import React, { Component } from 'react';
import './Home.css';
import '../../global.css';
import Presentation from "../presentation/Presentation";
import Technologies from "../technologies/technologies";
import Proyects from "../Proyects/proyects";
import FixedNav from "../../components/shared/fixedNav/fixedNav";
import PhoneFrameFilled from '../../components/shared/phoneframe/phoneframeFilled';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth
        };
    }

    componentDidMount() {
        document.title = 'Ricardo Gallego Domínguez';
        window.addEventListener("resize", this.handleWindowResize);

    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize);
    }

    handleWindowResize = () => {
        this.setState({ windowWidth: window.innerWidth });
    };

    render() {
        return (

            <body style={{minWidth:'500px'}}>
            <div className={"flexLateral"}>
                {/* LEFT CONTAINER */}
                <div className={"parentContainer dissapearCard"}>
                    <PhoneFrameFilled/>
                </div>

            {/* RIGHT CONTAINER */}
                <div className={"leftBackground"}></div>
            <div className={"rightContainer flowMargin"}>
                <Presentation></Presentation>
                <Technologies></Technologies>
                <Proyects></Proyects>
                <div className={"optionalParentContainer center-content"}>
                    <div className={`optionalPhoneInfo ${window.innerWidth > 1000 ? 'dissapear' : ''}`}>
                        <PhoneFrameFilled/>
                    </div>
                </div>


            </div>
        </div>
        <FixedNav></FixedNav>

        </body>
    );
  }
}

export default Home;