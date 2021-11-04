import { Typography, useTheme } from "@mui/material";
import { useRecoilValue } from "recoil";

import { readableDateState, readableTimeState } from "../../store/Date";

const Header = () => {
  const theme = useTheme();
  const time = useRecoilValue(readableTimeState);
  const date = useRecoilValue(readableDateState);

  return (
    <Typography
      variant="h6"
      align="center"
      color={theme.palette.primary.main}
      fontWeight={500}
    >
      Hello, it is currently {time} on {date}
    </Typography>
  );
};

export default Header;
