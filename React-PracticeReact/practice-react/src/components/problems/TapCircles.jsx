import { useRef, useState } from "react";
import "./css/tap.css";

function TapCircles() {
  const [points, setPoints] = useState([]);
  const [popped, setPopped] = useState([]);
  const divRef = useRef(null);
  const [clickPosition, setClickPosition] = useState({ x: 100, y: 50 });

  const handlePlaceCircle = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPoints([...points, { x, y }]);
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
      <div onClick={handlePlaceCircle} className="tap-area" ref={divRef}>
        {points.map((point) => (
          <div
            className="circle"
            key={point}
            style={{ left: point.clientX, top: point.clientY }}
          ></div>
        ))}
      </div>
    </>
  );
}
export default TapCircles;
