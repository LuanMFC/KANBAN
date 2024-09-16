import { styled } from "styled-components";

export const NavBarComponente = styled.nav`
  padding: 0 2rem;
  height: 5rem;

  background-color: ${(props) => props.theme.base};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
