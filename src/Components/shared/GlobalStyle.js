import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    box-sizing: border-box;
    font-family: 'Orbitron', sans-serif;
    background-color: #0D0D0D;
  }
  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }
  html,
  body,
  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
