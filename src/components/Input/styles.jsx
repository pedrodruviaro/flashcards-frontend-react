import styled from "styled-components";

export const Container = styled.label`
    font-size: 1rem;
    margin-bottom: 0.15rem;

    input {
        display: block;
        padding: 0.5rem;
        border: 1px solid ${(props) => props.theme.medium};
        width: 100%;
        border-radius: 4px;

        transition: all 200ms ease;

        &:hover,
        &:focus {
            outline: none;
            background-color: #fefefe;
            box-shadow: 0 0 3px ${(props) => props.theme.medium},
                0 0 4px ${(props) => props.theme.accent};
        }
    }

    p {
        color: #f01;
        font-weight: 500;
        font-size: 0.9rem;
        margin-top: 0.15rem;
    }
`;
