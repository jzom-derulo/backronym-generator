import { useState, useEffect } from "react";

const UserInputForm = ({ userWord, handleInput, handleClick, handleReset, inputError }) => {
  

  // const [newBackronym, setNewBackronym] = useState('');

  // useEffect(() => {


  //   setUserWord('');
  //   // console.log('checkForCompleteBackronym called!');
  // }, [chosenWords, userWordDeconstructed]);


  return (
    <form action="submit">

      <div className="inputDiv">
        <label htmlFor="userInput">Enter a word</label>


        <input type="text" value={userWord} id="userInput" onChange={handleInput} minLength="0" maxLength="8" required />


        {inputError
          ? <span className="errorMessage">Please input letters ONLY!</span>
          : ""}
      </div>


      <button className="generateButton" onClick={handleClick(userWord)}>Generate!</button>
      <button onClick={handleReset} >Reset Generator</button>

      {/* <i className="fas fa-undo-alt"></i> */}
    </form>
  )
}

export default UserInputForm;