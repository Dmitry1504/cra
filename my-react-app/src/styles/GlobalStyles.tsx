import {createGlobalStyle} from "styled-components";
import {myTheme} from "./Theme.styled.tsx";

export const GlobalStyles = createGlobalStyle`
*,
*:before,
*:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
background-color: ${myTheme.colors.grey.dark};
}

`

