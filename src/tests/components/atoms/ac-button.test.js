import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";

import {ACButton} from "../../../components/atoms";

const mockFunction = jest.fn();

test("displays button", () => {
  render(<ACButton text="hello" />);

  const btn = screen.getByRole("button", {
    name: /hello/i
  });

  expect(btn).toBeInTheDocument();
});

test("shows correct color", () => {
  render(<ACButton color="red" size="sm" text="hello" handleClick={mockFunction} />);

  const btn = screen.getByRole("button", {
    name: /hello/i
  });

  expect(btn).toHaveStyle("background: red");
});

test("shows size correctly", () => {
  render(<ACButton color="red" size="lg" text="hello" handleClick={mockFunction} />);

  const btn = screen.getByRole("button", {
    name: /hello/i
  });

  expect(btn).toHaveClass("ac-button-lg");
});