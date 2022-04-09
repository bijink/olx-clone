import React, { useState } from 'react';
import './Posts.scss';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../Cards/Cards';
import { setLoadMorePost } from '../../Redux/Actions/PostLoadMore.action';


const Posts = () => {
   const [state, setState] = useState();
   // console.log(state);

   const noOfItemToLoad_post = useSelector(state => state.postLoadMore.noOfItemToLoad_post);
   const dispatch = useDispatch();

   return (
      <div className="postParentDiv">
         <div className="quickMenu">
            <div className="heading">
               <span>Quick Menu</span>
               <span>View more</span>
            </div>
            <div className="cards">
               <Cards quickMenu />
            </div>
         </div>
         <div className="recommendations">
            <div className="heading">
               <span>Fresh recommendations</span>
            </div>
            <div className="cards">
               <Cards state2={setState} />
            </div>
            {
               // (props.noOfItemToLoadPost < state) ?
               (noOfItemToLoad_post < state) ?
                  <div className="loadMore">
                     <button onClick={() => {
                        // props.setLoadMorePost();
                        dispatch(setLoadMorePost());
                     }}>
                        <span>Load more</span>
                     </button>
                  </div> : <h5>End of List</h5>
            }
         </div>
      </div >
   );
};

export default Posts;
