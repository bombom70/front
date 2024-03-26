export const generateString = (num: number, title: string) =>
  num >= 1000 ? `${(num / 1000).toFixed(1)}k ${title}` : `${num} ${title}`;
