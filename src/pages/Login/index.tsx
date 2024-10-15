import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContextUser } from "@context/User";
import { Box, Button, Typography } from "@mui/material";
import { Container, LoginBox, styleTextField, Title } from "./styles";
import Input from "@atomic/atoms/Input";

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        value: "",
        hasError: false,
    });
    const { setUser } = useContextUser();

    const handleInput = (value: string, error: boolean) => {
        setInput({
            value,
            hasError: error,
        });
    };

    const handleLogin = () => {
        if (!input.value) {
            handleInput("", true);
            return 
        }
        setUser(input.value);
        navigate("/clients");
    };

    return (
        <Box sx={Container}>
            <Box sx={LoginBox}>
                <Typography variant="h1" sx={Title}>
                    Olá, seja bem-vindo!
                </Typography>
                <Input
                    error={input.hasError}
                    errormessage="Por favor insira seu nome"
                    fullWidth
                    sx={styleTextField}
                    id="login-input"
                    label="Digite o seu nome"
                    value={input.value}
                    onChange={(value) => handleInput(value, false)}
                />
                <Button onClick={handleLogin} variant="contained" color="warning" fullWidth>
                    Entrar
                </Button>
            </Box>
        </Box>
    );
};

export default Login;
