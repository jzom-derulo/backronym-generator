import './App.css';
import { useState, useEffect } from 'react';
import firebase from './config/firebase.js';
import UserInputForm from './component/UserInputForm.js';
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

  const [ letters, setLetters ] = useState([]);
  const [ firstLetterWords, setFirstLetterWords ] = useState([]);
  const num = 10;

  const handleClick = (userWord) => (event) => {
    event.preventDefault();
    // split word into individual letters
    console.log(userWord);
    const userLetters = [...userWord];
    console.log(userLetters);
    setLetters(userLetters);
  }

  useEffect(
    () => {
      // put user input 
      fetch(`https://api.datamuse.com/sug?s=${letters[0]}&max=${num}`)
        .then((response) => {
          return response.json()
        })
        .then((words) => {
          console.log(words)
          setFirstLetterWords(words);
        })
    }, [letters])

  return (
    <> 
      <UserInputForm handleClick={handleClick} />
    </>
  );
}

export default App;
