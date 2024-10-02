export function formatCurency(value: number) {
	return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	}).format(value).replace(/\s+/, ' ')
}


export const formatCurrencyToFields = (value: string) => {
	const cleanValue = value.replace(/\D/g, "");
	const formattedValue = formatCurency(Number(cleanValue) / 100)

	return formattedValue;
};

export const convertToNumber = (formattedValue: string) => {
	const cleanedValue = formattedValue
		.replace(/[R$\s.]/g, '')  // Remove "R$", espaços e pontos (separadores de milhar)
		.replace(',', '.');       // Substitui a vírgula por ponto

	return parseFloat(cleanedValue);
};