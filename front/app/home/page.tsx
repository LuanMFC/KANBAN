"use client";
import { Select, SelectItem } from "@nextui-org/select";
import { Avatar } from "@nextui-org/avatar";
import { useMemo, useState } from "react";
import {
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { Button } from "@nextui-org/button";
import { Pagination } from "@nextui-org/pagination";

import PageLayoutDefault from "../layouts/PageDefault";
export const users = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
  {
    key: "5",
    name: "Emily Collins",
    role: "Marketing Manager",
    status: "Active",
  },
  {
    key: "6",
    name: "Brian Kim",
    role: "Product Manager",
    status: "Active",
  },
  {
    key: "7",
    name: "Laura Thompson",
    role: "UX Designer",
    status: "Active",
  },
  {
    key: "8",
    name: "Michael Stevens",
    role: "Data Analyst",
    status: "Paused",
  },
  {
    key: "9",
    name: "Sophia Nguyen",
    role: "Quality Assurance",
    status: "Active",
  },
  {
    key: "10",
    name: "James Wilson",
    role: "Front-end Developer",
    status: "Vacation",
  },
  {
    key: "11",
    name: "Ava Johnson",
    role: "Back-end Developer",
    status: "Active",
  },
  {
    key: "12",
    name: "Isabella Smith",
    role: "Graphic Designer",
    status: "Active",
  },
  {
    key: "13",
    name: "Oliver Brown",
    role: "Content Writer",
    status: "Paused",
  },
  {
    key: "14",
    name: "Lucas Jones",
    role: "Project Manager",
    status: "Active",
  },
  {
    key: "15",
    name: "Grace Davis",
    role: "HR Manager",
    status: "Active",
  },
  {
    key: "16",
    name: "Elijah Garcia",
    role: "Network Administrator",
    status: "Active",
  },
  {
    key: "17",
    name: "Emma Martinez",
    role: "Accountant",
    status: "Vacation",
  },
  {
    key: "18",
    name: "Benjamin Lee",
    role: "Operations Manager",
    status: "Active",
  },
  {
    key: "19",
    name: "Mia Hernandez",
    role: "Sales Manager",
    status: "Paused",
  },
  {
    key: "20",
    name: "Daniel Lewis",
    role: "DevOps Engineer",
    status: "Active",
  },
  {
    key: "21",
    name: "Amelia Clark",
    role: "Social Media Specialist",
    status: "Active",
  },
  {
    key: "22",
    name: "Jackson Walker",
    role: "Customer Support",
    status: "Active",
  },
  {
    key: "23",
    name: "Henry Hall",
    role: "Security Analyst",
    status: "Active",
  },
  {
    key: "24",
    name: "Charlotte Young",
    role: "PR Specialist",
    status: "Paused",
  },
  {
    key: "25",
    name: "Liam King",
    role: "Mobile App Developer",
    status: "Active",
  },
];
export default function Home() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  return (
    <PageLayoutDefault>
      <main className="flex flex-col gap-7 Main-Content p-6">
        <div className="Container-Buttons flex justify-between gap-2 items-center w-full h-[3rem]">
          <span className="text-terciary text-2xl">Olá, Luan Matheus!</span>
          <div className="GroupButtons flex gap-2">
            <Select className="w-52" label="Select country" size={"sm"}>
              <SelectItem
                key="argentina"
                startContent={
                  <Avatar
                    alt="Argentina"
                    className="w-6 h-6"
                    src="https://flagcdn.com/ar.svg"
                  />
                }
              >
                Argentina
              </SelectItem>
              <SelectItem
                key="venezuela"
                startContent={
                  <Avatar
                    alt="Venezuela"
                    className="w-6 h-6"
                    src="https://flagcdn.com/ve.svg"
                  />
                }
              >
                Venezuela
              </SelectItem>
              <SelectItem
                key="brazil"
                startContent={
                  <Avatar
                    alt="Brazil"
                    className="w-6 h-6"
                    src="https://flagcdn.com/br.svg"
                  />
                }
              >
                Brazil
              </SelectItem>
              <SelectItem
                key="switzerland"
                startContent={
                  <Avatar
                    alt="Switzerland"
                    className="w-6 h-6"
                    src="https://flagcdn.com/ch.svg"
                  />
                }
              >
                Switzerland
              </SelectItem>
              <SelectItem
                key="germany"
                startContent={
                  <Avatar
                    alt="Germany"
                    className="w-6 h-6"
                    src="https://flagcdn.com/de.svg"
                  />
                }
              >
                Germany
              </SelectItem>
              <SelectItem
                key="spain"
                startContent={
                  <Avatar
                    alt="Spain"
                    className="w-6 h-6"
                    src="https://flagcdn.com/es.svg"
                  />
                }
              >
                Spain
              </SelectItem>
              <SelectItem
                key="france"
                startContent={
                  <Avatar
                    alt="France"
                    className="w-6 h-6"
                    src="https://flagcdn.com/fr.svg"
                  />
                }
              >
                France
              </SelectItem>
              <SelectItem
                key="italy"
                startContent={
                  <Avatar
                    alt="Italy"
                    className="w-6 h-6"
                    src="https://flagcdn.com/it.svg"
                  />
                }
              >
                Italy
              </SelectItem>
              <SelectItem
                key="mexico"
                startContent={
                  <Avatar
                    alt="Mexico"
                    className="w-6 h-6"
                    src="https://flagcdn.com/mx.svg"
                  />
                }
              >
                Mexico
              </SelectItem>
            </Select>
            <Select className="w-52" label="Select country" size={"sm"}>
              <SelectItem
                key="argentina"
                startContent={
                  <Avatar
                    alt="Argentina"
                    className="w-6 h-6"
                    src="https://flagcdn.com/ar.svg"
                  />
                }
              >
                Argentina
              </SelectItem>
              <SelectItem
                key="venezuela"
                startContent={
                  <Avatar
                    alt="Venezuela"
                    className="w-6 h-6"
                    src="https://flagcdn.com/ve.svg"
                  />
                }
              >
                Venezuela
              </SelectItem>
              <SelectItem
                key="brazil"
                startContent={
                  <Avatar
                    alt="Brazil"
                    className="w-6 h-6"
                    src="https://flagcdn.com/br.svg"
                  />
                }
              >
                Brazil
              </SelectItem>
              <SelectItem
                key="switzerland"
                startContent={
                  <Avatar
                    alt="Switzerland"
                    className="w-6 h-6"
                    src="https://flagcdn.com/ch.svg"
                  />
                }
              >
                Switzerland
              </SelectItem>
              <SelectItem
                key="germany"
                startContent={
                  <Avatar
                    alt="Germany"
                    className="w-6 h-6"
                    src="https://flagcdn.com/de.svg"
                  />
                }
              >
                Germany
              </SelectItem>
              <SelectItem
                key="spain"
                startContent={
                  <Avatar
                    alt="Spain"
                    className="w-6 h-6"
                    src="https://flagcdn.com/es.svg"
                  />
                }
              >
                Spain
              </SelectItem>
              <SelectItem
                key="france"
                startContent={
                  <Avatar
                    alt="France"
                    className="w-6 h-6"
                    src="https://flagcdn.com/fr.svg"
                  />
                }
              >
                France
              </SelectItem>
              <SelectItem
                key="italy"
                startContent={
                  <Avatar
                    alt="Italy"
                    className="w-6 h-6"
                    src="https://flagcdn.com/it.svg"
                  />
                }
              >
                Italy
              </SelectItem>
              <SelectItem
                key="mexico"
                startContent={
                  <Avatar
                    alt="Mexico"
                    className="w-6 h-6"
                    src="https://flagcdn.com/mx.svg"
                  />
                }
              >
                Mexico
              </SelectItem>
            </Select>
          </div>
        </div>
        <div className="Container-Operation flex justify-between">
          <div className="Card bg-secondary w-[19rem] h-[9rem] rounded-md" />
          <div className="Card bg-secondary w-[19rem] h-[9rem] rounded-md" />
          <div className="Card bg-secondary w-[19rem] h-[9rem] rounded-md" />
        </div>
        <div className="Container-table">
          <Table
            aria-label="Example table with client side pagination"
            bottomContent={
              <div className="flex w-full justify-center">
                <Pagination
                  color="secondary"
                  page={page}
                  total={pages}
                  onChange={setPage}
                />
                <div className="flex gap-2">
                  <Button
                    color="secondary"
                    size="sm"
                    variant="flat"
                    onPress={() =>
                      setPage((prev) => (prev > 1 ? prev - 1 : prev))
                    }
                  >
                    Previous
                  </Button>
                  <Button
                    color="secondary"
                    size="sm"
                    variant="flat"
                    onPress={() =>
                      setPage((prev) => (prev < 10 ? prev + 1 : prev))
                    }
                  >
                    Next
                  </Button>
                </div>
              </div>
            }
            classNames={{
              wrapper: "min-h-[25rem]",
            }}
          >
            <TableHeader>
              <TableColumn key="name">NAME</TableColumn>
              <TableColumn key="role">ROLE</TableColumn>
              <TableColumn key="status">STATUS</TableColumn>
            </TableHeader>
            <TableBody items={items}>
              {(item) => (
                <TableRow key={item.name}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </main>
    </PageLayoutDefault>
  );
}
