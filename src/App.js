import './App.css';
import firebase from './config/firebase.js';

// import hooks
// create firebase database and import 


// make a form 
  // create input for user to add word
  //button to submit form 
//

// store input value in a varible 
  // spread the variable to access each letter


// user inputs word
// api gives sugggestion for word associated with first letter which is stored in state array
// given tow options, "confirm" or "change" (checkmark/X, buttons, or whatever)
// if they reject, word is removed and new word is added as a suggestion (sug)
// if user choses this word, it stays, and ...
  //a new word for next letter is suggested with a different endpoint to associate with the previous word endpoint: (/words?lc={acceptedWord})
    //..and so forth till word is done. 
//once phrase is generated  to the users liking, button is clicked to save to the database which will append all saved phrases to the page






function App() {
  return (
    <>   
    </>
  );
}

export default App;
