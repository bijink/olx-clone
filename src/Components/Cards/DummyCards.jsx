import React from 'react';
import Heart from '../../assets/Heart';
import './Cards.scss';

const DummyCards = () => {
   return (
      <div className="cardsParentDiv">
         <div className="cardsMap">
            <div className="imgFav">
               <div className="image">
                  <img src="/Images/R15V3.jpg" alt="" />
               </div>
               <div className="favorite">
                  <Heart />
               </div>
            </div>
            <div className="content">
               <p className="price">&#x20B9; 1000 </p>
               <p className="name">Something</p>
               <p className="category">SomeMore Something</p>
            </div>
            <div className="date">
               <span>
                  Dont't Know
               </span>
            </div>
         </div>
      </div>
   );
};

export default DummyCards;
