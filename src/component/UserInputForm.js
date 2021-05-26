import { useState, useEffect } from "react";
import firebase from '../config/firebase.js';

const UserInputForm = ({ handleClick, handleReset, chosenWords, inputError, userWordDeconstructed }) => {
  const [userWord, setUserWord] = useState('');

  // const [newBackronym, setNewBackronym] = useState('');

  useEffect(() => {
    checkForCompleteBackronym();
    setUserWord('');
    // console.log('checkForCompleteBackronym called!');
  }, [chosenWords]);

  const checkForCompleteBackronym = () => {
    if (chosenWords.length && chosenWords.length == userWordDeconstructed.length) {
      saveNewBackronym();
    }
  }

  const saveNewBackronym = () => {
    const dbRef = firebase.database().ref();
    console.log('saveNewBackronym called!');

    const Backronym = {
      word: userWordDeconstructed.join(''),
      backronym: chosenWords.join(' ')
    }

    dbRef.push(Backronym);
    setUserWord('');

  }

  return (
    <form action="submit">
      <label htmlFor="userInput">Type in a word</label>
      
      <input type="text" value={userWord} id="userInput" onChange={(event) => setUserWord(event.target.value)} required />

        {inputError
          ? <span className="errorMessage">Please input letters ONLY!</span>
          : ""}


      <button className="generateButton" onClick={handleClick(userWord)}>Generate!</button>
      <button onClick={handleReset} >Reset Generator</button>
      
      {/* <i className="fas fa-undo-alt"></i> */}
    </form>
  )
}

export default UserInputForm;