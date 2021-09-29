import React, { useContext, useEffect, useState } from 'react';
import Heart from '../../assets/Heart';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';
import './Favourite.scss';

const Favourite = () => {
   const { firebase } = useContext(FirebaseContext);
   const [products, setProducts] = useState([]);
   const { setPostDetails } = useContext(PostContext);
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

   return (
      <div className="parentDivFavourite">
         <article className="childDivFavourite">
            <aside className="sideBar">1111111111</aside>
            <div className="cardParent1">
               {
                  products.map((product) => {
                     return (
                        <div className="cards1"
                           onClick={() => {
                              setPostDetails(product);
                              history.push('/view');
                           }}>
                           <div className="imgFav">
                              <div className="image">
                                 <img src={product.url} alt="" />
                              </div>
                              <div className="favorite">
                                 <Heart></Heart>
                              </div>
                           </div>
                           <div className="content">
                              <p className="price">&#x20B9; {product.price} </p>
                              <p className="name">{product.name}</p>
                              <p className="category">{product.category}</p>
                           </div>
                           <div className="date">
                              <span>{product.createdAt}</span>
                           </div>
                        </div>
                     );
                  })
               }
               <div className="loadMore">
                  <button><span>Load more</span></button>
               </div>
            </div>
         </article>
      </div>
   );
};

export default Favourite;
