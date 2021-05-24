import { useState, useEffect } from "react";
import firebase from '../config/firebase.js';

const UserInputForm = ({ handleClick, handleReset, chosenWords }) => {
  const [userWord, setUserWord] = useState('');

  // const [newBackronym, setNewBackronym] = useState('');

  useEffect(() => {
    checkForCompleteBackronym();
    console.log('checkForCompleteBackronym called!');
  }, [chosenWords]);

  const checkForCompleteBackronym = () => {
    const userWordSpread = [...userWord];
    console.log(userWordSpread);
    if (chosenWords.length && userWordSpread.length == chosenWords.length) {
      saveNewBackronym();
    }
  }

  const saveNewBackronym = () => {
    const dbRef = firebase.database().ref();
    console.log('saveNewBackronym called!');

    const Backronym = {
      word: userWord,
      backronym: chosenWords
    }

    dbRef.push(Backronym);
    setUserWord('');

  }

  return (
    <form action="submit">
      <label htmlFor="userInput">Type in a word</label>
      <input type="text" value={userWord} id="userInput" onChange={(event) => setUserWord(event.target.value)} />
      <button className="generateButton" onClick={handleClick(userWord)}>Generate!</button>
      <button onClick={handleReset}><i className="fas fa-undo-alt"></i></button>
    </form>
  )
}

export default UserInputForm;