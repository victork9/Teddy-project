import { formatCurency } from "./formatCurrency"

describe('Testing utils', () => {
	it('Testing formatcurrency', () => {
		expect(formatCurency(1200)).toEqual("R$ 1.200,00")
	})
})