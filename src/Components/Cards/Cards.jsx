import React, { useContext, useEffect, useState } from 'react';
import './Cards.scss';
import { useNavigate } from 'react-router';
import Heart from '../../assets/Heart';
import { PostDetailsContext } from '../../Context/PostDetailsContext';
import { AuthContext } from '../../Context/AuthContext';
import { db } from '../../Firebase/Config';
import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';


const Cards = ({ product, page_favourite }) => {
   const navigate = useNavigate();

   const { user } = useContext(AuthContext);
   const { setPostDetails } = useContext(PostDetailsContext);

   const [isHeart, setIsHeart] = useState(false);
   const [favorite, setFavorite] = useState([]);
   const [hasFavorite, setHasFavorite] = useState(false);


   useEffect(() => onSnapshot(collection(db, 'products', product.id, 'favorite'), (snapshot) => {
      setFavorite(snapshot.docs);
   }), [product]);
   useEffect(() => setHasFavorite(favorite.findIndex((like) => like.id === user?.uid) !== -1), [product, favorite, user]);


   const dateAt = (createdDate) => {
      let today = new Date();
      let todayDateString = today.toDateString();
      let yesterday = new Date();
      yesterday.setDate(today.getDate() - 1);
      let yesterdayDateString = yesterday.toDateString();

      if (createdDate === todayDateString) {
         return 'Today';
      } else if (createdDate === yesterdayDateString) {
         return 'Yesterday';
      } else {
         return createdDate;
      }
   };

   const addFavoriteProduct = () => {
      if (hasFavorite) {
         deleteDoc(doc(db, 'products', product.id, 'favorite', user.uid));
      } else {
         setDoc(doc(db, 'products', product.id, 'favorite', user.uid), {
            userID: user.uid,
         });
      };
   };


   return (
      <>
         {(!page_favourite ? product : (product && hasFavorite)) && (
            <div className="cardsParentDiv"
               onClick={() => {
                  setPostDetails(product);
                  !isHeart && navigate('/view');
               }}>
               <div className="imgFav">
                  <div className="image">
                     <img src={product.url} alt="product" />
                  </div>
                  <div
                     className="favorite"
                     style={{ visibility: !user && 'hidden' }}
                     onMouseEnter={() => setIsHeart(true)}
                     onMouseLeave={() => setIsHeart(false)}
                     onClick={addFavoriteProduct}
                  >
                     <Heart hasFavorite={hasFavorite} />
                  </div>
               </div>
               <div className="content">
                  <p className="price">&#x20B9; {product.price} </p>
                  <p className="name">{product.name}</p>
                  <p className="category">{product.category}</p>
               </div>
               <div className="date">
                  <span>{dateAt(product.createdDate)}</span>
               </div>
            </div>
         )}
      </>
   );
};

export default Cards;
