import { useState, createContext, useContext } from "react";


const ModalContext =createContext();


export const ModalProvider = ({children}) => {

   const [open, setOpen]= useState(false);

   return <ModalContext.Provider value={{open, setOpen}}>
    {children}
   </ModalContext.Provider>
};


export const useModalContext = () => {

    return useContext(ModalContext)
}