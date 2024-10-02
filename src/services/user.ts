import api from './';

export interface UsersList {
	clients: Client[]
	totalPages: number
	currentPage: number
}

export type User = {
	name: string
	salary: number
	companyValuation: number

}

export type Client = {
	createdAt: string
	updatedAt: string
	id: number
} & User


export const getAllClients = async (page: number = 1, limit = 16): Promise<UsersList> => {

	const response = await api.get(`/users?limit=${limit}&page=${page}`, {

	})
	return response.data
}
export const getClienteById = async (id: number): Promise<Client> => {
	const response = await api.get(`/users/${id}`, {
		headers: {
			'Content-Type': 'application/json',
		}
	})
	return response.data

}
export const createUser = async (body: User) => {
	const response = await api.post(`/users`, body)

	return response.data
}
export const editClient = async (body: User, id: number) => {
	const response = await api.patch(`/users/${id}`, body)

	return response.data
}
export const deleteClient = async (id: number) => {
	const response = await api.delete(`/users/${id}`)

	return response.data
}
