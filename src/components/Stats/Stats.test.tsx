import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Stats from "./Stats";

it("displays the number of guessed states", () => {
  render(<Stats numGuessed={3} />);
  expect(screen.getByTestId("numGuessed")).toHaveTextContent("3");
});

it("displays the number of remaining states", () => {
  render(<Stats numRemaining={24} />);
  expect(screen.getByTestId("numRemaining")).toHaveTextContent("24");
});
