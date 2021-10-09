import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import Heart from '../../assets/Heart';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';
import './Cards.scss';

const Cards = (props) => {
   const history = useHistory();

   const { firebase } = useContext(FirebaseContext);
   const { setPostDetails } = useContext(PostContext);
   const { user } = useContext(AuthContext);

   const [products, setProducts] = useState([]);
   const [favLists, setFavLists] = useState(() => {
      const saved = localStorage.getItem(`OLX_${user.uid}`);
      const initialValue = JSON.parse(saved);
      return (initialValue || "");
   });

   let today = new Date();
   let todayDateString = today.toDateString();
   let yesterday = new Date();
   yesterday.setDate(today.getDate() - 1);
   let yesterdayDateString = yesterday.toDateString();

   const atDate = (createdDate) => {
      if (createdDate === todayDateString) {
         return 'Today';
      } else if (createdDate === yesterdayDateString) {
         return 'Yesterday';
      } else {
         return createdDate;
      }
   };

   const favList = (prods) => {
      const index = favLists && favLists.findIndex(obj => obj.url === prods.url);
      if (index > -1) favLists && favLists.splice((index), 1);

      setFavLists([...favLists, {
         name: prods.name,
         category: prods.category,
         price: prods.price,
         url: prods.url,
         userId: prods.userId,
         createdAt: prods.createdAt,
         favUserId: user.uid
      }]);
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
      });
      localStorage.setItem(`OLX_${user.uid}`, JSON.stringify(favLists));
   }, [favLists]);

   return (
      <div className="cardsParentDiv">
         {
            // (props.fav ? favLists : products))
            // favLists && favLists.slice(0, (props.quickMenu ? 3 : (props.fav ? props.noOfItemToLoadFav : props.noOfItemToLoadPost)))
            // products.slice(0, (props.quickMenu ? 3 : (props.fav ? props.noOfItemToLoadFav : props.noOfItemToLoadPost)))
            (props.fav ? favLists && favLists : products).slice(0, (props.quickMenu ? 3 : (props.fav ? props.noOfItemToLoadFav : props.noOfItemToLoadPost)))
               .map((product, index) => {
                  // products.map((product, index) => {
                  return (
                     <div key={index} className="cardsMap"
                        onClick={() => {
                           setPostDetails(product);
                           history.push('/view');
                        }}>
                        <div className="imgFav">
                           <div className="image">
                              <img src={product.url} alt="" />
                           </div>
                           <div
                              // onClick={e => {
                              //    e.stopPropagation();

                              //    const index = favLists && favLists.findIndex(obj => obj.url === product.url);
                              //    if (index > -1) favLists && favLists.splice((index), 1);

                              //    favList(product);

                              // }}
                              className="favorite" >
                              <Heart fav={props.fav} product={product} favList={favList} />
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
      </div >
   );
};

const mapStateToProps = (state) => {
   return {
      noOfItemToLoadPost: state.post.noOfItemToLoadPost,
      noOfItemToLoadFav: state.favorite.noOfItemToLoadFav
   };
};

export default connect(mapStateToProps)(Cards);
