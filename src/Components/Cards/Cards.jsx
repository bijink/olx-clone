import React, { useContext, useEffect, useState } from 'react';
import './Cards.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Heart from '../../assets/Heart';
import { AuthContext } from '../../Context/AuthContext';
import { PostDetailsContext } from '../../Context/PostDetailsContext';
import { colRef } from '../../Firebase/Config';
import { onSnapshot, orderBy, query, where } from 'firebase/firestore';

const Cards = (props) => {
   const navigate = useNavigate();

   // const { firebase } = useContext(FirebaseContext);
   const { setPostDetails } = useContext(PostDetailsContext);
   const { user } = useContext(AuthContext);

   const [products, setProducts] = useState([]);
   // console.log(products);
   // console.log(products[13]?.createdTime.seconds);
   const [favLocalId, setFavLocalId] = useState(() => {
      const saved = localStorage.getItem(user && `OLX_${user.uid}`);
      const initialValue = JSON.parse(saved);
      return (initialValue || "");
   });
   const [favProducts, setFavProducts] = useState([]);
   // A state only for re-render heart icon when product removed from localStorage(favLocalId)
   const [renderState, setRenderState] = useState(false);

   const noOfItemToLoad_post = useSelector(state => state.postLoadMore.noOfItemToLoad_post);
   const noOfItemToLoad_fav = useSelector(state => state.postLoadMore.noOfItemToLoad_fav);

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

   // To remove product from localStorage(favLocalId) when product removed globally
   const index = favLocalId && favLocalId.findIndex(obj => obj.url === props.favLocalRemoveId);
   if (index > -1) favLocalId && favLocalId.splice((index), 1);

   // To add product id to localStorage(favLocalId)
   const addFavList = (prods) => {
      setFavLocalId([...favLocalId, {
         // name: prods.name,
         url: prods.url,
      }]);
      // console.log(user.uid);
   };

   // To remove product id from localStorage(favLocalId) when unclicked heart icon
   const removeFavList = (prods) => {
      const index = favLocalId && favLocalId.findIndex(obj => obj.url === prods.url);
      // console.log(index);
      if (index > -1) favLocalId && favLocalId.splice((index), 1);
      localStorage.setItem(`OLX_${user.uid}`, JSON.stringify(favLocalId));

      // Only for re-render heart icon
      renderState ? setRenderState(false) : setRenderState(true);

      // To reload favorite list when product removed from localStorage
      if (props.fav) {
         if (favLocalId.length === 0) navigate('/');
         else {
            setTimeout(() => {
               navigate('/');
               navigate('/favourite');
            }, 0);
         }
      }
   };

   // To check wheather a product is in localStorage or not , To show color filled heart icon and lined heart icon
   const fullHeart = (prods) => {
      const check = favLocalId && favLocalId.filter(obj => (obj.url === prods.url));
      // console.log(check);
      if (check[0]) return true;
   };

   useEffect(() => {
      // firebase.firestore().collection('products').get().then((snapshot) => {
      //    const allPost = snapshot.docs.map((product) => {
      //       return {
      //          ...product.data(),
      //          id: product.id
      //       };
      //    });
      //    setProducts(allPost);
      // });

      const queryOrder = query(colRef, orderBy('createdTime', 'desc'));
      onSnapshot(queryOrder, (snapshot) => {
         // onSnapshot(colRef, (snapshot) => {
         const allPost = snapshot.docs.map((product) => {
            return {
               ...product.data(),
               id: product.id
            };
         });
         setProducts(allPost);
      });

      user && localStorage.setItem(`OLX_${user.uid}`, JSON.stringify(favLocalId));

      // To get() product from firestore at favorite page, correspondent to data in localStorage(favLocalId) 
      for (let i = 0; i < favLocalId.length; i++) {
         const li = favLocalId.map(obj => obj);

         // firebase.firestore().collection("products").where("url", "==", `${li[i].url}`).get()
         //    .then(querySnapshot => {
         //       querySnapshot.forEach(doc => {
         //          // console.log(doc.data());
         //          const docs = doc.data();
         //          (favProducts.length < favLocalId.length) && setFavProducts(item => [...item, docs]);
         //       });
         //    });

         // const filter = query(colRef, where("url", "==", `${li[i].url}`), orderBy('createdTime', 'desc'));
         const filter = query(colRef, where("url", "==", `${li[i].url}`));
         onSnapshot(filter, (querySnapshot) => {
            querySnapshot.forEach(doc => {
               // console.log(doc.data());
               const docs = doc.data();
               (favProducts.length < favLocalId.length) && setFavProducts(item => [...item, docs]);
            });
         });



      }
      // }, [favLocalId, favProducts.length, firebase, user]);
      // }, [favLocalId, firebase]);
   }, []);


   return (
      <div className="cardsParentDiv">
         {
            // (props.fav ? favProducts : products).slice(0, (props.quickMenu ? 10 : (props.fav ? props.noOfItemToLoadFav : props.noOfItemToLoadPost)))
            (props.fav ? favProducts : products).slice(0, (props.quickMenu ? 10 : (props.fav ? noOfItemToLoad_fav : noOfItemToLoad_post)))
               .map((product, index) => {
                  return (
                     <div key={index} className="cardsMap"
                        onClick={() => {
                           setPostDetails(product);
                           navigate('/view');
                        }}>
                        <div className="imgFav">
                           <div className="image">
                              <img src={product?.url} alt="" />
                           </div>
                           <div className="favorite" >
                              {
                                 !fullHeart(product) ?
                                    <Heart quickMenu={props.quickMenu} fav={props.fav} product={product} addFavList={addFavList} />
                                    :
                                    <Heart fullHeart quickMenu={props.quickMenu} fav={props.fav} product={product} removeFavList={removeFavList} />
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


export default Cards;
