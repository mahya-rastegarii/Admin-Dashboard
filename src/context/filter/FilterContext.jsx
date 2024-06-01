
import { createContext, useContext, useState } from "react";

const FilterContext= createContext()


export const FilterProvider = ({children}) => {

    const [selectValue, setSelectValue]= useState([])

    return <FilterContext.Provider value={{ selectValue, setSelectValue }}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {

    return useContext(FilterContext)
}