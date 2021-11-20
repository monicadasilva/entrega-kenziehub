import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:0;
}

:root{
    --pink:         #e9118a;
    --pinks:        #e95179;
    --orange:       #d18261;
    --purple:       #8448a1;
    --dark-blue:    #161934;
    --blue:         #222456;
    --white:        #f5f5f5;
     --black:       #000000;
    --gray:         #666360;
     --red:         #c53030;
}

body{
    background-image: radial-gradient(circle, rgba(34,36,86,1) 0%, rgba(22,25,52,1) 100%);
    background-repeat: no-repeat;
    height: 100vh;
    color: var(--white);


    text-decoration: none;
    

}
body, input{
    font-family: "Roboto Mono", monospace;
    font-size: 1rem;
}
h1,h2{
    font-family: 'Palanquin', sans-serif;
    font-weight: 700;
}

h3,h4,h5,h6, button{
font-family: 'Quicksand', sans-serif;
    font-weight: 500;
}
button{
    cursor: pointer;
}
a{
    text-decoration: none;
}
`;
