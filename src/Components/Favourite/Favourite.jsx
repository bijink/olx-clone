import React, { useState } from 'react';
import './Favourite.scss';
import Cards from '../Cards/Cards';
import { connect } from 'react-redux';
import { setLoadMoreFav } from '../../Redux/LoadMoreFav/LoadMoreFavAction';
// import DummyCards from '../Cards/DummyCards';

const Favourite = (props) => {
   const [state, setstate] = useState();
   // console.log(state);
   return (
      <div className="parentDivFavourite">
         <article className="childDivFavourite">
            <aside className="sideBar">
               1111111111
            </aside>
            <div className="cardsSection">
               <div className="cards">
                  <Cards fav state={setstate} />
               </div>
               {
                  (props.noOfItemToLoadFav < state) &&
                  <div className="loadMore">
                     <button onClick={props.setLoadMoreFav}>
                        <span>Load more</span>
                     </button>
                  </div>
               }
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
const mapStateToProps = (state) => {
   return {
      noOfItemToLoadFav: state.favorite.noOfItemToLoadFav
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
