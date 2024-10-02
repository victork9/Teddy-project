import { useState } from "react";
import { UserContext } from ".";
import { Props } from "./types";

const User = ({ children }: Props) => {
    const [user, setUser] = useState<string>("");
    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default User;
