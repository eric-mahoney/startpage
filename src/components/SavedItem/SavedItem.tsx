import { Avatar, Tooltip } from "@mui/material";
import { Box } from "@mui/system";

import { Favorite } from "../../models/Favorite";

const boxStyles = {
  m: 1,
};

const SavedItem = ({ name, icon, link }: Favorite) => {
  const handleClick = (link: string): void => {
    window.open(link, "_blank");
  };
  return (
    <Box onClick={() => handleClick(link)} sx={boxStyles}>
      <Tooltip title={name}>
        <Avatar>{name[0] || ""}</Avatar>
      </Tooltip>
    </Box>
  );
};

export default SavedItem;
