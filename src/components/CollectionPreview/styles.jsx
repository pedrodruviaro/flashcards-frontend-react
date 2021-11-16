import styled from "styled-components";

export const Container = styled.article`
    background-color: ${(props) => props.theme.light};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 1rem;
    border-radius: 4px;

    display: grid;
    gap: 1rem;

    width: 100%;
    /* max-width: 30rem; */

    cursor: pointer;

    &:hover,
    &:focus {
        outline: 2px solid #ccc;
    }

    header {
        text-align: left;

        h3 {
            font-size: clamp(1.15rem, 3vw, 1.5rem);
            font-weight: 500;
            display: flex;
            align-items: center;

            &::before {
                content: "";
                display: inline-block;
                background-color: ${(props) => props.theme.accent};
                width: 10px;
                aspect-ratio: 1;
                margin-right: 0.5rem;
                border-radius: 50%;
            }
        }

        p {
            text-align: left;
            margin: 1rem 0 0.25rem;
        }
    }

    main {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span:first-child {
            font-weight: 500;
        }

        span:last-child {
            color: #555;
            font-size: 0.9rem;
        }
    }
`;
