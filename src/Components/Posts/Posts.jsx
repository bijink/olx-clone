import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';
import './Posts1.scss';
import './Posts2.scss';

const Posts = () => {
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
      <div className="postParentDiv">

         <div className="quickMenu">
            <div className="heading">
               <span>Quick Menu</span>
               <span>View more</span>
            </div>
            <div className="cardParent">
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
            </div>
         </div>

         <div className="recommendations">
            <div className="heading">
               <span>Fresh recommendations</span>
            </div>
            <div className="cardParent">
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
            </div>
            <div className="loadMore">
               <button><span>Load more</span></button>
            </div>
         </div>

      </div>
   );
};

export default Posts;
