
const UserInputForm = ({ userWord, handleInput, handleClick, handleReset, inputError }) => {
  

  return (
    <form action="submit">
      <div className="inputDiv">
        <label htmlFor="userInput">Enter a word</label>
        <input type="text" value={userWord} id="userInput" onChange={handleInput} minLength="0" maxLength="8" required />
        {inputError
          ? <span className="errorMessage">Please input letters ONLY!</span>
          : ""}
      </div>
      <div>
        <button className="generateButton" onClick={handleClick(userWord)}>Generate!</button>
        <button onClick={handleReset} >Reset Generator</button>
      </div>
    </form>
  )
}

export default UserInputForm;