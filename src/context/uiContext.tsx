import React, { ReactNode, createContext, useState } from "react";

export interface UIContextType {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const UIContext = createContext<UIContextType | undefined>({
  isOpen: false,
  toggleOpen: () => {}
});

interface UIContextProviderProps {
  children: ReactNode;
}

export const UIContextProvider = ({ children }: UIContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <UIContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </UIContext.Provider>
  )
}