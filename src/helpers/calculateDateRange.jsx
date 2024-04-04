export const calculateDateRange = () => {
  const today = new Date();
  const nextDay = new Date(today);
  nextDay.setDate(nextDay.getDate() + 1);

  const maxDate = new Date(today);
  maxDate.setMonth(maxDate.getMonth() + 3);

  const minDateString = nextDay.toISOString().split('T')[0];
  const maxDateString = maxDate.toISOString().split('T')[0];

  return { minDate: minDateString, maxDate: maxDateString };
};