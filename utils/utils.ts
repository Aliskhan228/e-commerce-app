export const truncateText = (text: string, maxLength: number = 100): string => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export const currencySymbols: { [key: string]: string } = {
  usd: '$',
  eur: '€',
  rub: '₽',
};