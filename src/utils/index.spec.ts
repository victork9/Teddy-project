import { formatCurency, convertToNumber, formatCurrencyToFields } from "./formatCurrency"

describe('Testing utils', () => {
	it('Testing formatcurrency', () => {
		expect(formatCurency(1200)).toEqual("R$ 1.200,00")
	})
	it('Testing formatcurrency', () => {
		expect(convertToNumber('R$ 1200')).toEqual(1200)
	})
	it('Testing formatcurrency', () => {
		expect(formatCurrencyToFields('1200')).toEqual("R$ 12,00")
	})
})