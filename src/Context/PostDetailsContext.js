import { createContext, useState } from "react";

export const PostDetailsContext = createContext(null);

const PostDetailsContextProvider = ({ children }) => {
   const [postDetails, setPostDetails] = useState(null);

   return (
      <PostDetailsContext.Provider value={{ postDetails, setPostDetails }}>
         {children}
      </PostDetailsContext.Provider>
   );
};

export default PostDetailsContextProvider;
