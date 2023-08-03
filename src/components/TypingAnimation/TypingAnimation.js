import React, { Component, useEffect, useState } from 'react';
import async from "async";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  async function TypedText ( children, updateCallback ) {
    const wordsArray = children.split(',').map(word => word.trim());
    let iterator = 0
    let reverse = false
    let wordLetterI = 0

    while(true){

        let wordRevealed;

        switch (reverse) {

            case true:

                wordRevealed = wordsArray[iterator].substring(0, wordLetterI - 1);
                wordLetterI--

                await sleep(100);

                if (wordRevealed.length === 0){

                    iterator++
                    wordLetterI = 0
                    reverse = false

                    if (iterator >= wordsArray.length) {
                        iterator = 0
                    }

                    updateCallback(wordRevealed);

                } else updateCallback(wordRevealed);

            break;


            case false:

                wordRevealed = wordsArray[iterator].substring(0, wordLetterI + 1);
                wordLetterI++
                await sleep(100);

                if (wordRevealed === wordsArray[iterator]){

                    reverse = true

                    updateCallback(wordRevealed);
                    await sleep(1000);

                } else updateCallback(wordRevealed);

            break;
        }
    }


}

async function blink(children,updateCallback){
      while(true){
          await sleep(100);
          return updateCallback(!children)
      }
}


export default TypedText;