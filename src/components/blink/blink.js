import React, { Component, useEffect, useState } from 'react';
import async from "async";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function blink(updateCallback){
    let state = false
      while(true){
        state = !state
          await sleep(500);
          updateCallback(state)
      }
}

export default blink;