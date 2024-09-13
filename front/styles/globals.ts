import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .PageLayoutDefault{
    min-Height: 100vh;
    display: grid;
    grid-template-columns: 18.75rem 1fr 1fr 1fr;
    grid-template-rows: 5rem 1fr 1fr 1fr;
    grid-template-areas: 
    "SideBar Header Header Header"
    "SideBar auto auto auto"
    "SideBar auto auto auto"
    "SideBar Footer Footer Footer";
  }
  
  .SideBar{
    grid-area: SideBar;
  }

  .Header{
    grid-area: Header;
  }
  .Footer{
    grid-area: Footer;
  }
`;
