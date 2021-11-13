import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    height: 4rem;
    align-items: center;
    justify-content: space-between;
    padding-inline: 1rem;

    background-color: ${(props) => props.theme.light};

    box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 5px;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`;
