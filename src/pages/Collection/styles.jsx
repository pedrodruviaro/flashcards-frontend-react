import styled from "styled-components";

export const Container = styled.main`
    padding: 1rem;
    margin-inline: auto;
    max-width: 80rem;

    h1 {
        text-align: center;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        h2 {
            margin-right: 2rem;
        }
    }

    > main {
        display: grid;
        gap: 1rem;

        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    }
`;
