import { useState } from "react";


const UserInputForm = ({ handleClick }) => {
  const [userWord, setUserWord] = useState('');

  return (
    <form action="submit">
      <label htmlFor="userInput">Type in a word</label>
      <input type="text" value={userWord} id="userInput" onChange={(event) => setUserWord(event.target.value)} />
      <button className="generateButton" onClick={handleClick(userWord)}>Generate!</button>
    </form>
  )
}

export default UserInputForm;