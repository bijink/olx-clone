import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const UserProfilePopUpTriggerCon = createContext();

function UserProfilePopUpTriggerContext(props) {

   const [userProfilePopUpTrigger, setUserProfilePopUpTrigger] = useState(false);

   return (
      <UserProfilePopUpTriggerCon.Provider value={{ userProfilePopUpTrigger, setUserProfilePopUpTrigger }}>
         {props.children}
      </UserProfilePopUpTriggerCon.Provider>
   );
}

export default UserProfilePopUpTriggerContext;
