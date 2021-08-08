import { createContext, useState } from "react";

export const LoadContext = createContext(null);

export default function Loading({ children }) {
   const [loading, setLoading] = useState(0);

   return (
      <LoadContext.Provider value={{ loading, setLoading }}>
         {children}
      </LoadContext.Provider>
   );
};