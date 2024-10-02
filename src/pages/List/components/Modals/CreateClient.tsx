import BasicModal from "@atomic/molecules/BasicModal";
import Input from "@atomic/atoms/Input";
import { Button } from "@mui/material";
import { formatCurrencyToFields } from "@utils/formatCurrency";
import React from "react";
import { User } from "@services/user";

interface Props {
    visible: boolean;
    onCloseModal: () => void;
    userData: User;
    handleChangeUser: (key: string, value: string) => void;
    onAction: () => void;
}

const CreateClient: React.FC<Props> = ({ visible, onCloseModal, userData, handleChangeUser, onAction }) => {
    return (
        <BasicModal title="Criar cliente:" visible={visible} onClose={onCloseModal}>
            <Input
                Id="nameCreateuser"
                label={"Digite o nome:"}
                value={userData?.name}
                onChange={(value: string) => {
                    handleChangeUser("name", value);
                }}
            />
            <Input
                Id="salaryCreateuser"
                label={"Digite o salário:"}
                value={String(userData?.salary)}
                onChange={(value: string) => {
                    handleChangeUser("salary", formatCurrencyToFields(value));
                }}
            />
            <Input
                Id="companyCreateuser"
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
                Criar cliente
            </Button>
        </BasicModal>
    );
};

export default CreateClient;
