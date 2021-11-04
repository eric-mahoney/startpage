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

    let hour = date.getHours();
    let minutes: number | string = date.getMinutes();
    const meridiem = hour >= 0 && hour < 12 ? "am" : "pm";

    hour = hour > 12 ? hour - 12 : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hour}:${minutes}${meridiem}`;
  },
});
