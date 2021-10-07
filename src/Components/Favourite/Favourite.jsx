import React from 'react';
import './Favourite.scss';
import Cards from '../Cards/Cards';
import { connect } from 'react-redux';
import { setLoadMoreFav } from '../../Redux/LoadMoreFav/LoadMoreFavAction';
// import DummyCards from '../Cards/DummyCards';

const Favourite = (props) => {
   return (
      <div className="parentDivFavourite">
         <article className="childDivFavourite">
            <aside className="sideBar">
               1111111111
            </aside>
            <div className="cardsSection">
               <div className="cards">
                  <Cards fav />
               </div>
               <div className="loadMore">
                  <button onClick={props.setLoadMoreFav}>
                     <span>Load more</span>
                  </button>
               </div>
            </div>
         </article>
      </div>
   );
};

const mapDispatchToProps = (dispatch) => {
   return {
      setLoadMoreFav: () => dispatch(setLoadMoreFav())
   };
};

export default connect(null, mapDispatchToProps)(Favourite);
