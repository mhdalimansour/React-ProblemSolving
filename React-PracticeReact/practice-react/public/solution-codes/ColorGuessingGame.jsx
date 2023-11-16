import { useEffect, useState } from "react";
import "./game.css";

const getRandomColor = () => {
  const digits = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += digits[Math.floor(Math.random() * 16)];
  }
  return color;
};

function ColorGuessingGame() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(undefined);

  const generateColors = () => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  useEffect(() => {
    generateColors();
  }, []);

  const handleAnswerClicked = (answer) => {
    if (answer === color) {
      setResult(true);
      generateColors();
    } else {
      setResult(false);
    }
  };

  return (
    <div className="game">
      <div>
        <div className="guess-me" style={{ background: color }}></div>
        {answers.map((answer) => (
          <button key={answer} onClick={() => handleAnswerClicked(answer)}>
            {answer}
          </button>
        ))}
        {result === true && <div className="correct">Correct!</div>}
        {result === false && <div className="wrong">Wrong!</div>}
      </div>
    </div>
  );
}
export default ColorGuessingGame;
