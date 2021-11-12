import React from "react";
import { Container } from "./styles";

export const CustomTitle = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};
