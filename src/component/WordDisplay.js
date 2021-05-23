import { useState, useEffect } from 'react';
import SingleWordDisplay from './SingleWordDisplay.js';

const WordDisplay = ({ wordOptions, letterList }) => {


    const [userChoiceStatus, setUserChoiceStatus] = useState();
    const [currentWord, setCurrentWord] = useState("")
    const [chosenWords, setChosenWords] = useState([])

    console.log(wordOptions);

    console.log(letterList);

    // const getRandomWord = () => {
    //     console.log(wordOptions);
    //     const randomIndex = Math.floor(Math.random() * wordOptions.length);
    //     const randomWordObj = wordOptions[randomIndex];
    //     console.log(randomIndex);
    //     console.log(randomWordObj)

    //     for (let key in randomWordObj) {
    //         // const {word, score} = randomWordObj[key];
    //         console.log(randomWordObj[key])

    //         if (key === "word") {
    //             setCurrentRandomWord(randomWordObj[key]);
    //         }
    //     }
    // }

    const getcurrentWord = () => {
        for (let i = 0; i < wordOptions.length - 1; i++) {
            {
                if (userChoiceStatus === true) {

                    console.log(wordOptions[i].word)
                    setCurrentWord(wordOptions[i].word);



                    break;
                } else {
                    setUserChoiceStatus(null);

                    console.log("next")
                }
            }
        }
    }



    useEffect(
        () => {
            getcurrentWord();
        }, [setUserChoiceStatus, userChoiceStatus]
    )

    const handleAcceptChoice = () => {
        setUserChoiceStatus(true);
    }
    const handleRejectChoice = () => {
        setUserChoiceStatus(false);
    }




    return (
        <ul className="wordList">
            {
                letterList.map((letter, index) => {

                    { console.log(letter) }
                    return (
                        <SingleWordDisplay letter={letter} key={index} currentWord={currentWord} />
                    )
                })
            }
            <button className="userAccept" onClick={handleAcceptChoice} key="accept">Accept</button>
            <button className="userReject" onClick={handleRejectChoice} key="reject">Reject</button>
        </ul>
    )
}

export default WordDisplay;