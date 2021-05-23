import { useState, useEffect } from 'react';


const WordDisplay = ({ wordOptions, letterList, changeLetters, getRandomWord, currentWord }) => {

    // holds whether the user chose yes or no to wordOption given
    const [userChoiceStatus, setUserChoiceStatus] = useState(false);
    // will hold the words the user choooses
    const [chosenWords, setChosenWords] = useState([])

    // console.log('wordOptions', wordOptions);
    // console.log('letterList', letterList);


    
    //MUST FIGURE OUT WHERE TO CALL/DEFINE THIS FUNCTION TO CONNECT IT WITH GENERATE 


    // getRandomWord();

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
        getRandomWord(wordOptions);
    }


    return (
        <>
            <ul className="wordList">
                {
                    letterList.map((letter, index) => {

                        // { console.log('letter', letter) }
                        return (

                            <li key={index}>

                                <p>
                                    {letter}
                                    <span>{currentWord}</span>
                                </p>
                            </li>
                        )
                    })
                }

            </ul>

            <button className="userAccept" onClick={changeLetters} key="accept">Accept</button>
            <button className="userReject" onClick={handleRejectChoice} key="reject">Reject</button>
        </>
    )
}

export default WordDisplay;