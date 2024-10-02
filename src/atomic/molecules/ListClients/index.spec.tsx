import { Body, FooterButton, FooterPagination, Header } from "./";
import { fireEvent, render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";

const mockClients = {
    clients: [
        {
            id: 54,
            name: "John Doe",
            salary: 500.01,
            companyValuation: 3500,
            createdAt: "2024-10-01T19:47:05.160Z",
            updatedAt: "2024-10-02T13:02:39.154Z",
        },
        {
            id: 58,
            name: "John Doe",
            salary: 5000,
            companyValuation: 500000,
            createdAt: "2024-10-01T21:30:19.945Z",
            updatedAt: "2024-10-01T21:30:19.945Z",
        },
        {
            id: 59,
            name: "John Doe 2",
            salary: 5000,
            companyValuation: 500000,
            createdAt: "2024-10-01T21:30:23.743Z",
            updatedAt: "2024-10-01T21:30:23.743Z",
        },
        {
            id: 60,
            name: "John Doe 23",
            salary: 500.03,
            companyValuation: 50000.04,
            createdAt: "2024-10-01T21:30:27.188Z",
            updatedAt: "2024-10-02T13:02:12.939Z",
        },
        {
            id: 61,
            name: "John Doe 23",
            salary: 100,
            companyValuation: 2000,
            createdAt: "2024-10-01T21:30:32.023Z",
            updatedAt: "2024-10-01T21:30:32.023Z",
        },
        {
            id: 65,
            name: "John Doe 23",
            salary: 100,
            companyValuation: 2000,
            createdAt: "2024-10-01T21:30:36.568Z",
            updatedAt: "2024-10-01T21:30:36.568Z",
        },
        {
            id: 67,
            name: "John Doe 23",
            salary: 100,
            companyValuation: 2000,
            createdAt: "2024-10-01T21:30:38.143Z",
            updatedAt: "2024-10-01T21:30:38.143Z",
        },
        {
            id: 68,
            name: "John Doe 23",
            salary: 100,
            companyValuation: 2000,
            createdAt: "2024-10-01T21:30:39.383Z",
            updatedAt: "2024-10-01T21:30:39.383Z",
        },
        {
            id: 69,
            name: "John Doe 23",
            salary: 100,
            companyValuation: 2000,
            createdAt: "2024-10-01T21:30:40.270Z",
            updatedAt: "2024-10-01T21:30:40.270Z",
        },
        {
            id: 70,
            name: "John Doe 23",
            salary: 100,
            companyValuation: 2000,
            createdAt: "2024-10-01T21:30:41.088Z",
            updatedAt: "2024-10-01T21:30:41.088Z",
        },
    ],
    totalPages: 3,
    currentPage: 1,
};
describe("Testing ListClients molecules", () => {
    it("Should render Body correctly ", () => {
        const mockOnAddAction = jest.fn();
        const mockOnEditAction = jest.fn();
        const mockOnDeleteAction = jest.fn();
        const { getByTestId } = render(
            <Body clients={mockClients.clients} addAction={mockOnAddAction} deleteAction={mockOnDeleteAction} editAction={mockOnEditAction} />
        );
        expect(screen.getAllByText(/john doe/i)[0]).toBeTruthy();

        fireEvent.click(getByTestId("addIcon70"));
        expect(mockOnAddAction).toBeCalledWith();
        fireEvent.click(getByTestId("editIcon70"));
        expect(mockOnEditAction).toBeCalledWith({
            companyValuation: 2000,
            createdAt: "2024-10-01T21:30:41.088Z",
            id: 70,
            name: "John Doe 23",
            salary: 100,
            updatedAt: "2024-10-01T21:30:41.088Z",
        });
        fireEvent.click(getByTestId("deleteIcon70"));
        expect(mockOnDeleteAction).toBeCalledWith({
            companyValuation: 2000,
            createdAt: "2024-10-01T21:30:41.088Z",
            id: 70,
            name: "John Doe 23",
            salary: 100,
            updatedAt: "2024-10-01T21:30:41.088Z",
        });
    });
    it("Should render Header correctly ", () => {
        const mockOnChange = jest.fn();

        render(<Header limit={4} onChange={() => mockOnChange} totalClients={16} />);

        expect(screen.getByText(/clientes encontrados:/i)).toBeTruthy();

        // Simula a mudança do valor no select
        const selectElement = screen.getByRole("textbox", {
            hidden: true,
        });

        // Dig deep to find the actual <select>

        // Simulate selecting a different option
        fireEvent.change(selectElement, { target: { value: 8 } });
    });
    it("Should render FooterPagination correctly ", () => {
        const mockOnChange = jest.fn();

        render(<FooterPagination clients={mockClients} onChangePage={mockOnChange} />);
        fireEvent.click(
            screen.getByRole("button", {
                name: /go to page 2/i,
            })
        );

        expect(mockOnChange).toBeCalledWith(2);
    });
    it("Should render ListClientsFooterButton correctly ", () => {
        const mockOnClick = jest.fn();

        render(<FooterButton onClick={mockOnClick} />);
        fireEvent.click(screen.getByText(/criar cliente/i));

        expect(mockOnClick).toBeCalled();
    });
});
