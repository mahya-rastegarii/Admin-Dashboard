
import { createContext, useContext, useState } from "react";

const ChartContext= createContext()


export const ChartProvider = ({children}) => {

    const [chartValue, setChartValue]= useState([])

    return <ChartContext.Provider value={{chartValue, setChartValue }}>
        {children}
    </ChartContext.Provider>
}

export const useChartContext = () => {

    return useContext(ChartContext)
}