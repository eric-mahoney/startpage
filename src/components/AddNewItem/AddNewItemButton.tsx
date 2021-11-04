import { Avatar } from "@mui/material";
import { useSetRecoilState } from "recoil";

import { addNewFavoriteModalState } from "../../store/Favorites";

const newItemButtonStyles = {
  m: 1,
};

const AddNewItemButton = () => {
  const setModalState = useSetRecoilState(addNewFavoriteModalState);
  const handleOpeningModal = () => setModalState(true);

  return (
    <Avatar onClick={() => handleOpeningModal()} sx={newItemButtonStyles}>
      +
    </Avatar>
  );
};

export default AddNewItemButton;
