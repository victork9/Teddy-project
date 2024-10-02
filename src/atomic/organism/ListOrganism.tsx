import React from "react";

import * as ListClientsMolecules from "../molecules/ListClients";
import { Box } from "@mui/material";
import { bodyStyles } from "./styles";
import { Props } from "./types";

const ListOrganism: React.FC<Props> = ({ header, body, footer }) => {
    return (
        <>
            <Box sx={bodyStyles}>
                <ListClientsMolecules.Header {...header} />
                <ListClientsMolecules.Body {...body} />
                <ListClientsMolecules.FooterButton onClick={footer.onClick} />
            </Box>
            <ListClientsMolecules.FooterPagination clients={footer.clients} onChangePage={footer.onChangePage} />
        </>
    );
};

export default ListOrganism;
