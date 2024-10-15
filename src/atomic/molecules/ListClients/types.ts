import { Client, UsersList } from "@services/user";

export interface BodyList {
  clients: Client[];
  addAction: () => void;
  editAction: (item: Client) => void;
  deleteAction: (item: Client) => void;
}

export interface PropsPagination {
  onChangePage: (value: number) => void;
  clients: UsersList;
}
export interface PropsButton {
  onClick: () => void;
}

export interface HeaderList {
  limit: number;
  onChange: (page: number, value: number) => void;

  totalClients: number;
}
