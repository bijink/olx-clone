import React from 'react';
import './PopUpSignLog.css';

function PopUpSignLog(props) {

   // const { setBtnPopUp } = useContext(PopUpContext);

   return (
      <div className="parentDivPopUp">
         {props.children}
         {/* <button onClick={() => setBtnPopUp(false)}>Close</button> */}
      </div>
   );
}

export default PopUpSignLog;
