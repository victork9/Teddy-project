import React from "react";
import CreateClient from "./CreateClient";
import EditClient from "./EditClient";
import DeleteClient from "./DeleteClient";
import { fireEvent, render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
describe("Testing BasicModal molecule", () => {
    it("Should render CreateClient correctly", () => {
        const mockHandleChange = jest.fn();
        const mockOnAction = jest.fn();
        const mockonCloseModal = jest.fn();
        render(
            <CreateClient
                handleChangeUser={mockHandleChange}
                onAction={mockOnAction}
                onCloseModal={mockonCloseModal}
                userData={{
                    name: "Jhon dave",
                    salary: 4000,
                    companyValuation: 4000,
                }}
                visible
            />
        );
        const inputName: any = screen.getByRole("textbox", {
            name: /digite o nome:/i,
        });
        const inputSalary: any = screen.getByRole("textbox", {
            name: /digite o salário:/i,
        });
        const inputCompany: any = screen.getByRole("textbox", {
            name: /digite o valor da empresa:/i,
        });

        fireEvent.change(inputName, {
            target: {
                value: "Jhon dave 2",
            },
        });
        expect(mockHandleChange).toBeCalledWith("name", "Jhon dave 2");
        fireEvent.change(inputSalary, {
            target: {
                value: "200",
            },
        });
        expect(mockHandleChange).toBeCalledTimes(2);
        fireEvent.change(inputCompany, {
            target: {
                value: "100",
            },
        });
        expect(mockHandleChange).toBeCalledTimes(3);
        fireEvent.click(screen.getByTestId("close-modal"));
        expect(mockonCloseModal).toBeCalledTimes(1);
        fireEvent.click(
            screen.getByRole("button", {
                name: /criar cliente/i,
            })
        );
        expect(mockOnAction).toBeCalledTimes(1);
    });
    it("Should render EditClient correctly", () => {
        const mockHandleChange = jest.fn();
        const mockOnAction = jest.fn();
        const mockonCloseModal = jest.fn();
        render(
            <EditClient
                handleChangeUser={mockHandleChange}
                onAction={mockOnAction}
                onCloseModal={mockonCloseModal}
                userData={{
                    name: "Jhon dave",
                    salary: 4000,
                    companyValuation: 4000,
                }}
                visible
            />
        );
        const inputName: any = screen.getByRole("textbox", {
            name: /digite o nome:/i,
        });
        const inputSalary: any = screen.getByRole("textbox", {
            name: /digite o salário:/i,
        });
        const inputCompany: any = screen.getByRole("textbox", {
            name: /digite o valor da empresa:/i,
        });

        fireEvent.change(inputName, {
            target: {
                value: "Jhon dave 2",
            },
        });
        expect(mockHandleChange).toBeCalledWith("name", "Jhon dave 2");
        fireEvent.change(inputSalary, {
            target: {
                value: "200",
            },
        });
        expect(mockHandleChange).toBeCalledTimes(2);
        fireEvent.change(inputCompany, {
            target: {
                value: "100",
            },
        });
        expect(mockHandleChange).toBeCalledTimes(3);
        fireEvent.click(screen.getByTestId("close-modal"));
        expect(mockonCloseModal).toBeCalledTimes(1);
        fireEvent.click(
            screen.getByRole("button", {
                name: /Editar cliente/i,
            })
        );
        expect(mockOnAction).toBeCalledTimes(1);
    });
    it("Should render DeleteClient correctly", () => {
        const mockOnAction = jest.fn();
        const mockonCloseModal = jest.fn();
        render(<DeleteClient onAction={mockOnAction} onCloseModal={mockonCloseModal} name="Jhon dave" visible />);

        fireEvent.click(
            screen.getByRole("button", {
                name: /Excluir cliente/i,
            })
        );
        expect(mockOnAction).toBeCalledTimes(1);

        fireEvent.click(screen.getByTestId("close-modal"));
        expect(mockonCloseModal).toBeCalledTimes(1);
    });
});
