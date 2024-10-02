import axios from 'axios';

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



export const getAllUsers = async (page: number = 1, limit = 16): Promise<UsersList> => {

	const response = await axios.get(`/api/users?limit=${limit}&page=${page}`, {
		headers: {
			'Content-Type': 'application/json',
		}
	})

	return response.data

}
export const getUserById = async (id: number): Promise<Client> => {

	const response = await axios.get(`/api/users/${id}`, {
		headers: {
			'Content-Type': 'application/json',
		}
	})

	return response.data


}
export const createUser = async (body: User) => {
	const response = await axios.post(`/api/users`, body)

	return response.data
}
export const editUser = async (body: User, id: number) => {
	const response = await axios.patch(`/api/users/${id}`, body)

	return response.data
}
export const deleteClient = async (id: number) => {
	const response = await axios.delete(`/api/users/${id}`)

	return response.data
}
