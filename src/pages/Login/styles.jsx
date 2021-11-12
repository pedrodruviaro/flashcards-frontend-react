import styled from "styled-components";

export const Container = styled.main`
    padding: 1.5em;
    min-height: 100vh;
    display: grid;

    > div {
        padding: 1.5em;
        display: flex;
        gap: 3rem;
        align-items: stretch;
        justify-content: space-between;

        width: 100%;
        max-width: 1400px;
        margin: 0 auto;

        outline: 2px solid ${(props) => props.theme.medium};

        > * {
            flex: 1;
        }

        section:first-child {
            background-color: ${(props) => props.theme.medium};

            background-image: url(${"/assets/hero.jpg"});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: top center;
            /* background-blend-mode: multiply; */
        }

        section:last-child {
            /* border: 1px solid blue; */

            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            > div {
                margin-top: auto;
                margin-bottom: auto;

                p {
                    font-size: 1.15rem;
                    margin-bottom: 1rem;
                    text-align: center;
                }

                button {
                    width: 100%;
                }
            }
        }

        form {
            display: grid;
            gap: 1rem;

            a {
                display: inline-block;
                width: fit-content;

                &::after {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 1px;
                    background-color: currentColor;
                    opacity: 0.5;
                }
            }

            button {
                width: 100%;
                /* max-width: 20rem; */
                margin-inline: auto;
            }
        }
    }

    @media (max-width: 45rem) {
        div {
            section:first-child {
                display: none;
            }
        }
    }
`;
