import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Collection } from "./pages/Collection";
import { UserContextProvider } from "./contexts/UserContext";
import "./styles/animations.css";

export const App = () => {
    return (
        <BrowserRouter>
            <UserContextProvider>
                <Routes>
                    <Route path="/*" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/collection/:id" element={<Collection />} />
                </Routes>
            </UserContextProvider>
        </BrowserRouter>
    );
};
