import { DateTime } from "luxon";

export const formatJSDateToLuxon = (date) => {
  return DateTime.fromJSDate(date);
};

export const formatDateFromJSDate = (date, format = "dd/MM/yyyy") => {
  if (!date) {
    return null;
  }
  return DateTime.fromJSDate(date).toFormat(format);
};

export const formatDateFromMillisToDateLuxon = (date) => {
  return DateTime.fromMillis(date);
};

export const formatDateFromMillis = (date, format = "dd/MM/yyyy") => {
  return DateTime.fromMillis(date).toFormat(format);
};

export const getDateToday = () => {
  return DateTime.now();
};

export const getDateBeginningOfTime = () => {
  return DateTime.fromObject({ year: 1970, month: 1, day: 1 });
};

export const formatDateLuxonStartOf = (date, partDate = "day") => {
  return date.startOf(partDate);
};

export const getCurrentDateMinusDays = (days = 30) => {
  const currentDay = DateTime.now();
  return currentDay.minus({ days });
};
