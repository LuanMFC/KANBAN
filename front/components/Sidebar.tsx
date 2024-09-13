import { SideBarComponent, SideBarVariant } from "@/styles/Sidebar.styles";

interface SideBarProps {
  variant?: SideBarVariant;
}

export function SideBar({ variant = "primary" }: SideBarProps) {
  return <SideBarComponent className="SideBar" variant={variant} />;
}
