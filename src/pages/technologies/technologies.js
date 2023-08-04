import React, { Component } from 'react';
import './technologies.css';
import SkillChip from '../../components/shared/skillChip/skillchip';
import reactlogo from '../../resources/images/react.png'
import ParticlesBackground from "../../components/shared/Particles/ParticlesBackground";
import {Grid} from "@mui/joy";
import android from '../../resources/images/android.png'
import aws from '../../resources/images/aws.png'
import blazor from '../../resources/images/blazor.png'
import css from '../../resources/images/css.png'
import firebase from '../../resources/images/firebase.png'
import git from '../../resources/images/git.png'
import github from '../../resources/images/github.png'
import hibernate from '../../resources/images/hibernate.png'
import html from '../../resources/images/html.png'
import javascript from '../../resources/images/javascript.png'
import jetpack from '../../resources/images/jetpack.png'
import retrofit from '../../resources/images/retrofit.png'
import room from '../../resources/images/room.png'
import springboot from '../../resources/images/springboot.png'
import sql from '../../resources/images/sql.png'



class Technologies extends Component {

  render() {

      const skillsData = [
          { name: "React", uri: reactlogo },
          { name: "Compose", uri: jetpack },
          { name: "React Native", uri: reactlogo },
          { name: "Android", uri: android },
          { name: "Blazor", uri: blazor },
          { name: "JavaScript", uri: javascript },
          { name: "HTML", uri: html },
          { name: "CSS", uri: css },
          { name: "Spring Boot", uri: springboot },
          { name: "Hibernate", uri: hibernate },
          { name: "Retrofit", uri: retrofit },
          { name: "ROOM", uri: room },
          { name: "Git", uri: git },
          { name: "GitHub", uri: github },
          { name: "Firebase", uri: firebase },
          { name: "AWS", uri: aws },
          { name: "SQL", uri: sql }



          // Agrega más objetos para cada SkillChip
      ];

      return (
          <div id="second-page" className={"pageTech center-content"} >

              <div className={"upperPolygon"}></div>
              <div className={"belowPolygon"}></div>
              <div className={"belowPolygonDecoration"}></div>

              <text className={"bodyText5"}>Skills</text>

              <ParticlesBackground/>

                  <Grid
                      item xs={12} sm={6} md={8}
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                        >
                      {skillsData.map((skill, index) => (<SkillChip
                              key={index}
                              name={skill.name}
                              uri={skill.uri}
                          />))}

                  </Grid>


          </div>


    );
  }
}

export default Technologies;