import styled from "styled-components";

export type SideBarVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "ligth"
  | "danger"
  | "success";

interface SideBarProps {
  variant: SideBarVariant;
}

const SideBarVariant = {
  primary: "#6F7351",
  secondary: "#BFBFBF",
  tertiary: "#595959",
  ligth: "#FAFAFA",
  danger: "#6F7351",
  success: "#6F7351",
};

export const SideBarComponent = styled.aside<SideBarProps>`
  background: #000;
  // width: 18.75rem;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.secondary};
  // ${(props) => `background: ${SideBarVariant[props.variant]}`}
`;
