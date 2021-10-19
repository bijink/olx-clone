import React, { useContext, useEffect, useState } from 'react';
import './View.scss';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { setFavLocalRemoveId } from '../../Redux/FavLocalIdRemove/FavLocalIdRemoveAction';

const View = (props) => {
   const history = useHistory();

   const { firebase } = useContext(FirebaseContext);
   const { postDetails } = useContext(PostContext);
   const { user } = useContext(AuthContext);

   const [userDetails, setUserDetails] = useState([]);

   const handlePostDelete = () => {
      firebase.firestore().collection("products").where("url", "==", `${postDetails.url}`).get()
         .then(querySnapshot => {
            querySnapshot.docs[0].ref.delete();
            let imageRef = firebase.storage().refFromURL(postDetails.url);
            imageRef.delete();
         }).then(() => {
            // console.log(postDetails.url);
            props.setFavLocalRemoveId(postDetails.url);
            history.push('/');
         });
   };

   useEffect(() => {
      const { userId } = postDetails;
      firebase.firestore().collection('users').where('id', '==', userId).get().then((response) => {
         response.forEach(doc => {
            setUserDetails(doc.data());
            // console.log(doc.data());
         });
      });
   }, [firebase, postDetails]);

   return (
      <div className="viewParentDiv">
         <div className="topSection">
            <div className="imageShowDiv">
               <img src={postDetails.url} alt="" />
            </div>
            <div className="rightSection">
               <h4>Seller Details</h4>
               {
                  <div className="contactDetails">
                     <p> Name : {userDetails.username} </p>
                     <p> Phone : {userDetails.phone} </p>
                  </div>
               }
               {
                  ((user && user.uid) === postDetails.userId) &&
                  <button className="deleteBtn" onClick={() => {
                     handlePostDelete();
                  }} >Remove Post</button>
               }
            </div>
         </div>
         <div className="bottomSection">
            <h4>Product Details</h4>
            <div className="productDetails">
               <p>&#x20B9; {postDetails.price} </p>
               <h1> {postDetails.name} </h1>
               <p> {postDetails.category} </p>
               <span> {postDetails.createdAt} </span>
            </div>
         </div>
      </div>
   );
};

const mapDispatchToProps = (dispatch) => {
   return {
      setFavLocalRemoveId: (id) => dispatch(setFavLocalRemoveId(id))
   };
};

export default connect(null, mapDispatchToProps)(View);
