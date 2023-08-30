import { useState } from "react";

const useWordle = (answer) => {
  const [turn, setTurn] = useState(0); //tracks turn. Goes up by 1 after each guess
  const [currentGuess, setCurrentGuess] = useState(""); // tracks each key typed
  const [guesses, setGuesses] = useState([...Array(6)]); //each guess is an array
  const [history, setHistory] = useState([]); //each guess is a string
  const [isCorrect, setisCorrect] = useState(false); //becomes true when user wins game

  const formatGuess = () => {
    //each word entered is going to be formatted into an array of letter objects
    let answerArray = [...answer]; //spreading a string value into an array of letters
    let formattedGuess = [...currentGuess].map((l) => {
      return { key: l, color: "red" }; //if a letter is wrong and not in the answer it will be colored red
    });

    formattedGuess.forEach((l, i) => {
      if (answerArray[i] === l.key) {
        //if a letter is correct and in the corect position it will be colored green
        formattedGuess[i].color = "green";
        answerArray[i] = null; //stops the posibility of double matching
      }
    });

    formattedGuess.forEach((l, i) => {
      if (answerArray.includes(l.key) && l.color !== "green") {
        //if letter is already colored green it wont be colored blue
        formattedGuess[i].color = "blue"; //if a letter is correct and in the wrong position it will be colored blue
        answerArray[answerArray.indexOf(l.key)] = null; //finds the index of a letter
      }
    });

    return formattedGuess;
  };

  const NewGuess = (readyGuesses) => {
    //adds a new guess to the guesses state and updates the turn value by adding 1 each time a turn is done
    if (currentGuess === answer) {
      // if the guess = answer, user wins
      setisCorrect(true);
    }
    setGuesses((prevGueeses) => {
      let newGueeses = [...prevGueeses];
      newGueeses[turn] = readyGuesses; // updates the turn count by 1 per guess
      return newGueeses;
    });
    setHistory((prevHistory) => {
      //adds guesses to the history of guesses array
      return [...prevHistory, currentGuess];
    });
    setTurn((prevTurn) => {
      // adds 1 to previous turn
      return prevTurn + 1;
    });
    setCurrentGuess("");
  };

  const handleEntries = ({ key }) => {
    //handles each letter entry while user types and adds complete entry to a new guess

    if (key === "Enter") {
      if (turn === 6) {
        // only allows 6 turns per word
        console.log("You are out of guesses");
        return;
      }

      if (history.includes(currentGuess)) {
        //wont allow duplicate words
        console.log("Guess again");
        return;
      }

      if (currentGuess.length !== answer.length) {
        // checks if word is as long as the answer
        console.log("Word must be:", answer.length, "characters long");
        return;
      }
      const readyGuess = formatGuess();
      NewGuess(readyGuess);
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1); //removes the last letter from the typed guess when backspace is pressed
      });
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      // checks if the user types a letter key and ignores all other keys
      if (currentGuess.length < answer.length) {
        // the length of the guess will be less than the length of the answer
        setCurrentGuess((prev) => {
          return prev + key; //returns the previous value + key and updates the state
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleEntries };
};

export default useWordle;
