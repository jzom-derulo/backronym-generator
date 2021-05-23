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
            <ul className="wordList">
                <span>

                    {currentWord}

                </span>

                {
                    
                    
                    letterList.map((letter, index) => {
                        

                        // { console.log('letter', letter) }
                        return (
                            <div>
                                

                                <li key={index}>

                                    <p>
                                        {letter}

                                    </p>

                                    
                                </li>
                            </div>
                        )
                    })

                    
                }
                {
                    chosenWords.map((word) => {
                        return(
                            <li>
                                {/* <p>{word}</p> */}
                                
                                <p>{splitFirstLetter(word)}</p>
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