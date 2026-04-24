export const getDateRange=() => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 7);
  return { min: tomorrow, max: maxDate };
}

export const formatDate=(date: Date)=> {
  return date.toISOString().split("T")[0];
}