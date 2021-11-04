import { atom, selector } from "recoil";

export const currentDateState = atom({
  key: "currentDateState",
  default: new Date(),
});

export const readableDateState = selector({
  key: "readableDateState",
  get: ({ get }) => {
    const date = get(currentDateState);
    return date.toDateString();
  },
});

export const readableTimeState = selector({
  key: "readableTimeState",
  get: ({ get }) => {
    const date = get(currentDateState);

    const hour = date.getHours();
    const twelveHourFormat = hour > 12 ? hour - 12 : hour;
    const meridiem = twelveHourFormat > 0 && hour < 12 ? "am" : "pm";

    const minutes = date.getMinutes();

    return `${twelveHourFormat}:${minutes}${meridiem}`;
  },
});
