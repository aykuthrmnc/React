export const numberFormat = (value: number) =>
  Intl.NumberFormat("tr", {
    notation: value > 9999 ? "compact" : "standard",
    maximumFractionDigits: 1,
  }).format(value);
