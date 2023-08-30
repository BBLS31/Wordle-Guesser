import React, { useEffect, useState } from "react";
import useWordle from "../Hooks/useWordle";
import GameGrid from "./GameGrid";
import Modal from "./Modal";
import Opening from "./Opening";

export default function Wordle({ answer }) {
  const { currentGuess, handleEntries, guesses, isCorrect, turn } =
    useWordle(answer);
  const [showModal, setShowModal] = useState(false);
  const [showOpen, setShowOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("keyup", handleEntries); //handles each letter entry while user types

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleEntries); // removes the ability to type in more letters when game is over via win
    }

    if (turn === 6) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleEntries);
    }

    return () => window.removeEventListener("keyup", handleEntries); //prevents from many keyup event listeners running every time the handleEntries function runs
  }, [handleEntries, isCorrect, turn]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]); // reruns function when dependencies change

  return (
    <div>
      <p className="text">Click here and start guessing</p>
      <div className="currentGuess">{currentGuess}</div>
      <GameGrid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Opening />
      {showModal && <Modal isCorrect={isCorrect} turn={turn} answer={answer} />}
    </div>
  );
}
