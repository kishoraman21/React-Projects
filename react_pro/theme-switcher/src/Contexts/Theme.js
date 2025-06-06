import { useContext, createContext } from "react";

export const ThemeContext = createContext({

    themeMode:"light",
    // 2 methods
    lightTheme: () => {}, 
    darkTheme: () => {},

})

// making context provider 

export const ThemeProvider = ThemeContext.Provider

//custom hook which will contain the global context "ThemeContext"

export default function useTheme(){

    return useContext(ThemeContext)
}