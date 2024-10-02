import { createContext, useContext } from "react";
import { UserContextType } from "./types";
export const UserContext = createContext<UserContextType | null>(null);

export const useContextUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useContextUser must be used within a Searchprovider");
    }

    return context;
};
