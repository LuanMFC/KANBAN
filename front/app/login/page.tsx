'use client'
import { EyeFilledIcon, EyeSlashFilledIcon, MailIcon } from "@/components/icons";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { Link } from "@nextui-org/link";
import {Divider} from "@nextui-org/divider";

import "@/styles/login.scss"
import { useState } from "react";
import { Button } from "@nextui-org/button";

export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <main className="h-screen flex items-center justify-center login">
      <section className="login_container w-[22rem] flex flex-col items-center jusitify-center p-8 gap-5 rounded-lg">
        <Image src={"./Logomarca.svg"} width={90} height={90} alt="Image Logo"/>

          <Input
            radius="sm"
            type="email"
            label="Email"
            placeholder="email@exemplo.com"
            labelPlacement="outside"
            endContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />

        <div className="password w-full text-right">
          <Input
            radius="sm"
            label="Email"
            placeholder="email@exemplo.com"
            labelPlacement="outside"
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
          <Link
            className="text-current"
            //href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
            title="nextui.org homepage"
          >
            <p className="text-default-600 text-xs mt-1">Esqueceu-se a senha?</p>
          </Link>

          
        </div>
        
        <Button className="Button font-semibold" fullWidth>
          Entrar
        </Button>

          <div className="Dividers flex items-center justify-center  gap-3">
            <Divider className="w-24"/>
            <p className="text-default-600 text-xs mt-1 text-center">Não possui acesso?</p>
            <Divider className="w-24"/>
          </div>
          <Link
            className="text-current register-link"
            //href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
            title="nextui.org homepage"
          >
            <p className="text-default-600 text-xs mt-1">Registre-se</p>

          </Link>

      </section>
    </main>
  );
}
