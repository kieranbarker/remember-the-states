import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it, vi } from "vitest";
import Form from "./Form";

it("displays an error on empty submission", async () => {
  const user = userEvent.setup();

  render(
    <Form
      getStateIndex={vi.fn()}
      isDuplicateState={vi.fn()}
      isValidState={vi.fn()}
      takeGuess={vi.fn()}
    />
  );

  const input = screen.getByLabelText(/state/i);
  await user.type(input, "{enter}");

  const error = screen.getByText(/enter a state/i);
  expect(error).toBeVisible();
});

it("displays an error on duplicate submission", async () => {
  const user = userEvent.setup();
  const isDuplicateState = vi.fn(() => true);

  render(
    <Form
      getStateIndex={vi.fn()}
      isDuplicateState={isDuplicateState}
      isValidState={vi.fn()}
      takeGuess={vi.fn()}
    />
  );

  const input = screen.getByLabelText(/state/i);
  await user.type(input, "michigan{enter}");

  const error = screen.getByText(/you already guessed michigan/i);
  expect(error).toBeVisible();

  expect(isDuplicateState).toHaveBeenCalled();
  expect(isDuplicateState).toHaveReturnedWith(true);
});

it("displays an error on invalid submission", async () => {
  const user = userEvent.setup();
  const isValidState = vi.fn(() => false);

  render(
    <Form
      getStateIndex={vi.fn()}
      isDuplicateState={isValidState}
      isValidState={vi.fn()}
      takeGuess={vi.fn()}
    />
  );

  const input = screen.getByLabelText(/state/i);
  await user.type(input, "seattle{enter}");

  const error = screen.getByText(/seattle is not a state/i);
  expect(error).toBeVisible();

  expect(isValidState).toHaveBeenCalled();
  expect(isValidState).toHaveReturnedWith(false);
});
