import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Heart from '../../../assets/Heart';
import { FirebaseContext } from '../../../Store/Context';
import { PostContext } from '../../../Store/PostContext';
import './PostsCards.scss';

const PostsCards = () => {
   const [products, setProducts] = useState([]);

   const { firebase } = useContext(FirebaseContext);
   const { setPostDetails } = useContext(PostContext);

   let today = new Date();
   let todayDateString = today.toDateString();
   let yesterday = new Date();
   yesterday.setDate(today.getDate() - 1);
   let yesterdayDateString = yesterday.toDateString();

   const history = useHistory();

   useEffect(() => {
      firebase.firestore().collection('products').get().then((snap) => {
         const allPost = snap.docs.map((product) => {
            return {
               ...product.data(),
               id: product.id
            };
         });
         setProducts(allPost);
      });
   });

   const atDate = (createdDate) => {
      if (createdDate === todayDateString) {
         return 'Today';
      } else if (createdDate === yesterdayDateString) {
         return 'Yesterday';
      } else {
         return createdDate;
      }
   };

   return (
      <div className="cardsParentDiv">
         {
            products.map((product) => {
               return (
                  <div className="cards"
                     onClick={() => {
                        setPostDetails(product);
                        history.push('/view');
                     }}>
                     <div className="imgFav">
                        <div className="image">
                           <img src={product.url} alt="" />
                        </div>
                        <div className="favorite">
                           <Heart />
                        </div>
                     </div>
                     <div className="content">
                        <p className="price">&#x20B9; {product.price} </p>
                        <p className="name">{product.name}</p>
                        <p className="category">{product.category}</p>
                     </div>
                     <div className="date">
                        <span>
                           {atDate(product.createdAt)}
                        </span>
                     </div>
                  </div>
               );
            })
         }
      </div>
   );
};

export default PostsCards;
