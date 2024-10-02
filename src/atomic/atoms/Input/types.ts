

export interface Props {
	value: string,
	onChange: (value: string) => void,
	label: string;
	Id?: string;
	[key: string]: any
}