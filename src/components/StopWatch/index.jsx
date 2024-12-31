import React from "react";
import "./StopWatch.css";
import useTimer from "../../hooks/useTimer";

function StopWatch() {
  const { seconds, start, stop, reset, isRunning } = useTimer();
  return (
    <div className="stop-watch">
      <h3>Stop Watch</h3>

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

export default StopWatch;
