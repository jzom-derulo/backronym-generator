import { useState } from "react";


const UserInputForm = ({ handleClick, handleReset }) => {
  const [userWord, setUserWord] = useState('');



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