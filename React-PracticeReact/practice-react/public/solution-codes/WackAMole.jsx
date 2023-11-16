import { useEffect, useState } from "react";
import "./css/wack.css";

function WackAMole() {
  const [score, setScore] = useState(0);
  const [moles, setMoles] = useState(new Array(9).fill(false));
  const mole = require("./pics/mole.png");
  const hole = require("./pics/hole.png");

  function setMoleVisibility(index, isVisible) {
    setMoles((curMoles) => {
      const newMoles = [...curMoles];
      newMoles[index] = isVisible;
      return newMoles;
    });
  }

  function wackMole(index) {
    setMoleVisibility(index, false);
    setScore(parseInt(score + 1));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moles.length);
      setMoleVisibility(randomIndex, true);
      setTimeout(() => {
        setMoleVisibility(randomIndex, false);
      }, 700);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [moles]);

  return (
    <>
      <h3>SCORE: {score}</h3>
      <div className="grid">
        {moles.map((isMole, idx) => (
          <img
            src={isMole ? mole : hole}
            key={idx}
            alt=""
            onClick={() => {
              if (isMole) {
                wackMole(idx);
              }
            }}
          ></img>
        ))}
      </div>
    </>
  );
}
export default WackAMole;
