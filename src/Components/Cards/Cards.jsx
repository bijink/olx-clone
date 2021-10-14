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
   const [favLocalId, setFavLocalId] = useState(() => {
      const saved = localStorage.getItem(`OLX_${user.uid}`);
      const initialValue = JSON.parse(saved);
      return (initialValue || "");
   });
   const [favProducts, setFavProducts] = useState([]);

   props.state && props.state(favLocalId.length);
   props.state2 && props.state2(products.length);

   let today = new Date();
   let todayDateString = today.toDateString();
   let yesterday = new Date();
   yesterday.setDate(today.getDate() - 1);
   let yesterdayDateString = yesterday.toDateString();

   const dateAt = (createdDate) => {
      if (createdDate === todayDateString) {
         return 'Today';
      } else if (createdDate === yesterdayDateString) {
         return 'Yesterday';
      } else {
         return createdDate;
      }
   };

   const index = favLocalId && favLocalId.findIndex(obj => obj.url === props.favLocalRemoveId);
   if (index > -1) favLocalId && favLocalId.splice((index), 1);

   const favList = (prods) => {
      // const index = favLocalId && favLocalId.findIndex(obj => obj.url === prods.url);
      // if (index > -1) favLocalId && favLocalId.splice((index), 1);

      setFavLocalId([...favLocalId, {
         // name: prods.name,
         url: prods.url,
         // userId: prods.userId,
         // favUserId: user.uid
      }]);
   };

   const fullHeart = (prods) => {
      const check = favLocalId && favLocalId.filter(obj => (obj.url === prods.url));
      // console.log(check);
      if (check[0]) {
         return true;
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
      });

      localStorage.setItem(`OLX_${user.uid}`, JSON.stringify(favLocalId));

      for (let i = 0; i < favLocalId.length; i++) {
         const li = favLocalId.map(obj => obj);
         firebase.firestore().collection("products").where("url", "==", `${li[i].url}`).get()
            .then(querySnapshot => {
               querySnapshot.forEach(doc => {
                  // console.log(doc.data());
                  const docs = doc.data();
                  (favProducts.length < favLocalId.length) && setFavProducts(item => [...item, docs]);
               });
            });
      }
   }, [favLocalId]);

   return (
      <div className="cardsParentDiv">
         {
            // (props.fav ? favLocalId : products))
            // products.slice(0, (props.quickMenu ? 3 : (props.fav ? props.noOfItemToLoadFav : props.noOfItemToLoadPost)))
            (props.fav ? favProducts : products).slice(0, (props.quickMenu ? 10 : (props.fav ? props.noOfItemToLoadFav : props.noOfItemToLoadPost)))
               .map((product, index) => {
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
                              //    // const index = favLocalId && favLocalId.findIndex(obj => obj.url === product.url);
                              //    // console.log(index);
                              //    // if (index > 1) favLocalId && favLocalId.splice((index), 1);
                              //    // favList(product);
                              //    // console.log(product);
                              //    foo();
                              // }}
                              className="favorite" >
                              {
                                 !fullHeart(product) ?
                                    <Heart quickMenu={props.quickMenu} fav={props.fav} product={product} favList={favList} />
                                    :
                                    <Heart fullHeart quickMenu={props.quickMenu} fav={props.fav} product={product} favList={favList} />
                              }
                           </div>
                        </div>
                        <div className="content">
                           <p className="price">&#x20B9; {product.price} </p>
                           <p className="name">{product.name}</p>
                           <p className="category">{product.category}</p>
                        </div>
                        <div className="date">
                           <span>
                              {dateAt(product.createdAt)}
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
      noOfItemToLoadFav: state.favorite.noOfItemToLoadFav,
      favLocalRemoveId: state.favLocalRemoveId.favLocalRemoveId
   };
};

export default connect(mapStateToProps)(Cards);
