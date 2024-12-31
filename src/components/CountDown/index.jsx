import React from "react";
import "./CountDown.css";
import useTimer from "../../hooks/useTimer";

function CountDown() {
  const { seconds, start, stop, reset, isRunning } = useTimer(6, true);
  return (
    <div className="count-down">
      <h3>CountDown</h3>

      <div className="watch">
        <span className="numbers">
          00:00:{seconds < 10 ? "0" + seconds : seconds}
        </span>
        <span>H:M:S</span>
      </div>

      <div className="controls">
        <button className="start" onClick={start} disabled={isRunning}>
          Start
        </button>
        <button className="stop" onClick={stop} disabled={!isRunning}>
          Stop
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default CountDown;
