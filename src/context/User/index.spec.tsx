import { expect } from "@jest/globals";

import React from "react";
import { useContextUser } from ".";
import User from "./Context";
import { render } from "@testing-library/react";

let realUseContext: typeof React.useContext;
let useContextMock: typeof React.useContext;

describe("Testing Searchengines context", () => {
    beforeEach(() => {
        realUseContext = React.useContext;
        useContextMock = React.useContext = jest.fn();
    });
    afterEach(() => {
        React.useContext = realUseContext;
    });
    it("Test useContext", () => {
        (useContextMock as jest.Mock).mockReturnValue("Test Value");

        useContextUser();
    });
    it("test empty context", async () => {
        try {
            (useContextMock as jest.Mock).mockReturnValue(undefined);

            await expect(() => useContextUser()).rejects.toThrow();
        } catch (error: any) {
            expect(error.message).toBe("useContextUser must be used within a Searchprovider");
        }
    });
    it("test empty context", async () => {
        try {
            (useContextMock as jest.Mock).mockReturnValue(undefined);

            await expect(() => useContextUser()).rejects.toThrow();
        } catch (error: any) {
            expect(error.message).toBe("useContextUser must be used within a Searchprovider");
        }
    });
    it("testing provider", async () => {
        const { getByText } = render(
            <User>
                <span>children</span>
            </User>
        );
        expect(getByText(/children/i)).toBeTruthy();
    });
});
