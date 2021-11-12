import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Collection } from "./pages/Collection";
import "./styles/animations.css";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/collection/:id" element={<Collection />} />
            </Routes>
        </BrowserRouter>
    );
};
