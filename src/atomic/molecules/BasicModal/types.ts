import { ReactNode } from "react";

export interface Props {
	title: string; visible: boolean; onClose: (value: boolean) => void;
	children?: ReactNode | ReactNode[]
}