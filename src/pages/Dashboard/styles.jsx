import styled from "styled-components";

export const Container = styled.main`
    padding: 1rem;

    max-width: 80rem;
    margin-inline: auto;

    h1 {
        margin-top: 1rem;
    }

    section {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        gap: 1rem;
    }
`;
