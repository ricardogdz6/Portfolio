import React, { Component } from 'react';
import { useInView } from "react-intersection-observer";
import './projectChip.css';
import Button from '@mui/material/Button';
import { InView } from 'react-intersection-observer';
import {render} from "react-dom";



export default function ProjectChipBar(props){


      const { index, title, desc, uri, link, windowWidth } = props;

      const {ref, inView} = useInView({
          threshold: 0,
          rootMargin: '100px',
          triggerOnce: true
      });

        const slideSide = index % 2 === 0 ? 'chipAnimLeft' : 'chipAnimRight';
        const animationClassName = inView ? `${slideSide} ` : '';

      return (

          windowWidth >= 700 ? (

          <div ref={ref} className={`ProyectChip ${animationClassName}`}>
              <div className={"PhoneDelimiter flex-horizontal"}>
                  <img className={"imageChip"} src={uri} alt="Image" />
                  <div className={"chipdiv flex-vertical"}>
                      <text className={"chipTitle"}>{title}</text>
                      <text className={"chipPlainText"}>{desc}</text>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                          <Button className={"gotoButton"} variant="text">
                              Go To
                          </Button>
                      </a>
                  </div>
              </div>
          </div>

          ) :

          <div ref={ref} className={`ProyectChipSmall flex-vertical ${animationClassName}`}>
              <img className={"imageChip"} src={uri} alt="Image" />
              <div className={"center-content flex-vertical smallChipAlign"}>
                  <text className={"chipTitle"}>{title}</text>
                  <text className={"chipPlainText"}>{desc}</text>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                      <Button className={"gotoButtonSmall"} variant="contained">
                          Go To
                      </Button>
                  </a>
              </div>
          </div>

/*    <text className={"chipTitle"} style={{textAlign: 'center', marginTop: '10px'}}>{title}</text>*/

    );

}
