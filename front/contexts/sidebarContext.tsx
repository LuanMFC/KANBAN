import { createContext, ReactNode, useState } from "react";

export const ContextData = createContext<
  | {
      activated: boolean;
      setActivated: (newValue: boolean) => void;
    }
  | undefined
>(undefined);

export function MyContextProvider({ children }: { children: ReactNode }) {
  const [activated, setActivated] = useState<boolean>(false);

  return (
    <ContextData.Provider value={{ activated, setActivated }}>
      {children}
    </ContextData.Provider>
  );
}
