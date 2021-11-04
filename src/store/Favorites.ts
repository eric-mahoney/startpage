import { atom } from "recoil";

import { Favorite } from "../models/Favorite";

export const favoriteState = atom<Favorite[]>({
  key: "favoritesState",
  default: [],
});

export const addNewFavoriteModalState = atom<boolean>({
  key: "addNewFavoriteModalState",
  default: false,
});
