import React, {createContext, useContext, useState} from "react";
import { UNSAFE_DataRouterStateContext } from "react-router-dom";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,

}

export const ContextProvider = ({children}) => {
    const [activeMenu , setActiveMenu] = useState(true);
   const [isClicked, setIsClicked] = useState(initialState);
   const [screenSize, setScreenSize] = useState(undefined);
   const [currentColor, setCurrentColor] = useState("#03C9D7");
   const [currentMode, setCurrentMode] = useState('Light');
   const [themeSettings, setThemeSettings] = useState(false);
   const [cancelButton, setcancelButton] = useState(false);

   const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode' ,e.target.value );
    setThemeSettings(false);
   }

   const setColor = (color) => {
     setCurrentColor(color);
     localStorage.setItem("colorMode",color);
     setThemeSettings(false);
   };


   const handleClick = (clicked) =>
     setIsClicked({ ...initialState, [clicked]: true });

     const handleCancel = () => 
      setIsClicked({
        chat: false,
        cart: false,
        userProfile: false,
        notification: false,
      });
     

    return (
      <StateContext.Provider
        value={{
          activeMenu,
          setActiveMenu,
          isClicked,
          setIsClicked,
          handleClick,
          screenSize,
          setScreenSize,
          currentColor,
          currentMode,
          themeSettings,
          setThemeSettings,
          setMode,
          setColor,
          setCurrentColor,
          setCurrentMode,
          cancelButton,
          setcancelButton,
          handleCancel
        }}
      >
        {children}
      </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);