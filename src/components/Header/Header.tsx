import { Typography } from "@mui/material";
import { useRecoilValue } from "recoil";

import { readableDateState, readableTimeState } from "../../store/Date";

const Header = () => {
  const time = useRecoilValue(readableTimeState);
  const date = useRecoilValue(readableDateState);
  return (
    <Typography variant="h6" align="center">
      Hello, it is currently {time} on {date}
    </Typography>
  );
};

export default Header;
