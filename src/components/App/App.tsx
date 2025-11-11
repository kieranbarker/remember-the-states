import { useCallback, useState } from "react";
import states from "../../states";
import EndScreen from "../EndScreen/EndScreen";
import GameScreen from "../GameScreen/GameScreen";
import "./App.css";

function App() {
  const [elapsed, setElapsed] = useState(0);

  const [guessedStates, setGuessedStates] = useState<string[]>(
    new Array(states.length).fill("")
  );

  const numGuessed = guessedStates.filter((state) => state).length;
  const numRemaining = states.length - numGuessed;

  const tick = useCallback(() => {
    setElapsed((prev) => prev + 1);
  }, []);

  function isValidState(state: string) {
    return states.indexOf(state) > -1;
  }

  function isDuplicateState(state: string) {
    return guessedStates.includes(state);
  }

  function getStateIndex(state: string) {
    return states.indexOf(state);
  }

  function takeGuess(stateIndex: number) {
    setGuessedStates((prev) => {
      return prev.map((state, index) => {
        if (index === stateIndex) return states[stateIndex];
        return state;
      });
    });
  }

  function playAgain() {
    setElapsed(0);
    setGuessedStates(new Array(states.length).fill(""));
  }

  return (
    <>
      <header className="header">
        <h1 className="header-title">Remember the States</h1>
        <p className="header-tagline">
          Can you remember all {states.length} states?
        </p>
      </header>
      <main>
        {numRemaining ? (
          <GameScreen
            formProps={{
              getStateIndex,
              isDuplicateState,
              isValidState,
              takeGuess,
            }}
            statsProps={{ numGuessed, numRemaining }}
            stopwatchProps={{ elapsed, tick }}
          />
        ) : (
          <EndScreen elapsed={elapsed} playAgain={playAgain} />
        )}
        <ol className="guessedStates">
          {guessedStates.map((state, index) => (
            <li key={index}>{state}</li>
          ))}
        </ol>
      </main>
    </>
  );
}

export default App;
