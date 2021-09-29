import { createContext, useState } from "react";

export const LoadContext = createContext(null);

const Loading = ({ children }) => {
   const [loading, setLoading] = useState(0);

   return (
      <LoadContext.Provider value={{ loading, setLoading }}>
         {children}
      </LoadContext.Provider>
   );
};

export default Loading;