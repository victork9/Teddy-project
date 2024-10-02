import { Dispatch, ReactNode, SetStateAction } from "react";
import { UsersList } from "../../services/user";

export interface ClientsrContextType {
  setClients: Dispatch<SetStateAction<UsersList>>;
  clients: UsersList;
}

export interface Props {
  children: ReactNode | ReactNode[]
}
