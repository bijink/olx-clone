import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import Heart from '../../../assets/Heart';
import { FirebaseContext } from '../../../Store/Context';
import { PostContext } from '../../../Store/PostContext';
import './PostsCards.scss';

const PostsCards = (props) => {
   const { firebase } = useContext(FirebaseContext);
   const { setPostDetails } = useContext(PostContext);

   const [products, setProducts] = useState([]);

   let today = new Date();
   let todayDateString = today.toDateString();
   let yesterday = new Date();
   yesterday.setDate(today.getDate() - 1);
   let yesterdayDateString = yesterday.toDateString();

   const history = useHistory();

   const atDate = (createdDate) => {
      if (createdDate === todayDateString) {
         return 'Today';
      } else if (createdDate === yesterdayDateString) {
         return 'Yesterday';
      } else {
         return createdDate;
      }
   };


   useEffect(() => {
      firebase.firestore().collection('products').get().then((snapshot) => {
         const allPost = snapshot.docs.map((product) => {
            return {
               ...product.data(),
               id: product.id
            };
         });
         setProducts(allPost);

         // const index = Math.floor(Math.random() * allPost.length);

         // setState2(allPost);

      });
   });



   // const index = Math.floor(Math.random() * response.data.results.length);
   // const indexs = Math.floor(Math.random() * products.length);
   // const getRandomItem = iterable => iterable.get([...iterable.keys()][Math.floor(Math.random() * iterable.size)])
   // const getRandomItem = products => products.get([...products.keys()][Math.floor(Math.random() * products.size)])

   return (
      <div className="cardsParentDiv">
         {
            products.slice(0, (props.quickMenu ? 2 : props.noOfItemToLoad)).map((product, index) => {
               // products.map((product, index) => {
               return (
                  <div key={index} className="cards"
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

const mapStateToProps = (state) => {
   return {
      noOfItemToLoad: state.noOfItemToLoad
   };
};

export default connect(mapStateToProps)(PostsCards);
