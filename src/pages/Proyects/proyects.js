import React, { Component } from 'react';
import './proyects.css';
import ProjectChipBar from "../../components/shared/projectChip/projectChipBar";
import wedraw from "../../resources/images/wedraw.png";
import vili from "../../resources/images/vili.png";
import hk from "../../resources/images/hk.png";


class Proyects extends Component {

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

      const projectsData = [
          { title: "WeDraw (BETA)", desc: "Chat & Drawing App for groups of users.", uri: wedraw, link:"https://github.com/ricardogdz6/WeDraw#readme"},
          { title: "HKCheck-In", desc: "Private commercial app about check-in and administrative tools.", uri: hk, link:"https://docs.google.com/presentation/d/1wbcaoJnNncyg3G3iO-Y-B0wjBytRJTu1H5zxAcA7yU4/edit#slide=id.p"},
          { title: "VILI", desc: "Social videogame listing app.", uri: vili, link:"https://github.com/ricardogdz6/VILI#readme"}
      ];

      return (
              <div id="third-page" className={"ProyectContainer flex-vertical"} style={{overflow:'hidden'}}>
                  <div className={"ProyectSpacer"}></div>

                  <text className={"bodyText6 center-self"}>Projects</text>

                  {projectsData.map((project, index) => (
                      <ProjectChipBar
                          index={index}
                          title={project.title}
                          desc={project.desc}
                          uri={project.uri}
                          link={project.link}
                          windowWidth={this.state.windowWidth}
                      />
                  ))}

              </div>
    );
  }
}

export default Proyects;