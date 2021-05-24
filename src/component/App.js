import '../App.css';
import { useState, useEffect } from 'react';
import firebase from '../config/firebase.js';
import UserInputForm from './UserInputForm.js';
import WordDisplay from './WordDisplay.js';
import SavedBackronyms from "./SavedBackronyms.js";
// import hooks
// create firebase database and import 



// make a form 
// create input for user to add word
//button to submit form 
//

// store input value in a varible 
// spread the variable to access each letter


// user inputs word and clicks "generate"
// word shows up vertically 
// api gives sugggestion for word associated with first letter which is stored in state array
// given tow options, "confirm" or "change" (checkmark/X, buttons, or whatever)
// if they reject, word is removed and new word is added as a suggestion (sug)
// if user choses this word, it stays, and ...
//a new word for next letter is suggested with a different endpoint to associate with the previous word endpoint: (/words?lc={acceptedWord})
//..and so forth till word is done. 
//once phrase is generated  to the users liking, button is clicked to save to the database which will append all saved phrases to the page


function App() {
  // for the first letter
  // https://api.datamuse.com/sug?s=rawand

  // for every subsequent letter
  // https://api.datamuse.com/words?lc=drink&sp=w*

  // to track the index numbers of the letters starting with the 2nd
  const [ index, setIndex ] = useState();
  // where the userWord letters are stored 
  const [ letters, setLetters ] = useState([]);
  // to hold which letter is currently in state
  const [ currentLetter, setCurrentLetter ] = useState('')
  //  words corresponding to the current letter
  const [ wordOptions, setWordOptions ] = useState([]);
  // holds the current word the user can see
  const [currentWord, setCurrentWord] = useState("")

  const [chosenWords, setChosenWords] = useState([])

  // placeholders for APIs
  const numberOfAPIWords = 20;
  // const previousWord = 'world';

  const handleClick = (userWord) => (event) => {
    event.preventDefault();
    // split word into individual letters
    // console.log(userWord);
    const userLetters = [...userWord];
    console.log('userLetters:', userLetters);
    // setFirstLetter(userLetters[0]);
    setLetters(userLetters);
    setCurrentLetter(userLetters[0]);
    setIndex(0); 

    setChosenWords([]);
  }

  const handleReset = () => {
    setLetters([]);
  }

  const getRandomWord = (array) => {
    // console.log('getRandomWord has been called/wordOptions:', wordOptions);
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomWord = array[randomIndex];

    if (randomWord.length > 1) {
      setCurrentWord(randomWord);
    }
    console.log('randomWord', randomWord);
  }

  
  const saveWord = (word) => {
    chosenWords.push(word);
    console.log(chosenWords);
  }


  const changeLetters = () => {
    // when the button is clicked, move on to the next index number in the array of letters
      // while the index is less than the length of the array, move on to the next letter
    console.log("currentWord: ", currentWord);
    console.log(index)
    
    

    if ( index < letters.length ) {
      console.log('currentLetter', currentLetter);
      saveWord(currentWord);
      setIndex(index + 1)

      if (index < letters.length - 1) {

        const nextLetter = letters[index+1];
        setCurrentLetter(nextLetter);
        console.log('nextLetter', nextLetter);    
      } 
    }
  }
  
  useEffect(
    () => {
      // put user input
        fetch(`https://api.datamuse.com/sug?s=${letters[0]}&max=${numberOfAPIWords}`)
          .then((response) => {
            return response.json()
          })
          .then((firstWords) => {
            if (letters.length) {
              const firstWordsArray = firstWords.map((word) => {
                return word.word;
              })

              console.log("words corresponding to first letter", firstWordsArray)
              setWordOptions(firstWordsArray);
              getRandomWord(firstWordsArray);
            }
          })
    }, [letters])


  useEffect(
    () => {
      // right now previousWord is hard coded, we gotta swap that for whatever word the user chose last
      fetch(`https://api.datamuse.com/words?lc=${currentWord}&sp=${currentLetter}*&max=${numberOfAPIWords}`)
      .then((response) => {
        return response.json()
      })
      .then((words) => {
        if (wordOptions.length) {
          const wordsArray = words.map((word) => {
            return word.word;
          })
          console.log("words corresponding to next letter", wordsArray)
          setWordOptions(wordsArray);
          getRandomWord(wordsArray);
        }
      })
    }, [index]
  )
  

  return (
    <>


      <div className="wrapper">

        <h1>Backcronym Generator</h1>
        <UserInputForm handleClick={handleClick} />
        
        {/* <button onClick={changeLetters}>change the letters</button> */}

        <div className="flexAllTheBackronyms">
          
         <WordDisplay wordOptions={wordOptions} letterList={letters} changeLetters={changeLetters} getRandomWord={getRandomWord} currentWord={currentWord} chosenWords={chosenWords}/>

          <SavedBackronyms/>

        </div>

      </div>

      <footer>Made at <a href="https://junocollege.com/" target="_blank" rel="noopener noreferrer">Juno College</a></footer>


    </>
  );
}

export default App;


