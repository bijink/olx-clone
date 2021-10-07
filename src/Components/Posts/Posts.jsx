import React from 'react';
import { connect } from 'react-redux';
import { setLoadMore } from '../../Redux/Action';
import './Posts.scss';
import PostsCards from './PostsCards/PostsCards';

const Posts = (props) => {
   return (
      <div className="postParentDiv">
         <div className="quickMenu">
            <div className="heading">
               <span>Quick Menu</span>
               <span>View more</span>
            </div>
            <div className="cardParent">
               <PostsCards quickMenu />
            </div>
         </div>
         <div className="recommendations">
            <div className="heading">
               <span>Fresh recommendations</span>
            </div>
            <div className="cardParent">
               <PostsCards />
            </div>
            <div className="loadMore">
               <button onClick={props.setLoadMore}><span>Load more</span></button>
            </div>
         </div>
      </div>
   );
};

const mapDispatchToProps = (dispatch) => {
   return {
      setLoadMore: () => dispatch(setLoadMore())
   };
};

export default connect(null, mapDispatchToProps)(Posts);
