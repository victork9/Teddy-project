
import { act, renderHook, } from "@testing-library/react";
import { useClients } from "./useClients";
import { useContextClients } from "../context/Clients";
import { expect } from "@jest/globals";

jest.mock("../context/Clients", () => ({
	useContextClients: jest.fn(),
}));
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

describe("Testing useClients", () => {



	it("Should update loading", () => {
		(useContextClients as jest.Mock).mockReturnValue({
			setClients: jest.fn(),
			clients: mockClients
		})

		const { result } = renderHook(() => useClients());

		act(() => {
			result.current.setIsLoading(true)
		});
		expect(result.current.loading).toBe(true)
	});
	it("Should get all clients", () => {
		(useContextClients as jest.Mock).mockReturnValue({
			setClients: jest.fn(),
			clients: mockClients
		})

		const { result } = renderHook(() => useClients());

		act(() => {
			result.current.handleGetAllClients()
		});
		expect(result.current.loading).toBe(true)


	});
	it("Should get client by id", () => {
		(useContextClients as jest.Mock).mockReturnValue({
			setClients: jest.fn(),
			clients: mockClients
		})

		const { result } = renderHook(() => useClients());

		act(() => {
			result.current.handleGetUser(54)
		});
		expect(result.current.loading).toBe(true)


	});
	it("Should create client", () => {
		(useContextClients as jest.Mock).mockReturnValue({
			setClients: jest.fn(),
			clients: mockClients
		})

		const { result } = renderHook(() => useClients());

		act(() => {
			result.current.handleCreateUser({
				name: "John Do testee",
				salary: 500.01,
				companyValuation: 3500,
			})
		});


	});
	it("Should edit client", () => {
		(useContextClients as jest.Mock).mockReturnValue({
			setClients: jest.fn(),
			clients: mockClients
		})

		const { result } = renderHook(() => useClients());

		act(() => {
			result.current.handleEditClient(54, {
				name: "John Do testee",
				salary: 500.04,
				companyValuation: 3501.20,
			})
		});
	});

});
