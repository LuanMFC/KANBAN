import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .PageLayoutDefault{
    background-color: ${(props) => props.theme.ligth};
    min-Height: 100vh;
    display: grid;
    grid-template-columns: 14.375rem 1fr 1fr 1fr;
    grid-template-rows: 5rem auto 1fr;
    grid-template-areas: 
    "Header Header Header Header"
    "SideBar Main-Content Main-Content Main-Content"
    "SideBar Footer Footer Footer";
  }
  
  .Main-Content{
    grid-area: Main-Content;
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
