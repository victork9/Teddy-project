import { BodyList, HeaderList, PropsButton, PropsPagination } from "@atomic/molecules/ListClients/types";

export interface Props {
	header: HeaderList;
	body: BodyList;
	footer: PropsPagination & PropsButton;
}