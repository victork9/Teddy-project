import React from "react";
import Input from ".";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect } from "@jest/globals";
describe("Testing Input atom", () => {
    it("Should render correctly", () => {
        const mockOnChange = jest.fn();
        render(<Input label="Label Teste" value="Value" onChange={mockOnChange} />);

        fireEvent.change(
            screen.getByRole("textbox", {
                name: /label teste/i,
            }),
            {
                target: {
                    value: "abc",
                },
            }
        );
        const group = screen.getByRole("group", {
            hidden: true,
        });

        expect(within(group).getByText(/label teste/i)).toBeTruthy();
        expect(mockOnChange).toHaveBeenCalledWith("abc");
    });
});
