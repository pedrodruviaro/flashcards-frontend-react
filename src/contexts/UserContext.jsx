import { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, REMOVE_API_TOKEN, SET_API_TOKEN } from "../services/api";

export const UserContext = createContext();
UserContext.displayName = "User Context";

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authorized, setAuthorized] = useState(false);
    const [loadingAuth, setLoadingAuth] = useState(null);
    const [errorAuth, setErrorAuth] = useState(null);

    const navigate = useNavigate();

    // FUNCTION VALIDATE TOKEN

    const validateToken = useCallback(
        async (token) => {
            SET_API_TOKEN(token);
            try {
                const response = await api.get("/auth/token");
                if (response.statusText !== "OK") {
                    throw new Error();
                }

                setUser(response.data);
                setAuthorized(true);
                SET_API_TOKEN(token);
                navigate("/dashboard");
            } catch (err) {
                REMOVE_API_TOKEN();
            }
        },
        [navigate]
    );

    // PERSISTING USER
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"));
        if (!token) {
            navigate("/");
            return;
        }

        validateToken(token);
    }, [validateToken, navigate]);

    // FUNCTION LOGIN
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
                SET_API_TOKEN(data.token);
                localStorage.setItem("token", JSON.stringify(data.token));
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
