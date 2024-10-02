import { MenuItem, Select, Stack, Typography } from "@mui/material";
import React from "react";
import { HeaderList } from "./types";
import { selectHeader, styleStack, styleTypography } from "./styles";

export const ListClientsHeader: React.FC<HeaderList> = ({ totalClients, limit, onChange }) => {
    return (
        <Stack direction="row" useFlexGap sx={styleStack}>
            <Typography variant="h4" gap={1} display={"flex"} sx={styleTypography}>
                <Typography data-testid="total-clients" variant="h4" fontWeight={"bold"}>
                    {totalClients}
                </Typography>{" "}
                clientes encontrados:
            </Typography>
            <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between">
                <Typography variant="h5">Clientes por página:</Typography>
                <Select
                    data-testid="select-per-page"
                    sx={selectHeader}
                    labelId="demo-select-small-label"
                    id="select-per-page"
                    value={limit}
                    label=""
                    onChange={({ target }) => {
                        onChange(1, Number(target.value));
                    }}
                >
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                </Select>
            </Stack>
        </Stack>
    );
};
