//import BeatLoader to be used for loading state
import BeatLoader from "react-spinners/BeatLoader";
//import component
import BackcronymDefinition from "./BackronymDefinition.js";
import { css } from "@emotion/react";

const WordDisplay = ({ wordOptions, letterList, changeLetters, getRandomWord, currentWord, chosenWords, isLoading }) => {
    //define function get a random word from given array
    const handleRejectChoice = () => {
        getRandomWord(wordOptions);
    }
    //define function to return a string of which first letter has been removed
    const splitFirstLetter = (word) => {
        return word.substring(1);
    }

    const override = css`
       display: block;
        padding-top: 35px;
        
    `;
    // css = { override }

    return (
            <section className="wordDisplay">
                <div className="wordChoice">
                    
                    {
                    chosenWords.length === letterList.length && chosenWords.length > 0 
                        ? <h2 className="loadHeight">Backcronym completed!</h2>
                        : isLoading 
                        ?   <div className="loadHeight">
                                < BeatLoader color={"#81003C"} loading={isLoading} size={20} css={override}/>  
                            </div>              
                            : currentWord && <h2 className="loadHeight">{currentWord}</h2>

                    }
                    {chosenWords.length === letterList.length && chosenWords.length > 0
                        ? ""
                        : letterList.length

                            ? <div className="flexButtons">

                                    <button
                                        className="wordDisplayButton"
                                        onClick={changeLetters} 
                                        key="accept"
                                        disabled={
                                            // disable button when geting data from API 
                                            isLoading
                                                ? true
                                                : false
                                        }>Accept Word
                                    </button>
                                    <button className="wordDisplayButton" onClick={handleRejectChoice} key="reject">Change Word</button>
                                </div>
                            : <BackcronymDefinition />
                    }
                </div>
                     
                {letterList.length ? 

                <div className="wordList">
                    <ul className="firstLetterList">
                        {
                            // map through the letterList array to list each letter as a list
                            letterList.map((letter, index) => {
                                return (
                                    <li key={index} className="letterList">
                                        <p>{letter}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <ul className="restOfWord">
                        {
                            //map through the  chosenWords array to list each splitted word as a list 
                            chosenWords.map((word, index) => {
                                return (
                                    <li key={index}>
                                        <p>
                                            <span aria-hidden="true">{splitFirstLetter(word)}</span>
                                            <span className="srOnly">{word}</span>
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ul> 
                </div>  : "" }
            </section> 
    )
}
export default WordDisplay;