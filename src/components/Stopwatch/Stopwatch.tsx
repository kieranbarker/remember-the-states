import { useEffect } from "react";
import "./Stopwatch.css";

export interface StopwatchProps {
  elapsed: number;
  isRunning: boolean;
  tick?: () => void;
}

export default function Stopwatch({
  elapsed,
  isRunning,
  tick,
}: StopwatchProps) {
  const minutes = Math.floor(elapsed / 60)
    .toString()
    .padStart(2, "0");

  const seconds = Math.floor(elapsed % 60)
    .toString()
    .padStart(2, "0");

  useEffect(() => {
    if (!isRunning || !tick) return;
    const intervalId = setInterval(tick, 1000);
    return () => clearInterval(intervalId);
  }, [isRunning, tick]);

  return (
    <span className="stopwatch">
      {minutes}:{seconds}
    </span>
  );
}
