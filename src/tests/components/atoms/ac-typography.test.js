import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";

import {ACTypography} from "../../../components/atoms";

test("displays typography", () => {
    render(<ACTypography text="hello" />);
  
    const typo = screen.getByText(/hello/i);
  
    expect(typo).toBeInTheDocument();
});

test("check typography", () => {
    render(<ACTypography text="hello"/>);
  
    const typo = screen.getByRole("heading", {name: /hello/i, level:1});
  
    expect(typo).toBeInTheDocument();
});