import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const useAuth = () => {
    const values = useContext(UserContext);
    return values;
};
