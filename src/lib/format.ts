/** Fixed two-decimal rendering shared by every timing value in the UI. */
export function formatDecimal(value: number, fractionDigits = 2): string {
  return value.toFixed(fractionDigits);
}
