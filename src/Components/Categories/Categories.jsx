import React from 'react';
import './Categories.scss';

const Categories = () => {
   return (
      <div className="parentDivCategories">
         <div className="childDivCategories">
            {/* <div className="childDivCategories"> */}
            <div className="row"><span>Cars</span></div>
            <div className="row"><span>Mobiles</span></div>
            <div className="row"><span>Watch</span></div>
            <div className="row"><span>Laptop</span></div>
            <div className="row"><span>Dress</span></div>
            {/* </div> */}
         </div>
      </div>
   );
};

export default Categories;
