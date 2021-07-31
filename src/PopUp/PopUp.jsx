import React from 'react';
import { useContext } from 'react';
import { PopUpContext } from '../Store/PopUpContext';
import './PopUp.css';

function PopUp(props) {

   const { setBtnPopUp } = useContext(PopUpContext);

   return (
      <div className="parentDivPopUp">
         {props.children}
         {/* <button onClick={() => setBtnPopUp(false)}>Close</button> */}
      </div>
   );
}

export default PopUp;
