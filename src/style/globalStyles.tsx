import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    /* ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    } */

    html {
        overflow: overlay;
        overflow-x: hidden;
        

    }

    body {
        padding: 0;
        margin: 0;
        overscroll-behavior: none;
        overflow-x: hidden; 
		
    }

    h1, h2, h3, h4, h5, span, a {
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        text-transform: inherit;
        text-decoration: inherit;
        margin: 0;

        
    }
    
    a {
        text-decoration: none;
        color: inherit;
        outline: none;
    }

    
    
    button {
        color: inherit;
        
        &, &:active,
        &:focus {
            outline: none;
        }
    }

    
    @keyframes hide {
        from {
            opacity: 1;
            visibility: visible;
        }
        to {
            opacity: 0;
            visibility: hidden;
        }  
    }

    @keyframes show {
        from {
            opacity: 0;
            visibility: hidden;
        }
        to {
            opacity: 1;
            visibility: visible;
        }
    }
`;

export default GlobalStyle;
