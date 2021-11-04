import { Grid } from "@mui/material";
import AddNewItemModal from "../AddNewItem/AddNewItemModal";
import Header from "../Header/Header";
import SavedItems from "../SavedItems/SavedItems";

const Main = () => {
  return (
    <Grid container flexDirection="column">
      <Grid item alignSelf="center" padding="10px">
        <Header />
      </Grid>
      <Grid item alignSelf="center" padding="10px">
        <SavedItems />
      </Grid>
      <Grid item>
        <AddNewItemModal />
      </Grid>
    </Grid>
  );
};

export default Main;
