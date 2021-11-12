import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    html {
        @media (max-width: 1080px){
            font-size: 93.75%; // ~ 15px
        }
    }

    body {
        background-color: ${(props) => props.theme["body-bg"]};
        color: ${(props) => props.theme.dark};
        font-family: ${(props) => props.theme["ff-normal"]};
    }


    h1, h2,h3,h4,h5,h6{
        font-family: ${(props) => props.theme["ff-headings"]};
    }

    button {
        cursor: pointer;
    }

    input, textarea {
        font-size: 1rem;
    }
`;
