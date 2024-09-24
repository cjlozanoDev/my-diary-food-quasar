import { Notify } from "quasar";

export const showNotification = (
  message,
  color = "positive",
  position = "bottom"
) => {
  Notify.create({
    message,
    color,
    position,
  });
};
