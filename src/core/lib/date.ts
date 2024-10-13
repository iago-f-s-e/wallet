export function transformDate(ptDate: string): Date {
  const enDate = ptDate.split('/').reverse().join('-');
  return new Date(enDate);
}
