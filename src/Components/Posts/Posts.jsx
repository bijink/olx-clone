import React from 'react';
import { connect } from 'react-redux';
import { setLoadMorePost } from '../../Redux/LoadMorePost/LoadMorePostAction';
import './Posts.scss';
import Cards from '../Cards/Cards';

const Posts = (props) => {
   return (
      <div className="postParentDiv">
         <div className="quickMenu">
            <div className="heading">
               <span>Quick Menu</span>
               <span>View more</span>
            </div>
            <div className="cards">
               {/* <Cards quickMenu /> */}
            </div>
         </div>
         <div className="recommendations">
            <div className="heading">
               <span>Fresh recommendations</span>
            </div>
            <div className="cards">
               <Cards />
            </div>
            <div className="loadMore">
               <button onClick={props.setLoadMorePost}>
                  <span>Load more</span>
               </button>
            </div>
         </div>
      </div>
   );
};

const mapDispatchToProps = (dispatch) => {
   return {
      setLoadMorePost: () => dispatch(setLoadMorePost())
   };
};

export default connect(null, mapDispatchToProps)(Posts);
