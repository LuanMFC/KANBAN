import {
  FaCheckSquare,
  FaFileExport,
  FaFileImport,
  FaHome,
  FaQuestionCircle,
} from "react-icons/fa";
import { useContext } from "react";

import {
  ListOptionsCompontent,
  OptionsComponent,
  SideBarComponent,
  TitleSection,
} from "@/styles/Sidebar.styles";
import { ContextData } from "@/contexts/sidebarContext";

export function SideBar() {
  const ContextSideBar = useContext(ContextData);

  if (!ContextSideBar) return null;
  const { activated } = ContextSideBar;

  return (
    <SideBarComponent className={`SideBar`} isActivated={activated}>
      <ListOptionsCompontent isActivated={activated}>
        <div className="w-full">
          <OptionsComponent isActivated={activated}>
            <FaHome className="Icon" size={22} />
            <span>Home</span>
          </OptionsComponent>
          <div className="frames">
            <TitleSection>Quadros KanBan</TitleSection>
            <OptionsComponent isActivated={activated}>
              <FaCheckSquare className="Icon" size={22} />
              <span>Quadro Organizacional 1</span>
            </OptionsComponent>
            <OptionsComponent isActivated={activated}>
              <FaCheckSquare className="Icon" size={22} />
              <span>Quadro Organizacional 1</span>
            </OptionsComponent>
            <OptionsComponent isActivated={activated}>
              <FaCheckSquare className="Icon" size={22} />
              <span>Quadro Organizacional 1</span>
            </OptionsComponent>
          </div>
          <div className="Operations">
            <TitleSection>Operações</TitleSection>
            <OptionsComponent isActivated={activated}>
              <FaFileImport className="Icon" size={22} />
              <span>Importar KanBan</span>
            </OptionsComponent>
            <OptionsComponent isActivated={activated}>
              <FaFileExport className="Icon" size={22} />
              <span>Exportar KanBan</span>
            </OptionsComponent>
          </div>
        </div>
        <OptionsComponent className="Help" isActivated={activated}>
          <FaQuestionCircle className="Icon" size={22} />
          <span>Ajuda</span>
        </OptionsComponent>
      </ListOptionsCompontent>
    </SideBarComponent>
  );
}
