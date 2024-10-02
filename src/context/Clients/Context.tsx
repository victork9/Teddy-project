import { useEffect, useState } from "react";
import { ClientProvider } from ".";
import { Props } from "./types";
import { getAllClients, UsersList } from "@services/user";

const ClientsContext = ({ children }: Props) => {
    const [clients, setClients] = useState<UsersList>({
        clients: [],
        currentPage: 1,
        totalPages: 1,
    });
    const handleResponse = async () => {
        const response = await getAllClients();
        setClients(response);
    };
    useEffect(() => {
        handleResponse();
    }, []);

    return (
        <ClientProvider.Provider
            value={{
                clients,
                setClients,
            }}
        >
            {children}
        </ClientProvider.Provider>
    );
};

export default ClientsContext;
