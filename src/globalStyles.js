import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
    body {
        margin: 0;
        padding: 0;
        font-family: Inter, Helvetica, Sans-Serif;
    }

    h1,h2,h3,h4,h5,h6 {
        margin: 0;
    }

    html, body, #root{
        height: 100%;
    }

`;

export default GlobalStyle;
