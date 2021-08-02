import React from 'react';
import './PopUpUserProfile.css';

function PopUpUserProfile(props) {
   return (
      <div className="parentDivPopUp2">
         {props.children}
      </div>
   );
}

export default PopUpUserProfile;
