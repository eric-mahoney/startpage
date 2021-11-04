import {
  Button,
  FormControl,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
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
  borderRadius: 2,
  p: 4,
  outline: 0,
};

const formControlStyles = {
  my: 2,
};

const verifyUrl = (url: string) => {
  return url.includes("https://") || url.includes("http://");
};

const AddNewItemModal = () => {
  const [modalError, setModalError] = useState(false);
  const [modalState, setModalState] = useRecoilState(addNewFavoriteModalState);
  const [favorites, setFavorites] = useRecoilState(favoriteState);
  const linkRef = useRef<HTMLInputElement>();

  const handleClosingModal = () => setModalState(false);

  const handleAddFavorite = () => {
    const link = linkRef.current?.value;

    if (link && verifyUrl(link)) {
      const name = new URL(link).hostname.replace("www.", "");
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
          <TextField
            id="link-input"
            label="link"
            inputRef={linkRef}
            variant="outlined"
            type="url"
          />
        </FormControl>
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleAddFavorite()}
        >
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
