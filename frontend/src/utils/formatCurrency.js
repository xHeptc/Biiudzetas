export function formatCurrency(value) {
  const absoluteValue = Math.abs(value).toFixed(2);
  return `${absoluteValue} €`;
}