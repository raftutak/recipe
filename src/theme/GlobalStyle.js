import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Merriweather:400,500,600,700|Pacifico|Montserrat|Poppins:400,500,600,700&display=swap');

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        font-family: 'Poppins', sans-serif;
    }

    h1, h2, h3, h4, h5 {
        font-family: 'Merriweather', sans-serif;
        color: hsl(215, 37%, 19%)
    }

    p {
        color: hsl(215, 37%, 19%)
    }
    /* *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: hsl(0, 100%, 100%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        color: #222223;
        text-align: center;
    } */
`;

export default GlobalStyle;
