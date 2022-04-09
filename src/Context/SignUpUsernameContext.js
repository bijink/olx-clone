import { createContext, useState } from "react";

export const SignUpUsernameContext = createContext();

const SignUpUsernameContextProvider = ({ children }) => {
   const [signUpName, setSignUpName] = useState('');

   return (
      <SignUpUsernameContext.Provider value={{ signUpName, setSignUpName }}>
         {children}
      </SignUpUsernameContext.Provider>
   );
};

export default SignUpUsernameContextProvider;
