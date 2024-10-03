import api from "./";
import {
  getAllClients,
  createUser,
  deleteClient,
  editClient,
  getClienteById,
  UsersList,
  Client,
} from "./user";
jest.mock("./");
let axiosMocked: jest.Mocked<typeof api>;

describe("Testing service clients", () => {
  beforeEach(() => {
    axiosMocked = api as jest.Mocked<typeof api>;
  });

  afterEach(() => {
    axiosMocked.get.mockClear();
  });
  it("Shouls call get all clients", async () => {
    const data: UsersList = {
      clients: [
        {
          id: 70,
          name: "John Doe 23",
          salary: 100,
          companyValuation: 2000,
          createdAt: "2024-10-01T21:30:41.088Z",
          updatedAt: "2024-10-01T21:30:41.088Z",
        },
      ],
      totalPages: 2,
      currentPage: 1,
    };
    axiosMocked.get.mockResolvedValueOnce({ data });

    const response = await getAllClients(1, 16);
    expect(response).toEqual(data);
  });
  it("Shouls call clients by id", async () => {
    const data: Client = {
      id: 70,
      name: "John Doe 23",
      salary: 100,
      companyValuation: 2000,
      createdAt: "2024-10-01T21:30:41.088Z",
      updatedAt: "2024-10-01T21:30:41.088Z",
    };

    axiosMocked.get.mockResolvedValueOnce({ data });

    const response = await getClienteById(70);
    expect(response).toEqual(data);
  });
  it("Shouls create clients ", async () => {
    const data: Client = {
      id: 70,
      name: "John Doe 23",
      salary: 100,
      companyValuation: 2000,
      createdAt: "2024-10-01T21:30:41.088Z",
      updatedAt: "2024-10-01T21:30:41.088Z",
    };

    axiosMocked.post.mockResolvedValueOnce({ data });

    const response = await createUser({
      name: "John Doe 23",
      salary: 100,
      companyValuation: 2000,
    });
    expect(response).toEqual(data);
  });
  it("Shouls edit clients ", async () => {
    const data: Client = {
      id: 70,
      name: "John Doe 23",
      salary: 100,
      companyValuation: 2000,
      createdAt: "2024-10-01T21:30:41.088Z",
      updatedAt: "2024-10-01T21:30:41.088Z",
    };

    axiosMocked.patch.mockResolvedValueOnce({ data });

    const response = await editClient(
      {
        name: "John Doe 23",
        salary: 100,
        companyValuation: 2000,
      },
      70
    );
    expect(response).toEqual(data);
  });
  it("Shouls delete clients ", async () => {
    axiosMocked.delete.mockResolvedValueOnce({});

    const response = await deleteClient(70);
    expect(response).toEqual(undefined);
  });
});
