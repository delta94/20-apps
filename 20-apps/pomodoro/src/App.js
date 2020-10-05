import React, { useRef, useState } from "react";
import "./App.css";

export default function App() {
  const [title, setTitle] = useState("Let the countdown begin!!!");
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const intervalRef = useRef(null);

  function padTime(time) {
    return time.toString().padStart(2, "0");
  }

  function startTimer() {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;
        return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    setTimeLeft(25 * 60);
    intervalRef.current = null;
  }

  const minutes = padTime(Math.floor(timeLeft / 60));
  const second = padTime(timeLeft - minutes * 60);

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{second}</span>
      </div>

      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
