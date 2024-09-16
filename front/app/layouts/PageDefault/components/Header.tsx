import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { Switch } from "@nextui-org/switch";
import { Badge } from "@nextui-org/badge";
import { FaBars, FaRegBell } from "react-icons/fa";
import Image from "next/image";

import { MoonIcon, SunIcon } from "@/components/icons";
import { NavBarComponente } from "@/styles/Header.styles";

export function Header() {
  return (
    <header className="Header">
      <NavBarComponente>
        <div className="Container_MenuLogo flex items-center justify-between gap-5">
          <FaBars className="cursor-pointer" size={24} />
          <Image
            alt="Logo Kanban"
            height={100}
            src={"./Logomarca2.svg"}
            width={120}
          />
        </div>

        <div className="GroupOptions flex items-center justify-between gap-5">
          <Switch
            defaultSelected
            color="primary"
            size="md"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <SunIcon className={className} />
              ) : (
                <MoonIcon className={className} />
              )
            }
          />

          <Badge color="primary" content="9">
            <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
              <FaRegBell className="text-ligth" size={20} />
            </div>
          </Badge>

          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <User
                as="button"
                avatarProps={{
                  isBordered: true,
                  src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                  className: "w-9 h-9",
                }}
                className="transition-transform"
                description="@tonyreichert"
                name="Tony Reichert"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-bold">Signed in as</p>
                <p className="font-bold">@tonyreichert</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </NavBarComponente>
    </header>
  );
}
