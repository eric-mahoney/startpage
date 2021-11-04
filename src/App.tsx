import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

const useStyles = makeStyles((theme: Theme) => ({
  app: {
    backgroundColor: theme.palette.secondary.light,
    minHeight: "100vh",
    padding: "10px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
