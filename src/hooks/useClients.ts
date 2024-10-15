import { useState } from "react";
import {
  createUser,
  deleteClient,
  editClient,
  getAllClients,
  getClienteById,
  User,
} from "@services/user";
import { useContextClients } from "@context/Clients";

export const useClients = () => {
  const [limit, setLimit] = useState(16);

  const [loading, setIsLoading] = useState(false);
  const { setClients } = useContextClients();

  const handleGetAllClients = async (page = 1, limitValue?: number) => {
    setIsLoading(true);

    const response = await getAllClients(page, limitValue || limit);
    setClients(response);
    setIsLoading(false);
  };

  const handleGetUser = async (id: number) => {
    try {
      setIsLoading(true);
      return await getClienteById(id);
    } catch {
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  const handleCreateClient = async (userData: User) => {
    try {
      await createUser(userData);
      handleGetAllClients();
    } catch {
      //
    } finally {
      setIsLoading(false);
    }
  };
  const handleEditClient = async (id: number, userData: User) => {
    try {
      await editClient(userData, id);

      handleGetAllClients();
    } catch {
      //
    } finally {
      setIsLoading(false);
    }
  };
  const handleDeleteClient = async (id: number) => {
    try {
      setIsLoading(true);

      await deleteClient(id);

      handleGetAllClients();
    } catch {
      //
    } finally {
      setIsLoading(false);
    }
  };
  return {
    loading,
    setIsLoading,
    handleGetUser,
    handleCreateClient,
    handleEditClient,
    handleDeleteClient,
    handleGetAllClients,
    setLimit,
    limit,
  };
};
