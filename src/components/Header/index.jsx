import React from "react";
import { Container } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { BsPersonCircle } from "react-icons/bs";

export const Header = () => {
    const { user } = useAuth();

    return (
        <Container>
            <h1>
                <img src="/assets/logo.png" alt="Logo" />
                <span>Studify</span>
            </h1>

            <div>
                <BsPersonCircle />
                <span>{user && user.name}</span>
            </div>
        </Container>
    );
};
