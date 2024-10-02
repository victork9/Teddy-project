import BasicModal from "@atomic/molecules/BasicModal";
import Input from "@atomic/atoms/Input";
import { Button } from "@mui/material";
import { convertToNumber, formatCurrencyToFields } from "@utils/formatCurrency";
import React from "react";
import { User } from "@services/user";

interface Props {
    visible: boolean;
    onCloseModal: () => void;
    userData: User & { error?: boolean };
    handleChangeUser: (key: string, value: string) => void;
    onAction: () => void;
}

const EditClient: React.FC<Props> = ({ visible, onCloseModal, userData, handleChangeUser, onAction }) => {
    return (
        <BasicModal title="Editar cliente:" visible={visible} onClose={onCloseModal}>
            <Input
                error={!userData?.name && userData?.error}
                errormessage="Insira o nome"
                Id="nameEdituser"
                label={"Digite o nome:"}
                value={userData?.name}
                onChange={(value: string) => {
                    handleChangeUser("name", value);
                }}
            />
            <Input
                error={!convertToNumber(String(userData?.salary)) && userData?.error}
                errormessage="Insira o salário"
                Id="salaryEdituser"
                label={"Digite o salário:"}
                value={String(userData?.salary)}
                onChange={(value: string) => {
                    handleChangeUser("salary", formatCurrencyToFields(value));
                }}
            />
            <Input
                error={!convertToNumber(String(userData?.companyValuation)) && userData?.error}
                errormessage="Insira o valor da empresa"
                Id="companyEdituser"
                label={"Digite o valor da empresa:"}
                value={String(userData?.companyValuation)}
                onChange={(value: string) => {
                    handleChangeUser("companyValuation", formatCurrencyToFields(value));
                }}
            />
            <Button
                variant="contained"
                color="warning"
                fullWidth
                sx={{
                    marginTop: "16px",
                }}
                onClick={onAction}
            >
                Editar cliente
            </Button>
        </BasicModal>
    );
};

export default EditClient;
