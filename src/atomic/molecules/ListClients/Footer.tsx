import React from "react";
import { Box, Button, Pagination } from "@mui/material";
import { PropsButton, PropsPagination } from "./types";
import { buttonFotter, paginationStyle } from "./styles";

export const ListClientsFooterPagination: React.FC<PropsPagination> = ({ onChangePage, clients }) => {
    return (
        <Box display={"flex"} justifyContent={"center"} padding={"20px 0"}>
            <Pagination
                sx={paginationStyle}
                data-testid="pagintaion-footer"
                boundaryCount={1}
                onChange={(_, value) => onChangePage(value)}
                count={clients.totalPages}
                hidePrevButton
                hideNextButton
            />
        </Box>
    );
};

export const ListClientsFooterButton: React.FC<PropsButton> = ({ onClick }) => {
    return (
        <Button color="warning" sx={buttonFotter} variant="outlined" onClick={onClick}>
            Criar cliente
        </Button>
    );
};
