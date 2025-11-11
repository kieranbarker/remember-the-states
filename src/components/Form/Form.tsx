import { useEffect, useState } from "react";
import { toTitleCase } from "../../util";
import "./Form.css";

export interface FormProps {
  getStateIndex: (state: string) => number;
  isValidState: (state: string) => boolean;
  isDuplicateState: (state: string) => boolean;
  takeGuess: (index: number) => void;
}

export default function Form({
  getStateIndex,
  isDuplicateState,
  isValidState,
  takeGuess,
}: FormProps) {
  const [error, setError] = useState("");

  function handleSubmit(formData: FormData) {
    let state = formData.get("state");
    if (typeof state !== "string") return;

    state = state.trim().toLowerCase();

    if (!state) {
      setError("Enter a state.");
      return;
    }

    if (isDuplicateState(state)) {
      setError(`You already guessed ${toTitleCase(state)}.`);
      return;
    }

    if (!isValidState(state)) {
      setError(`${toTitleCase(state)} is not a state.`);
      return;
    }

    const index = getStateIndex(state);
    takeGuess(index);

    if (error) {
      setError("");
    }
  }

  useEffect(() => {
    if (error) {
      document.title = `(1 Error) Remember the States`;
    } else {
      document.title = "Remember the States";
    }
  }, [error]);

  return (
    <form noValidate className="form" action={handleSubmit}>
      <p className="field">
        <label className="field-label" htmlFor="state">
          State
        </label>
        {error && (
          <span id="state-error" className="field-error">
            {error}
          </span>
        )}
        <input
          required
          id="state"
          className="field-input"
          type="text"
          name="state"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "state-error" : undefined}
        />
      </p>
      <p>
        <button type="submit">Guess</button>
      </p>
    </form>
  );
}
