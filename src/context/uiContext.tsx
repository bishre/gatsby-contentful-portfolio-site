import React, { createContext, useState } from "react";

export const UIContext = createContext({});

export const UIContextProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <UIContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </UIContext.Provider>
  )
}