import { createContext, useState } from 'react';

export const authContext = createContext(null);

const AuthContextProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   return (
      <authContext.Provider value={{ user, setUser }}>
         {children}
      </authContext.Provider>
   );
};

export default AuthContextProvider;
