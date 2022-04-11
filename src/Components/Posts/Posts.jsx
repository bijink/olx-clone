import React, { useEffect, useState } from 'react';
import './Posts.scss';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../Cards/Cards';
import { onSnapshot, orderBy, query } from 'firebase/firestore';
import { colRef } from '../../Firebase/Config';
import { setLoadMorePost } from '../../Redux/Actions';


const Posts = () => {
   const [products, setProducts] = useState([]);

   const noOfItemToLoad_post = useSelector(state => state.postLoadMore.noOfItemToLoad_post);
   const dispatch = useDispatch();


   useEffect(() => {
      const queryOrder = query(colRef, orderBy('createdTime', 'desc'));
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
      <div className="postParentDiv">
         <div className="quickMenu">
            <div className="heading">
               <span>Quick Menu</span>
               <span>View more</span>
            </div>
            <div className="quickMenu__cards">
               {products.slice(0, 10).map(product => (
                  <Cards key={product.id} product={product} />
               ))}
            </div>
         </div>
         <div className="recommendations">
            <div className="heading">
               <span>Fresh recommendations</span>
            </div>
            <div className="recommendations__cards">
               {products.slice(0, noOfItemToLoad_post).map(product => (
                  <Cards key={product.id} product={product} />
               ))}
            </div>
            {(products.length > noOfItemToLoad_post) ? (
               <div className="loadMore">
                  <button onClick={() => {
                     dispatch(setLoadMorePost());
                  }}>
                     <span>Load more</span>
                  </button>
               </div>
            ) : (
               <h5 className='postEnd'>End of List</h5>
            )}
         </div>
      </div >
   );
};

export default Posts;
