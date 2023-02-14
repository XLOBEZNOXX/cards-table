import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";

import {ACChip} from "../../../components/atoms";

test("displays chip", () => {
    render(<ACChip text={"hello"}/>);

    const chip = screen.getByText(/hello/i);

    expect(chip).toBeInTheDocument();
})