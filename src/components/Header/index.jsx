import React from "react";
import { Container } from "./styles";
import { useAuth } from "../../hooks/useAuth";

export const Header = () => {
    const { user } = useAuth();

    return (
        <Container>
            <h1>🃏</h1>

            <div>
                <span>🧑</span>
                <span>{user && user.name}</span>
            </div>
        </Container>
    );
};
