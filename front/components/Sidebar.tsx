import {
  FaCheckSquare,
  FaFileExport,
  FaFileImport,
  FaHome,
  FaQuestionCircle,
} from "react-icons/fa";

import {
  ListOptionsCompontent,
  OptionsComponent,
  SideBarComponent,
  TitleSection,
} from "@/styles/Sidebar.styles";

export function SideBar() {
  return (
    <SideBarComponent className="SideBar">
      <ListOptionsCompontent>
        <div className="w-full">
          <OptionsComponent>
            <FaHome className="Icon" size={22} />
            <span>Home</span>
          </OptionsComponent>
          <div className="frames">
            <TitleSection>Quadros KanBan</TitleSection>
            <OptionsComponent>
              <FaCheckSquare className="Icon" size={22} />
              <span>Quadro Organizacional 1</span>
            </OptionsComponent>
            <OptionsComponent>
              <FaCheckSquare className="Icon" size={22} />
              <span>Quadro Organizacional 1</span>
            </OptionsComponent>
            <OptionsComponent>
              <FaCheckSquare className="Icon" size={22} />
              <span>Quadro Organizacional 1</span>
            </OptionsComponent>
          </div>
          <div className="Operations">
            <TitleSection>Operações</TitleSection>
            <OptionsComponent>
              <FaFileImport className="Icon" size={22} />
              <span>Importar KanBan</span>
            </OptionsComponent>
            <OptionsComponent>
              <FaFileExport className="Icon" size={22} />
              <span>Exportar KanBan</span>
            </OptionsComponent>
          </div>
        </div>
        <OptionsComponent className="Help">
          <FaQuestionCircle className="Icon" size={22} />
          <span>Ajuda</span>
        </OptionsComponent>
      </ListOptionsCompontent>
    </SideBarComponent>
  );
}
