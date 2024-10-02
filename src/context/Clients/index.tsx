import { createContext, useContext } from "react";
import { ClientsrContextType } from "./types";
export const ClientProvider = createContext<ClientsrContextType | null>(null);

export const useContextClients = () => {
    const context = useContext(ClientProvider);

    if (!context) {
        throw new Error("useContextUser must be used within a Searchprovider");
    }

    return context;
};
