import React, { useEffect, useState } from 'react';
import './Favourite.scss';
import Cards from '../Cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { setLoadMoreFav } from '../../Redux/Actions';
import { db } from '../../Firebase/Config';


const Favourite = () => {
   const [products, setProducts] = useState([]);

   const noOfItemToLoad_fav = useSelector(state => state.postLoadMore.noOfItemToLoad_fav);
   const dispatch = useDispatch();


   useEffect(() => {
      const queryOrder = query(collection(db, 'products'), orderBy('createdTime', 'desc'));
      onSnapshot(queryOrder, (snapshot) => {
         const allPost = snapshot.docs.map((product) => {
            return {
               ...product.data(),
               id: product.id
            };
         });
         setProducts(allPost);
      });
   }, []);


   return (
      <div className="parentDivFavourite">
         <article className="childDivFavourite">
            <aside className="sideBar"></aside>
            <div className="cardsSection">
               <div className="cards">
                  {products.slice(0, noOfItemToLoad_fav).map(product => (
                     <Cards key={product.id} product={product} page_favourite />
                  ))}
               </div>
               {(products.length > noOfItemToLoad_fav) ? (
                  <div className="loadMore">
                     <button onClick={() => {
                        dispatch(setLoadMoreFav());
                     }}>
                        <span>Load more</span>
                     </button>
                  </div>
               ) : (
                  <h5 className='postEnd'>End of List</h5>
               )}
            </div>
         </article>
      </div>
   );
};

export default Favourite;
