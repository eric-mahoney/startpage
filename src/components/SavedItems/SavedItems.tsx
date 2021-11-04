import { Grid, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";

import { favoriteState } from "../../store/Favorites";

import AddNewItemButton from "../AddNewItem/AddNewItemButton";
import SavedItem from "../SavedItem/SavedItem";

const SavedItems = () => {
  const savedFavorites = useRecoilValue(favoriteState);
  return (
    <>
      <Typography>Saved Items:</Typography>
      <Grid container>
        {savedFavorites.map((favorite, index) => (
          <SavedItem key={`${favorite.name}-${index}`} icon={favorite.icon} name={favorite.name} link={favorite.link} />
        ))}
        <AddNewItemButton />
      </Grid>
    </>
  );
};

export default SavedItems;
