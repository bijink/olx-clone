import { useState } from "react";
import { createContext } from "react";

export const SignUpUsernameContext = createContext();

const SignUpUsername = ({ children }) => {
   const [signUpName, setSignUpName] = useState('');
   return (
      <SignUpUsernameContext.Provider value={{ signUpName, setSignUpName }}>
         {children}
      </SignUpUsernameContext.Provider>
   );
};

export default SignUpUsername;