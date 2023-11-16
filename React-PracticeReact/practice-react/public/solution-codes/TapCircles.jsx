import { useState } from "react";
import "./tap.css";

function TapCircles() {
  const [points, setPoints] = useState([]);
  const [popped, setPopped] = useState([]);

  const handlePlaceCircle = (e) => {
    const { clientX, clientY } = e;
    setPoints([...points, { clientX, clientY }]);
  };

  const handleUndo = () => {
    const newPoints = [...points];
    const poppedPoint = newPoints.pop();
    if (!poppedPoint) return;
    setPopped([...popped, poppedPoint]);
    setPoints(newPoints);
  };
  const handleRedo = () => {
    const newPoints = [...points];
    const newPopped = [...popped];
    const poppedPoint = newPopped.pop();
    if (!poppedPoint) return;
    newPoints.push(poppedPoint);
    setPopped(newPopped);
    setPoints(newPoints);
  };

  return (
    <>
      <button disabled={points.length === 0} onClick={handleUndo}>
        Undo
      </button>
      <button disabled={popped.length === 0} onClick={handleRedo}>
        Redo
      </button>
      <div onClick={handlePlaceCircle} className="tap-area">
        {points.map((point) => (
          <div
            className="circle"
            key={point}
            style={{ left: point.clientX - 5, top: point.clientY - 5 }}
          ></div>
        ))}
      </div>
    </>
  );
}
export default TapCircles;
