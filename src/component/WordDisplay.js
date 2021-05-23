import { useState, useEffect } from 'react';


const WordDisplay = ({ wordOptions, letterList, changeLetters }) => {


    const [userChoiceStatus, setUserChoiceStatus] = useState(false);
    const [currentWord, setCurrentWord] = useState("")
    const [chosenWords, setChosenWords] = useState([])

    console.log(wordOptions);
    console.log(letterList);


    const getRandomWord = () => {
        console.log(wordOptions);
        const randomIndex = Math.floor(Math.random() * wordOptions.length);
        const randomWord = wordOptions[randomIndex];
        console.log(randomWord);
        // if (randomWord.length > 2 ) {
        //     setCurrentWord(randomWord);
        // } else {
        //     // wordOptions.filter((nonWord) => {

        //     // })
        // }
    }
    getRandomWord();


    // const getcurrentWord = () => {

    //     for (let i = 0; i < wordOptions.length - 1; i++) {


    //         setCurrentWord(wordOptions[0].word);
    //         console.log(currentWord);
    //         // setUserChoiceStatus(true);

    //         if (userChoiceStatus === false) {
    //             console.log(currentWord);
    //             setCurrentWord(wordOptions[i+1].word);
    //         } else {
    //             break;
    //             // setUserChoiceStatus(true);

    //         }
    //         console.log("next")
    //         setUserChoiceStatus(true);
            

    //     }
    // }


    // useEffect(
    //     () => {
    //         getcurrentWord();
    //     }, [userChoiceStatus]
    // )

    // const handleAcceptChoice = () => {
    //     setUserChoiceStatus(true);
    // }
    
    const handleRejectChoice = () => {
        setUserChoiceStatus(false);
    }


    return (
        <>
            <div className="flexButtons">
                <button className="userAccept" onClick={changeLetters} key="accept">Accept</button>
                <button className="userReject" onClick={handleRejectChoice} key="reject">Reject</button>
            </div>
            <ul className="wordList">
                {
                    letterList.map((letter, index) => {

                        { console.log(letter) }
                        return (

                            <li key={index}>

                                <p>
                                    controlling
                                    {/* {letter}
                                    <span>{currentWord}</span> */}
                                </p>
                            </li>
                        )
                    })
                }

            </ul>

        </>
    )
}

export default WordDisplay;