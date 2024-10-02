import React from "react";
import BasicModal from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import { Props } from "./types";
describe("Testing BasicModal molecule", () => {
    const renderComponent = (props: Props) =>
        render(
            <BasicModal {...props}>
                <div>
                    <span>children</span>
                </div>
            </BasicModal>
        );
    it("Should render correctly", () => {
        const mockOnClose = jest.fn();
        renderComponent({
            onClose: mockOnClose,
            title: "Titulo",
            visible: true,
        });
        expect(screen.getByText(/children/i)).toBeTruthy();

        fireEvent.click(screen.getByTestId("close-modal"));

        expect(mockOnClose).toHaveBeenCalledWith(false);
    });
});
