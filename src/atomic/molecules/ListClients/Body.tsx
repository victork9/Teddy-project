import { Box, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { formatCurency } from "@utils/formatCurrency";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { BodyList } from "./types";
import { card, cardActions, textBody, titleBody } from "./styles";

export const ListClientsBody: React.FC<BodyList> = ({ clients, addAction, editAction, deleteAction }) => {
    if (!clients?.length) {
        return (
            <Box display={"flex"} justifyContent={"center"}>
                <Typography variant="h5"> Nenhum cliente encontrado</Typography>
            </Box>
        );
    }

    return (
        <Grid container rowSpacing={4} spacing={3}>
            {clients?.length &&
                clients?.map((item) => (
                    <Grid item flexWrap={"wrap"} flex={1} md={4} xl={3} sm={6} xs={12}>
                        <Card sx={card}>
                            <CardContent
                                sx={{
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="h4" component="div" sx={titleBody}>
                                    {item.name}
                                </Typography>

                                <Typography variant="h5" gutterBottom sx={textBody}>
                                    {`Salário: ${formatCurency(item.salary)}`}
                                </Typography>

                                <Typography variant="h5" sx={textBody}>
                                    {`Empresa: ${formatCurency(item.companyValuation)}`}
                                </Typography>
                            </CardContent>
                            <CardActions sx={cardActions}>
                                <AddIcon
                                    data-testid={`addIcon${item.id}`}
                                    onClick={() => {
                                        addAction();
                                    }}
                                />
                                <CreateIcon
                                    data-testid={`editIcon${item.id}`}
                                    onClick={() => {
                                        editAction(item);
                                    }}
                                />
                                <DeleteIcon
                                    data-testid={`deleteIcon${item.id}`}
                                    color="error"
                                    onClick={() => {
                                        deleteAction(item);
                                    }}
                                />
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
        </Grid>
    );
};
