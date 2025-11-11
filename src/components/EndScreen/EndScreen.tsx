import Stopwatch from "../Stopwatch/Stopwatch";

interface EndScreenProps {
  elapsed: number;
  playAgain: () => void;
}

export default function EndScreen({ elapsed, playAgain }: EndScreenProps) {
  return (
    <div>
      <p>
        Good work! You remembered them all in{" "}
        <Stopwatch elapsed={elapsed} isRunning={false} />.
      </p>
      <p>
        <button type="button" onClick={playAgain}>
          Play Again
        </button>
      </p>
    </div>
  );
}
