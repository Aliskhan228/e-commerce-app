/**
 *
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated text with ellipsis
 */

export const truncateText = (
  text: string = "",
  maxLength: number = 100
): string => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

/**
 *
 * @param {number} price - Price to format
 * @param {'USD' | 'EUR' | 'GBP'} currency - Currency ('USD', 'EUR', 'GBP')
 * @param {string} [locale='en-US']
 * @returns {string} - Formatted price with currency symbol
 */

export const formatPrice = (
  price: number,
  currency: "USD" | "EUR" | "GBP",
  locale: string = "en-US"
): string => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(price);
};
