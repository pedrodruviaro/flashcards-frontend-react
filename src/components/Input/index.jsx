import React from "react";
import { Container } from "./styles";

export const Input = ({
    label,
    error,
    type,
    value,
    onChange,
    onBlur,
    placeholder,
}) => {
    return (
        <Container>
            {label}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && <p>{error}</p>}
        </Container>
    );
};
