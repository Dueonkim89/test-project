export function formatDate(date) {
  const currentDate = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();
  return currentMonth + "/" + currentDate + "/" + currentYear;
}
