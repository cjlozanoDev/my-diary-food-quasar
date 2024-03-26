import { DateTime } from "luxon";

export const formatDateFromMillisToDateLuxon = (date) => {
  return DateTime.fromMillis(date);
};

export const formatDateFromMillis = (date, format = "dd/MM/yyyy") => {
  return DateTime.fromMillis(date).toFormat(format);
};
