import { useState } from "react";
import { createContext } from "react";

export const SignUpUsernameContext = createContext();

export default function SignUpUsername({ children }) {
   const [signUpName, setSignUpName] = useState('');

   return (
      <SignUpUsernameContext.Provider value={{ signUpName, setSignUpName }}>
         {children}
      </SignUpUsernameContext.Provider>
   );
};
