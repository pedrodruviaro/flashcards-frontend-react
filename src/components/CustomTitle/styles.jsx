import styled from "styled-components";

export const Container = styled.h1`
    font-size: clamp(2rem, 3vw, 3rem);
    position: relative;
    width: fit-content;
    z-index: 2;

    font-weight: bold;

    &::after {
        content: "";
        position: absolute;
        display: block;
        background-color: ${(props) => props.theme.medium};

        width: 30%;
        height: 3px;
        bottom: 0;
        left: 0;
    }
`;
