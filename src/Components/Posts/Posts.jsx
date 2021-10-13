import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import { setLoadMorePost } from '../../Redux/LoadMorePost/LoadMorePostAction';
import './Posts.scss';
import Cards from '../Cards/Cards';

const Posts = (props) => {
   const [state, setState] = useState();

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
               (props.noOfItemToLoadPost < state) ?
                  <div className="loadMore">
                     <button onClick={() => {
                        props.setLoadMorePost();
                     }}>
                        <span>Load more</span>
                     </button>
                  </div> : <h5>End of List</h5>
            }
         </div>
      </div >
   );
};

const mapDispatchToProps = (dispatch) => {
   return {
      setLoadMorePost: () => dispatch(setLoadMorePost())
   };
};
const mapStateToProps = (state) => {
   return {
      noOfItemToLoadPost: state.post.noOfItemToLoadPost,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
