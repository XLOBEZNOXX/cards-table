import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";

import {ACColor} from "../../../components/atoms";

test("display color", () => {
    render(<ACColor/>);
    
    const color = screen.getByRole("color")

    expect(color).toHaveStyle({
        height: "144px",
        width: "400px",
        background: "orange"
      });
})

test("display color", () => {
    render(<ACColor color={"blue"}/>);
    
    const color = screen.getByRole("color")

    expect(color).toHaveStyle({
        height: "144px",
        width: "400px",
        background: "blue"
      });
})