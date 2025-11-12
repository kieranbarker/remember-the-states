import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it, vi } from "vitest";
import EndScreen from "./EndScreen";

it("displays a success message", () => {
  render(<EndScreen elapsed={0} playAgain={vi.fn()} />);
  const message = screen.getByText(/good work! you remembered them all/i);
  expect(message).toBeVisible();
});

it("starts a new game", async () => {
  const user = userEvent.setup();
  const playAgain = vi.fn();
  render(<EndScreen elapsed={0} playAgain={playAgain} />);

  const button = screen.getByRole("button", { name: /play again/i });
  await user.click(button);

  expect(playAgain).toHaveBeenCalled();
});
