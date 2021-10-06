import React from 'react';
import './Posts.scss';
import PostsCards from './PostsCards/PostsCards';

const Posts = () => {
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
               <button><span>Load more</span></button>
            </div>
         </div>
      </div>
   );
};

export default Posts;
