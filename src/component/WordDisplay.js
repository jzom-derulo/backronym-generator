
import BeatLoader from "react-spinners/BeatLoader";

const WordDisplay = ({ wordOptions, letterList, changeLetters, getRandomWord, currentWord, chosenWords, isLoading }) => {

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



    return (
        <>
            <div className="wordDisplay">
                <div className="wordChoice">

                    {chosenWords.length === letterList.length && chosenWords.length > 0 ? "Backcronym completed!" :

                        isLoading
                            ? < BeatLoader color={"#81003C"} loading={isLoading} size={5} />
                            : currentWord
                    }
                    {chosenWords.length === letterList.length && chosenWords.length > 0
                        ? ""
                        :
                        letterList.length
                            ?
                                <div className="flexButtons">
                                    <button
                                        className="wordDisplayButton"
                                        onClick={changeLetters} key="accept"
                                        disabled={
                                            isLoading
                                                ? true
                                                : false
                                        }>Accept Word
                                </button>
                                    <button className="wordDisplayButton" onClick={handleRejectChoice} key="reject">Change Word</button>
                                </div>
                            :""
                    }
                </div>

                <div className="wordList">
                    <ul>
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
                    </ul>

                    <ul className="restOfWord">
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
                    </ul> {/* restOfWord */}
                </div> {/* wordList */}
            </div> {/* wordDisplay */}
        </>
    )
}

export default WordDisplay;