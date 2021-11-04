import { Avatar, Tooltip } from "@mui/material";
import { useSetRecoilState } from "recoil";

import { addNewFavoriteModalState } from "../../store/Favorites";

const newItemButtonStyles = {
  mr: 1,
  mt: 1,
  cursor: "pointer",
};

const AddNewItemButton = () => {
  const setModalState = useSetRecoilState(addNewFavoriteModalState);
  const handleOpeningModal = () => setModalState(true);

  return (
    <Tooltip title="Add a new favorite item">
      <Avatar onClick={() => handleOpeningModal()} sx={newItemButtonStyles}>
        +
      </Avatar>
    </Tooltip>
  );
};

export default AddNewItemButton;
