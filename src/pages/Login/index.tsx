import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContextUser } from "@context/User";
import { Box, Button, Typography } from "@mui/material";
import { Container, LoginBox, styleTextField, Title } from "./styles";
import Input from "@atomic/atoms/Input";

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const { setUser } = useContextUser();

    const handleLogin = () => {
        setUser(input);
        navigate("/clients");
    };

    return (
        <Box sx={Container}>
            <Box sx={LoginBox}>
                <Typography variant="h1" sx={Title}>
                    Olá, seja bem-vindo!
                </Typography>
                <Input fullWidth sx={styleTextField} id="login-input" label="Digite o seu nome" value={input} onChange={(value) => setInput(value)} />
                <Button onClick={handleLogin} variant="contained" color="warning" fullWidth>
                    Entrar
                </Button>
            </Box>
        </Box>
    );
};

export default Login;
