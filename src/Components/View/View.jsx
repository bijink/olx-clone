import React, { useContext, useEffect, useState } from 'react';
import './View.scss';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';
import { useHistory } from 'react-router';

const View = () => {
   const history = useHistory();

   const { firebase } = useContext(FirebaseContext);
   const { postDetails } = useContext(PostContext);
   const [userDetails, setUserDetails] = useState();
   const { user } = useContext(AuthContext);

   useEffect(() => {
      const { userId } = postDetails;
      firebase.firestore().collection('users').where('id', '==', userId).get().then((response) => {
         response.forEach(doc => {
            setUserDetails(doc.data());
         });
      });
   }, []);

   return (
      <div className="viewParentDiv">
         <div className="topSection">
            <div className="imageShowDiv">
               <img src={postDetails.url} alt="" />
            </div>
            <div className="rightSection">
               <h4>Seller Details</h4>
               {
                  userDetails &&
                  <div className="contactDetails">
                     <p> Name : {userDetails.username} </p>
                     <p> Phone : {userDetails.phone} </p>
                  </div>
               }{
                  (user.uid === postDetails.userId) &&
                  // console.log(user.uid);
                  // console.log(postDetails.userId);
                  <button className="deleteBtn" onClick={() => {
                     firebase.firestore().collection("products").where("url", "==", `${postDetails.url}`).get()
                        .then(querySnapshot => {
                           querySnapshot.docs[0].ref.delete();
                        }).then(history.push('/'));
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

export default View;
