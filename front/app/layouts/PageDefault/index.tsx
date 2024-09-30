"use client";

import { ThemeProvider } from "styled-components";
import { Link } from "@nextui-org/link";

import { Header } from "./components/Header";

import { SideBar } from "@/components/Sidebar";
import { defaultTheme } from "@/styles/themes/default";
import { GlobalStyle } from "@/styles/globals.styles";
import { MyContextProvider } from "@/contexts/sidebarContext";

export default function PageLayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="PageLayoutDefault">
        <MyContextProvider>
          <Header />
          <SideBar />
        </MyContextProvider>
        {children}
        <footer className="Footer w-full flex items-center justify-center py-3">
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
            title="nextui.org homepage"
          >
            <span className="text-default-600">Created by</span>
            <p className="text-primary">LuanMFC</p>
          </Link>
        </footer>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}
