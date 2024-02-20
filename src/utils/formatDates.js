import { DateTime } from "luxon";

export const formatDateFromMillis = (date, format = "dd/MM/yyyy") => {
  return DateTime.fromMillis(date).toFormat(format);
};
