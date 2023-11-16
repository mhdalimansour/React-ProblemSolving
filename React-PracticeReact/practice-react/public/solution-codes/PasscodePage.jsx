import { useEffect, useState } from "react";
import "./css/passcode.css";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const password = "0000";

function PasscodePage() {
  const [error, setError] = useState("");
  const [pressedNumbers, setPressedNumbers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(undefined);

  useEffect(() => {
    if (pressedNumbers.length === 1) {
      setError("");
    }
    if (pressedNumbers.length === password.length) {
      if (pressedNumbers.join("") === password) {
        setIsCorrect(true);
        setError("");
      } else {
        setError("Bad Password!");
      }
      setPressedNumbers([]);
    }
  }, [pressedNumbers]);

  return (
    <>
      <h2>Passcode Check</h2>
      <h6>For Dev purpose: Correct password is {password}</h6>
      {isCorrect ? (
        <h6 className="numbers">Correct Password!</h6>
      ) : (
        <>
          <h6 className="result">{error}</h6>
          <div className="numbers">
            <div className="number-pad">
              {numbers.map((nb) => (
                <button
                  className={nb === 0 ? "zero" : ""}
                  key={nb}
                  value={nb}
                  onClick={() => {
                    setPressedNumbers((cur) => [...cur, nb]);
                  }}
                >
                  {nb}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default PasscodePage;
