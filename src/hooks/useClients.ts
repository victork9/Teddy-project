import { useState } from "react";
import { createUser, deleteClient, editUser, getAllUsers, getUserById, User } from "@services/user";
import { useContextClients } from "@context/Clients";

export const useClients = () => {
	const [loading, setIsLoading] = useState(false)
	const { setClients, } = useContextClients()



	const handleGetAllClients = async (page = 1, limit?: number) => {
		setIsLoading(true)

		const response = await getAllUsers(page, limit);
		setClients(response);
		setIsLoading(false)

	};


	const handleGetUser = async (id: number) => {
		try {
			setIsLoading(true)
			return await getUserById(id);

		} catch {
			return null
		} finally {
			setIsLoading(false)
		}
	};
	const handleCreateUser = async (userData: User) => {
		try {
			await createUser(userData);
			handleGetAllClients()
		} catch {
			//
		} finally {
			setIsLoading(false)

		}


	};
	const handleEditClient = async (id: number, userData: User) => {
		try {
			await editUser(userData, id);

			handleGetAllClients()
		} catch {
			//
		} finally {
			setIsLoading(false)

		}
	};
	const handleDeleteClient = async (id: number) => {
		try {
			setIsLoading(true)

			await deleteClient(id);

			handleGetAllClients()
		} catch {
			//
		} finally {
			setIsLoading(false)

		}
	};
	return {
		loading,
		setIsLoading,
		handleGetUser,
		handleCreateUser,
		handleEditClient,
		handleDeleteClient,
		handleGetAllClients

	}
}