//import BeatLoader to be used for loading state
import BeatLoader from "react-spinners/BeatLoader";
//import component
import BackcronymDefinition from "./BackronymDefinition.js";

const WordDisplay = ({ wordOptions, letterList, changeLetters, getRandomWord, currentWord, chosenWords, isLoading }) => {
    //define function get a random word from given array
    const handleRejectChoice = () => {
        getRandomWord(wordOptions);
    }
    //define function to return a string of which first letter has been removed
    const splitFirstLetter = (word) => {
        return word.substring(1);
    }
    return (
        <>
            <div className="wordDisplay">
                <div className="wordChoice">
                    {/* conditional render depends on if backcronym is completed and chosenword is not empty*/}
                    {chosenWords.length === letterList.length && chosenWords.length > 0
                        ? <h2>Backcronym completed!</h2>
                        : isLoading
                            ? <BeatLoader color={"#81003C"} loading={isLoading} size={10} />
                            : <h2>{currentWord}</h2>
                    }
                    {chosenWords.length === letterList.length && chosenWords.length > 0
                        ? ""
                        : letterList.length
                            ?   <div className="flexButtons">
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
                                        <p>{splitFirstLetter(word)}</p>
                                    </li>
                                )
                            })
                        }
                    </ul> {/* restOfWord */}
                </div> {/* wordList */}
            </div> {/* wordDisplay */}
        </>
    )
}
export default WordDisplay;