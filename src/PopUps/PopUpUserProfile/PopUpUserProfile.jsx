import React from 'react';
import './PopUpUserProfile.scss';

function PopUpUserProfile(props) {
   return (
      <div className="parentDivPopUp2">
         {props.children}
      </div>
   );
}

export default PopUpUserProfile;
