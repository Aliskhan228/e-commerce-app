import { it, expect, describe } from "vitest";
import { truncateText, formatPrice } from "../../utils/utils";

describe("truncateText", () => {
  it("should return the text if text length is less then 100 characters", () => {
    const text = "Simple text";
    expect(truncateText(text)).toBe(text);
  });

  it("should return the truncated text if text length is greater than 100 characters", () => {
    const text =
      "Lorem Ipsum dolor sit amet lore m sits amet nib labore et dolor. Lorem Ipsum dolor sit amet";
    expect(truncateText(text)).toBe(text);
  });
});

describe('formatPrice', () => {
	it('should return the formatted price with USD currency', () => {
		const price = 300;
		const currency = 'USD';
		expect(formatPrice(price, currency)).toBe('$300.00');
	})

	it('should return the formatted price with EUR currency', () => {
		const price = 250.32;
		const currency = 'EUR';
		expect(formatPrice(price, currency)).toBe('€250.32');
	})

	it('should return the formatted price with GBP currency', () => {
		const price = 1000;
		const currency = 'GBP';
		expect(formatPrice(price, currency)).toBe('£1,000.00');
	})

	it('should return the formatted price with a different locale (en-GB)', () => {
		const price = 1000;
		const currency = 'GBP';
		const locale = 'en-GB';
		expect(formatPrice(price, currency, locale)).toBe('£1,000.00');
	})

	it('should return the formatted price with a different locale (fr-FR)', () => {
		const price = 250.5;
		const currency = 'EUR';
		const locale = 'fr-FR';
		expect(formatPrice(price, currency, locale)).toBe('250,50 €');
	})

	it("should rounding correctly", () => {
		const price = 250.326;
		const currency = 'USD';
		expect(formatPrice(price, currency)).toBe('$250.33');
	})

	it("should format zero correctly", () => {
		const price = 0;
    const currency = 'USD';
    expect(formatPrice(price, currency)).toBe('$0.00');
	})

	it('should format negative values correctly', () => {
		const price = -150.5;
		const currency = 'USD';
		expect(formatPrice(price, currency)).toBe('-$150.50');
	});

	it('should handle large numbers correctly', () => {
		const price = 1000000;
		const currency = 'USD';
		expect(formatPrice(price, currency)).toBe('$1,000,000.00');
	});
})
