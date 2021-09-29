import { useState, createContext } from "react";

export const PopUpContext = createContext(null);

const PopUpCon = ({ children }) => {
   const [btnPopUp, setBtnPopUp] = useState(false);
   const [pageId, setPageId] = useState('');

   return (
      <PopUpContext.Provider value={{ btnPopUp, setBtnPopUp, pageId, setPageId }}>
         {children}
      </PopUpContext.Provider>
   );
};

export default PopUpCon;
