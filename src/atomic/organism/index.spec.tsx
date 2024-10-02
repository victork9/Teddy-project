import ListOrganism from "./ListOrganism";
import { render } from "@testing-library/react";
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

describe("Testing ListOrganism organism", () => {
    it("Should render ListOrganism correctly ", () => {
        const mockOnChange = jest.fn();
        const mockOnAddAction = jest.fn();
        const mockOnEditEction = jest.fn();
        const mockOnDeleteAction = jest.fn();
        const mockOnClick = jest.fn();
        const mockOnChangePage = jest.fn();

        render(
            <ListOrganism
                header={{
                    limit: 3,
                    onChange: mockOnChange,
                    totalClients: mockClients.clients?.length,
                }}
                body={{
                    addAction: () => mockOnAddAction,
                    editAction: mockOnEditEction,
                    deleteAction: mockOnDeleteAction,
                    clients: mockClients.clients,
                }}
                footer={{
                    onClick: () => mockOnClick,
                    clients: mockClients,
                    onChangePage: mockOnChangePage,
                }}
            />
        );
    });
});
