import styled from "styled-components";

interface ButtonProps {
  isActivated?: boolean;
}

export const SideBarComponent = styled.aside<ButtonProps>`
  width: ${(props) => (props.isActivated ? "4rem" : "inherit")};
  height: 100%;
  background-color: ${(props) => props.theme.ligth};
  border-right: 1px solid ${(props) => props.theme.secondary};
`;

export const ListOptionsCompontent = styled.ul<ButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isActivated ? "center" : "start")};
  justify-content: space-between;

  height: 100%;
  width: 100%;

  padding: 1rem 0.5rem;
`;

export const OptionsComponent = styled.li<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isActivated ? "center" : "start")};
  gap: 0.5rem;

  width: 100%;
  padding: 0.5rem 0.5rem;
  margin: 0.5rem 0;

  border-radius: 6px;
  color: ${(props) => props.theme.font};

  transition: all 0.1s;
  .Icon {
    flex-shrink: 0;
  }
  span {
    display: ${(props) => (props.isActivated ? "none" : "flex")};
    flex-grow: 1;
    white-space: nowrap; /* Impede que o texto quebre em várias linhas */
    overflow: hidden; /* Esconde o texto que ultrapassa a largura */
    text-overflow: ellipsis; /* Adiciona reticências no final do texto */
  }

  &:hover {
    background-color: ${(props) => props.theme.base};
    cursor: pointer;
    color: ${(props) => props.theme.font};
  }
`;

export const TitleSection = styled.span`
  margin-top: 0.3rem;
  color: ${(props) => props.theme.tertiary};
`;
