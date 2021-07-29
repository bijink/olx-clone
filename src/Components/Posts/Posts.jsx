import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';
import './Post.css';
import './Posts1.css';

function Posts() {

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

         <div className="moreView">
            <div className="heading1">
               <span>Quick Menu</span>
               <span>View more</span>
            </div>
            <div className="cards">
               {
                  products.map((product) => {
                     return (
                        <div className="card"
                           onClick={() => {
                              setPostDetails(product);
                              history.push('/view');
                           }}>
                           <div className="favorite">
                              <Heart></Heart>
                           </div>
                           <div className="image">
                              <img src={product.url} alt="" />
                           </div>
                           <div className="content">
                              <p className="rate">&#x20B9; {product.price} </p>
                              <span className="kilometer">{product.category}</span>
                              <p className="name"> {product.name}</p>
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
            <div className="cards">
               <div className="card">
                  <div className="favorite">
                     <Heart></Heart>
                  </div>
                  <div className="image">
                     <img src="../../../Images/R15V3.jpg" alt="" />
                  </div>
                  <div className="content">
                     <p className="rate">&#x20B9; 250000</p>
                     <span className="kilometer">Two Wheeler</span>
                     <p className="name"> YAMAHA R15V3</p>
                  </div>
                  <div className="date">
                     <span>10/5/2021</span>
                  </div>
               </div>
            </div>
            <div className="loadMore">
               <button><span>Load more</span></button>
            </div>
         </div>

         {/* jhgghfghg */}

         <div className="quickMenu1">
            <div className="heading1">
               <span>Quick Menu</span>
               <span>View more</span>
            </div>
            <div className="cardParent1">
               {
                  products.map((product) => {
                     return (
                        <div className="card1"
                           onClick={() => {
                              setPostDetails(product);
                              history.push('/view');
                           }}>
                           <div className="imgFav">
                              <div className="image1">
                                 <img src={product.url} alt="" />
                              </div>
                              <div className="favorite1">
                                 <Heart></Heart>
                              </div>
                           </div>
                           <div className="content1">
                              <p className="price1">&#x20B9; {product.price} </p>
                              <p className="name1">{product.name}</p>
                              <p className="category1">{product.category}</p>
                           </div>
                           <div className="date1">
                              <span>{product.createdAt}</span>
                           </div>
                        </div>
                     );
                  })
               }
            </div>
         </div>

      </div>
   );
}

export default Posts;
