import styled, { css } from "styled-components";

export const Container = styled.button`
    background-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.light};
    font-weight: 400;
    border-radius: 4px;
    padding: 0.6rem 1rem;
    border: none;
    outline: none;

    transition: all 200ms ease;
    display: inline-block;
    font-weight: 500;

    &:hover,
    &:focus {
        filter: brightness(0.8);
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    ${(props) =>
        props.secondary &&
        css`
            background-color: ${(props) => props.theme.medium};
            color: ${(props) => props.theme.dark};
            font-weight: 500;
        `}
`;
