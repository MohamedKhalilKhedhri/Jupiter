import React, { createContext, useEffect, useState } from 'react'


export const ThemeContext = createContext(null);

function ThemeContextProvider({children}) {
    const [isdarkMode,setDarkMode] = useState(() => {
        const modeState = localStorage.getItem('darkMode');
        return  modeState ? JSON.parse(modeState) : false ;
    })
    useEffect(() => {
        if (isdarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isdarkMode]);

    const toggleMode = () => {
        const newMode = !isdarkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);
    };

  return (
    <ThemeContext.Provider value={{toggleMode,isdarkMode}}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContextProvider