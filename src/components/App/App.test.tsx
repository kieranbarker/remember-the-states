import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import App from "./App";

it("reveals a state when correctly guessed", async () => {
  const user = userEvent.setup();
  render(<App />);

  const input = screen.getByLabelText(/state/i);
  await user.type(input, "california{enter}");

  const state = screen.getByText(/california/i);
  expect(state).toHaveRole("listitem");
  expect(state).toBeVisible();

  const numGuessed = screen.getByTestId("numGuessed");
  expect(numGuessed).toHaveTextContent("1");

  const numRemaining = screen.getByTestId("numRemaining");
  expect(numRemaining).toHaveTextContent("49");
});

it("updates the stats when a state is correctly guessed", async () => {
  const user = userEvent.setup();
  render(<App />);

  const input = screen.getByLabelText(/state/i);
  await user.type(input, "iowa{enter}");

  const numGuessed = screen.getByTestId("numGuessed");
  expect(numGuessed).toHaveTextContent("1");

  const numRemaining = screen.getByTestId("numRemaining");
  expect(numRemaining).toHaveTextContent("49");
});
