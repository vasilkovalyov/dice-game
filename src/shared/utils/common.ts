export function formatTimeValue(value: number): string {
  return String(value).padStart(2, "0");
}

export function getTimeFromDate(date: Date): string {
  return `${formatTimeValue(date.getHours())}:${formatTimeValue(date.getMinutes())}:${formatTimeValue(date.getSeconds())}`;
}
