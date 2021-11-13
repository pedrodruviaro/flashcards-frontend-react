import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const UserContext = createContext();
UserContext.displayName = "User Context";

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authorized, setAuthorized] = useState(false);
    const [loadingAuth, setLoadingAuth] = useState(null);
    const [errorAuth, setErrorAuth] = useState(null);

    const navigate = useNavigate();

    async function loginUser(credentials) {
        setLoadingAuth(true);
        setErrorAuth(false);

        try {
            const { data } = await api.post("/auth/login", credentials);
            if (data.error) {
                throw new Error("Something went wrong...");
            }
            if (data.ok) {
                setUser(data);
                setAuthorized(true);

                navigate("/dashboard");
            }
        } catch (error) {
            setErrorAuth(error.response.data.error);
            setAuthorized(false);
        } finally {
            setLoadingAuth(false);
        }
    }

    return (
        <UserContext.Provider
            value={{ user, authorized, loadingAuth, errorAuth, loginUser }}
        >
            {children}
        </UserContext.Provider>
    );
};
