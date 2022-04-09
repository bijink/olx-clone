import React, { useState } from 'react';
import './Favourite.scss';
import Cards from '../Cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadMoreFav } from '../../Redux/Actions/PostLoadMore.action';
// import DummyCards from '../Cards/DummyCards';

const Favourite = () => {
   const [state, setstate] = useState();
   // console.log(state);

   const noOfItemToLoad_fav = useSelector(state => state.postLoadMore.noOfItemToLoad_fav);
   const dispatch = useDispatch();


   return (
      <div className="parentDivFavourite">
         <article className="childDivFavourite">
            <aside className="sideBar">
            </aside>
            <div className="cardsSection">
               <div className="cards">
                  <Cards fav state={setstate} />
               </div>
               {
                  // (props.noOfItemToLoadFav < state) ?
                  (noOfItemToLoad_fav < state) ?
                     <div className="loadMore">
                        <button onClick={() => {
                           // props.setLoadMoreFav();
                           dispatch(setLoadMoreFav());
                        }}>
                           <span>Load more</span>
                        </button>
                     </div> : <h5>End of List</h5>
               }
            </div>
         </article>
      </div>
   );
};

export default Favourite;
