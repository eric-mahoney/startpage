import { Grid, Typography, useTheme } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const Navbar = () => {
  const theme = useTheme();
  return (
    <Grid container justifyContent="space-between">
      <Typography variant="h6" color={theme.palette.primary.dark} paddingY="20px" fontWeight={600}>
        start
      </Typography>
      <SettingsIcon color="primary" />
    </Grid>
  );
};

export default Navbar;
