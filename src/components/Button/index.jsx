import React from "react";
import { Container } from "./styles";

export const Button = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};
