import { useEffect, useState } from "react";
import { useRef } from "react";

function useTimer(initialSeconds = 0, isCountDown = false) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  const start = () => {
    setIsRunning(true);
  };
  const stop = () => {
    setIsRunning(false);
  };
  const reset = () => {
    setSeconds(initialSeconds);
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((pre) => {
          if (isCountDown && pre <= 0) {
            setIsRunning(false);
            clearInterval(intervalRef.current);
            return 0;
          }
          return isCountDown ? pre - 1 : pre + 1;
        });
      }, 1000);
    } else if (!isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  return { seconds, start, stop, reset, isRunning };
}

export default useTimer;
