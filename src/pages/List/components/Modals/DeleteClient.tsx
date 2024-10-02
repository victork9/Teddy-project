import React from "react";
import BasicModal from "@atomic/molecules/BasicModal";
import { Button, Typography } from "@mui/material";

interface Props {
    visible: boolean;
    onCloseModal: () => void;
    name: string;
    onAction: () => void;
}

const DeleteClient: React.FC<Props> = ({ visible, onCloseModal, onAction, name }) => {
    return (
        <BasicModal title="Excluir cliente:" visible={visible} onClose={onCloseModal}>
            <Typography flexWrap={"wrap"} display={"flex"} gap={"4px"}>
                Você está prestes a excluir o cliente: <Typography fontWeight={"bold"}>{name}</Typography>
            </Typography>
            <Button
                variant="contained"
                color="warning"
                fullWidth
                sx={{
                    marginTop: "16px",
                }}
                onClick={onAction}
            >
                Excluir cliente
            </Button>
        </BasicModal>
    );
};

export default DeleteClient;
