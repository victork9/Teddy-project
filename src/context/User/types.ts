import { Dispatch, ReactNode, SetStateAction } from "react";


export interface UserContextType {
  setUser: Dispatch<SetStateAction<string>>;
  user: string;
}


export interface Props {
  children: ReactNode | ReactNode[]
}
