import Box from "@mui/material/Box";
import Close from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import { style, stylesIcon } from "./styles";
import { Props } from "./types";

export default function BasicModal({ title, visible, onClose, children }: Props) {
    const handleClose = () => onClose(false);

    return (
        <div>
            <Modal open={visible} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Stack direction="row" alignItems={"center"} justifyContent={"space-between"}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {title}
                        </Typography>
                        <Close sx={stylesIcon} onClick={handleClose} />
                    </Stack>
                    {children}
                </Box>
            </Modal>
        </div>
    );
}
