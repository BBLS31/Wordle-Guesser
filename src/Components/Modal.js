import React from "react";

export default function Modal({ isCorrect, turn, answer }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>YOU WIN!!!</h1>
          <p>The word was indeed:</p>
          <p className="answer">{answer}</p>
          <p>You have guessed the word in {turn} guesses</p>
        </div>
      )}

      {!isCorrect && (
        <div>
          <h1>You lose</h1>
          <p>The word was:</p>
          <p className="answer">{answer}</p>
          <p>Better luck next time</p>
        </div>
      )}
    </div>
  );
}
