import React from "react";

export default function Row({ guess, currentGuess }) {
  if (guess) {
    //if a word is guessed, the letters are mapped through onto the blocks
    return (
      <div className="rows past">
        {guess.map((l, i) => (
          <div key={i} className={l.color}>
            {l.key}
          </div>
        ))}
      </div>
    );
  }
}
