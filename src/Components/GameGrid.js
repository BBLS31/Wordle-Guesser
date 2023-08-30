import React from "react";
import Row from "./Row";

export default function GameGrid({ currentGuess, guesses, turn }) {
  return (
    <div>
      {guesses.map((g, i) => {
        //when initial guesses are made, the row componont is returned
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} />; //when the turn value is 2, this row is returned as we put in the guess, it will be output to the divs
        }
        return <Row key={i} guess={g} />; //outputting a row to fit the word
      })}
    </div>
  );
}
