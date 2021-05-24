import { useState, useEffect } from 'react';

const WordDisplay = ({ wordOptions, letterList, changeLetters, getRandomWord, currentWord, chosenWords }) => {

    // holds whether the user chose yes or no to wordOption given
    // const [userChoiceStatus, setUserChoiceStatus] = useState(false);
    // will hold the words the user choooses


    // console.log('wordOptions', wordOptions);
    // console.log('letterList', letterList);

    //MUST FIGURE OUT WHERE TO CALL/DEFINE THIS FUNCTION TO CONNECT IT WITH GENERATE 


    const handleRejectChoice = () => {
        // setUserChoiceStatus(false);
        getRandomWord(wordOptions);
    }

    const splitFirstLetter = (word) => {
        return word.substring(1);      
    }
    // splitFirstLetter("dog");

    return (
        <>
            <div className="flexButtons">
                <button className="userAccept" onClick={changeLetters} key="accept">Accept</button>
                <button className="userReject" onClick={handleRejectChoice} key="reject">Reject</button>
            </div>
            <ul className="wordList">
                <span>

                    {chosenWords.length === letterList.length && chosenWords.length > 0 ? "Backcronym completed!" : currentWord }

                </span>

                <div className= "wordDisplay">
                    <div>
                        {
                            letterList.map((letter, index) => {

                                // { console.log('letter', letter) }
                                return (
                                    <li key={index} className="letterList">
                                        <p>
                                            {letter}
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </div>

                    <div>
                        {
                            chosenWords.map((word) => {
                                return (
                                    <li>
                                        {/* <p>{word}</p> */}
                                        <p>{splitFirstLetter(word)}</p>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
            </ul>
        </>
    )
}

export default WordDisplay;