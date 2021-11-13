import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    height: 4rem;
    align-items: center;
    justify-content: space-between;
    padding-inline: 1rem;

    background-color: ${(props) => props.theme.light};

    box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 5px;

    h1 {
        font-weight: 500;
        font-size: 1.25rem;

        img {
            max-width: 3rem;
        }
    }

    div,
    h1 {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    div {
        span {
            font-size: 1.15rem;
        }

        svg {
            font-size: 1.5rem;
            color: ${(props) => props.theme.accent};
        }
    }
`;
