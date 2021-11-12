import React from "react";
import { Container } from "./styles";

export const Input = ({ label }) => {
    return (
        <Container>
            {label}
            <input />
            {/* <p>Erro de formulario</p> */}
        </Container>
    );
};
