import MenuIcon from "@mui/icons-material/Menu";

import LogoTedy from "../../assets/logo.png";
import { useContextUser } from "@context/User";
import { ReactNode, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useContextClients } from "@context/Clients";
import { Box, Typography } from "@mui/material";
import { convertToNumber, formatCurrencyToFields } from "@utils/formatCurrency";
import LoadingSpinner from "@atomic/molecules/LoagindSpinner";
import { useClients } from "@hooks/useClients";
import EditClient from "./components/Modals/EditClient";
import CreateClient from "./components/Modals/CreateClient";
import DeleteClient from "./components/Modals/DeleteClient";
import ListOrganism from "@atomic/organism/ListOrganism";
import { HamburgerMenu, Header, Nav } from "./styles";

const App = () => {
    const { user } = useContextUser();
    const { clients, setClients } = useContextClients();
    const { loading, handleCreateUser, handleGetUser, handleEditClient, handleDeleteClient, handleGetAllClients } = useClients();
    const [limit, setLimit] = useState(16);

    const [userData, setUserData] = useState<any>({
        name: "",
        salary: formatCurrencyToFields(""),
        companyValuation: formatCurrencyToFields(""),
    });
    const [modal, setModal] = useState({
        visible: false,
        type: "",
    });
    const navigate = useNavigate();

    const onPageOrLimitChange = async (page: number, limitValue?: number) => {
        const response: any = await handleGetAllClients(page, limitValue || limit);
        setClients((prev) => ({
            ...prev,
            ...response,
        }));
    };

    const handleShowModal = (visible: boolean, type = "") => {
        setModal({ type, visible });
    };

    const onCloseModal = () => {
        setUserData({
            name: "",
            salary: formatCurrencyToFields(""),
            companyValuation: formatCurrencyToFields(""),
        });
        handleShowModal(false);
    };

    const onGetUser = async (id: number) => {
        const response = await handleGetUser(id);
        setUserData({
            ...response,
            salary: formatCurrencyToFields(String(response!.salary * 100)),
            companyValuation: formatCurrencyToFields(String(response!.companyValuation * 100)),
        });
        handleShowModal(true, "edit");
    };
    const onCreateUser = async () => {
        await handleCreateUser({
            ...userData,
            salary: convertToNumber(userData.salary),
            companyValuation: convertToNumber(userData.companyValuation),
        });
        onCloseModal();
    };
    const onEditClient = async () => {
        await handleEditClient(userData.id, {
            ...userData,
            salary: convertToNumber(userData?.salary),
            companyValuation: convertToNumber(userData?.companyValuation),
        });
        onCloseModal();
    };
    const onDeleteClient = async () => {
        onCloseModal();
        await handleDeleteClient(userData.id);
    };

    useEffect(() => {
        if (!user) {
            navigate(-1);
        }
    }, []);

    const handleChangeUser = (key: string, value: string | number) => {
        setUserData((prev: any) => ({
            ...prev,
            [key]: value,
        }));
    };

    const renderModal = () => {
        const render: Record<string, ReactNode> = {
            edit: (
                <EditClient
                    userData={userData}
                    handleChangeUser={handleChangeUser}
                    visible={modal.visible}
                    onCloseModal={onCloseModal}
                    onAction={onEditClient}
                />
            ),
            create: (
                <CreateClient
                    userData={userData}
                    handleChangeUser={handleChangeUser}
                    visible={modal.visible}
                    onCloseModal={onCloseModal}
                    onAction={onCreateUser}
                />
            ),
            deleteClient: <DeleteClient visible={modal.visible} onCloseModal={onCloseModal} onAction={onDeleteClient} name={userData?.name} />,
        };

        return render[modal.type] || null;
    };

    return (
        <Box>
            <LoadingSpinner show={loading} />
            {renderModal()}
            <Box sx={Header}>
                <div>
                    <img src={LogoTedy} alt="Logo" />
                </div>
                <Box sx={Nav}>
                    <Typography sx={{ textDecoration: "underline" }} color="warning">
                        Clientes
                    </Typography>
                    <Typography>Clientes selecionados</Typography>
                    <Typography
                        onClick={() => navigate(-1)}
                        sx={{
                            cursor: "pointer",
                        }}
                    >
                        Sair
                    </Typography>
                </Box>
                <Box sx={Nav}>
                    <Typography display={"flex"} gap={0.5}>
                        Olá,
                        <Typography fontWeight={"bold"}>{user}!</Typography>
                    </Typography>
                </Box>
                <Box sx={HamburgerMenu}>
                    <MenuIcon />
                </Box>
            </Box>
            {clients.clients?.length ? (
                <>
                    <ListOrganism
                        header={{
                            limit: limit,
                            onChange: (page, value) => {
                                onPageOrLimitChange(page, Number(value));
                                setLimit(Number(value));
                            },
                            totalClients: clients.clients?.length,
                        }}
                        body={{
                            addAction: () => {},
                            editAction: (item) => onGetUser(item?.id),
                            deleteAction: (item) => {
                                setUserData(item);
                                handleShowModal(true, "deleteClient");
                            },
                            clients: clients.clients,
                        }}
                        footer={{
                            onClick: () => handleShowModal(true, "create"),
                            clients: clients,
                            onChangePage: (value) => onPageOrLimitChange(value),
                        }}
                    />
                </>
            ) : null}
        </Box>
    );
};

export default App;
