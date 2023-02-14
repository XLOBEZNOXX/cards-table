import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";

import {ACLoaderButton} from "../../../components/atoms";

const mockFunction = jest.fn();

test("display Loader Button", () => {
    render(<ACLoaderButton onLoad={mockFunction} text={"hola"}/>);

    const ldbutton = screen.getByRole("button", {name: /hola/i});

    ldbutton.click();

    expect(ldbutton).toBeInTheDocument();    
});

test("check click Loader Button", () => {
    render(<ACLoaderButton onLoad={mockFunction} text={"hola"}/>);

    const ldbutton = screen.getByRole("button", {name: /hola/i});

    ldbutton.click();

    expect(mockFunction).toBeCalledTimes(1);
});