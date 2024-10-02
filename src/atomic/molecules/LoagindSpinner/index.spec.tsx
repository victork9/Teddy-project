import React from "react";
import LoadingSpinner from "./";
import { render } from "@testing-library/react";
import { expect } from "@jest/globals";

describe("Testing LoagindSpinner molecules", () => {
    it("Should render LoagindSpinner correctly ", () => {
        const { getByTestId } = render(<LoadingSpinner show />);

        expect(getByTestId("spinner")).toBeTruthy();
    });
    it("Should render LoagindSpinner null ", () => {
        const { container } = render(<LoadingSpinner show={false} />);

        expect(container.childNodes[0]).toBe(undefined);
    });
});
