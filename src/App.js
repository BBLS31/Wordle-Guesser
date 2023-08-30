import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Wordle from "./Components/Wordle";

function App() {
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word?number=1") //random words are being fetched from the api
      .then((res) => res.json())
      .then((json) => {
        //generationg a random integer
        const randomAnswer = json[Math.floor(Math.random() * json.length)]; //a random integer is chosen and then corresponding word appears
        setAnswer(randomAnswer); //updates the state
      });
  }, [setAnswer]); //set as a dependency

  return (
    <div className="App">
      <h1>Wordle Guesser</h1>
      {answer && <Wordle answer={answer} />}
    </div>
  );
}

export default App;
