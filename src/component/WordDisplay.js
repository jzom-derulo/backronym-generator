import { useState, useEffect } from 'react';


const WordDisplay = ({ wordOptions, letterList, changeLetters, getRandomWord, currentWord }) => {

    // holds whether the user chose yes or no to wordOption given
    // const [userChoiceStatus, setUserChoiceStatus] = useState(false);
    // will hold the words the user choooses
    const [chosenWords, setChosenWords] = useState([])

    // console.log('wordOptions', wordOptions);
    // console.log('letterList', letterList);



    //MUST FIGURE OUT WHERE TO CALL/DEFINE THIS FUNCTION TO CONNECT IT WITH GENERATE 



    const handleRejectChoice = () => {
        // setUserChoiceStatus(false);
        getRandomWord(wordOptions);
    }

    const splitFirstLetter = (word) => {
        // const splittedWord = [];
        // for (let i = 1; i < word.length; i++) {
        //     // console.log(word[i]);
            
        //     splittedWord.push(word[i])
            
        // }
        // console.log(splittedWord.join())
        // return splittedWord.join();

        return word.substring(1);
        
    }
    // splitFirstLetter("dog");


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
                                    <span>

                                        {/* {currentWord} */}
                                        {splitFirstLetter(currentWord)}

                                    </span>
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