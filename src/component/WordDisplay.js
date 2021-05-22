import {useState} from 'react';

const WordDisplay = ({wordOptions, letterList}) => {

    const [currentRandomWord, setCurrentRandomWord] = useState("")


    console.log(wordOptions);

    console.log(letterList);

    const getRandomWord = () => {
        console.log(wordOptions);
        const randomIndex = Math.floor(Math.random() * wordOptions.length);
        const randomWordObj = wordOptions[randomIndex];
        console.log(randomIndex);
        console.log( randomWordObj)

        for (let key in randomWordObj ) {
            // const {word, score} = randomWordObj[key];
            console.log(randomWordObj[key])

            if (key === "word")
            {
                setCurrentRandomWord(randomWordObj[key]);
            }
        }
    }

    // const word = getRandomWord();
    // setCurrentRandomWord(word);



    
    return (
        <ul className="wordList">
            {
                letterList.map((letter, index) => {

                    { console.log(letter) }

                    
                    
                    return (
                        <li key={index}>
                            
                            <p>
                                {letter} 
                                <span>{currentRandomWord}</span>
                            
                            </p>

                            

                            <button className="userAccept" >Accept</button>
                            <button className="userReject">Reject</button>
                        </li>
                )
                })
            }
        </ul>
    )
}

export default WordDisplay;