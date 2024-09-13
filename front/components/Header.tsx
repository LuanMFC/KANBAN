import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { Switch } from "@nextui-org/switch";
import { Divider } from "@nextui-org/divider";
import { Badge } from "@nextui-org/badge";

import { MoonIcon, SunIcon } from "./icons";
export function Header() {
  return (
    <header className="Header m-5">
      <nav className="flex justify-between items-center">
        <Breadcrumbs>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Music</BreadcrumbItem>
          <BreadcrumbItem>Artist</BreadcrumbItem>
          <BreadcrumbItem>Album</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </Breadcrumbs>

        <div className="GroupOptions flex items-center justify-between gap-3">
          <Switch
            defaultSelected
            color="secondary"
            size="lg"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <SunIcon className={className} />
              ) : (
                <MoonIcon className={className} />
              )
            }
          />
          <div className="w-[0.1rem] h-5 bg-blue-500" />

          <Badge color="primary" content="5">
            <div className="w-9 h-9 rounded-full bg-blue-500" />
          </Badge>

          <Divider className="text-blue-500" orientation="vertical" />

          <Divider orientation="vertical" />

          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <User
                as="button"
                avatarProps={{
                  isBordered: true,
                  src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
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
      </nav>
    </header>
  );
}
