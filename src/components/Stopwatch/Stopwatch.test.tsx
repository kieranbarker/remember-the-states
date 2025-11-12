import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import Stopwatch from "./Stopwatch";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

it("ticks once per second", () => {
  const tick = vi.fn();
  render(<Stopwatch elapsed={0} isRunning={true} tick={tick} />);
  vi.advanceTimersByTime(3000);
  expect(tick).toHaveBeenCalledTimes(3);
});

it("displays the elapsed time in minutes and seconds", () => {
  render(<Stopwatch elapsed={123} isRunning={false} />);
  const elapsedTime = screen.getByText("02:03");
  expect(elapsedTime).toBeVisible();
});
