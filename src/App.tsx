import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ClientList from "./pages/ListClients";
import User from "./context/User/Context";
import "./global.css";
import ClientsContext from "./context/Clients/Context";

const App = () => (
    <User>
        <ClientsContext>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/clients" element={<ClientList />} />
                </Routes>
            </Router>
        </ClientsContext>
    </User>
);

export default App;
