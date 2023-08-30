import React, { useEffect, useState } from "react";

export default function Opening() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <div className="opening">
          <div className="instructions">
            <h1>This is how the game works:</h1>
            <ul>
              <li>Type your guess in the open space</li>
              <li>Press enter to see if your guess is right</li>
              <li>
                Your guess will appear in blocks with the correponding colors
              </li>
              <li>You get 6 guesses per word</li>
              <li>No hints are shown</li>
              <li>Every correct letter in then correct position - Green</li>
              <li>
                Every letter which is in the wrong position but in the word -
                Blue
              </li>
              <li>Every wrong letter - Red</li>
              <li>Refresh page to get a new word</li>
            </ul>
            <button onClick={() => setShow(false)}>I will try my best</button>{" "}
            {/*when the button is pressed, setShow state becomes false and the opening component disapears */}
          </div>
        </div>
      ) : null}
      <button className="helpbtn" onClick={() => setShow(true)}>HELP</button>{" "}
    </div>
  );
}
