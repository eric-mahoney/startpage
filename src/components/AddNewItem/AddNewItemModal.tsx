import { Button, FormControl, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";

import { addNewFavoriteModalState } from "../../store/Favorites";
import { favoriteState } from "../../store/Favorites";

const modalStyles = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const formControlStyles = {
  my: 2,
};

const AddNewItemModal = () => {
  const [modalError, setModalError] = useState(false);

  const [modalState, setModalState] = useRecoilState(addNewFavoriteModalState);
  const [favorites, setFavorites] = useRecoilState(favoriteState);

  const linkRef = useRef<HTMLInputElement>();
  const nameRef = useRef<HTMLInputElement>();

  const handleClosingModal = () => setModalState(false);
  const handleAddFavorite = () => {
    const link = linkRef.current?.value;
    const name = nameRef.current?.value;

    if (link && name) {
      setFavorites([...favorites, { icon: "", link: link, name: name }]);
      setModalError(false);
      setModalState(false);
    } else {
      setModalError(true);
    }
  };

  return (
    <Modal
      open={modalState}
      onClose={handleClosingModal}
      aria-labelledby="modal-for-adding-new-favorites"
      aria-describedby="modal-for-adding-new-favorites"
    >
      <Box sx={modalStyles}>
        <FormControl sx={formControlStyles}>
          <TextField id="name-input" label="name" inputRef={nameRef} variant="outlined" />
        </FormControl>
        <FormControl sx={formControlStyles}>
          <TextField id="link-input" label="link" inputRef={linkRef} variant="outlined" />
        </FormControl>
        <Button color="primary" variant="contained" onClick={() => handleAddFavorite()}>
          Add to Favorites
        </Button>
        {modalError && (
          <Typography color="error" margin={1}>
            Couldn't add favorite to the list. Please try again.
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export default AddNewItemModal;
function favoritesState(favoritesState: any): [any, any] {
  throw new Error("Function not implemented.");
}
