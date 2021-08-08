import { createContext, useState } from "react";

export const PostContext = createContext(null);

export default function PostCon({ children }) {
   const [postDetails, setPostDetails] = useState(null);

   return (
      <PostContext.Provider value={{ postDetails, setPostDetails }}>
         {children}
      </PostContext.Provider>
   );
};