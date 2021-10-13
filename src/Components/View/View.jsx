import React, { useContext, useEffect, useState } from 'react';
import './View.scss';
import { FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';

const View = () => {
   const { firebase } = useContext(FirebaseContext);
   const { postDetails } = useContext(PostContext);
   const [userDetails, setUserDetails] = useState();

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
         <div className="imageShowDiv">
            <img src={postDetails.url} alt="" />
         </div>
         <div className="rightSection">
            <h4>Product Details</h4>
            <div className="productDetails">
               <p>&#x20B9; {postDetails.price} </p>
               <h1> {postDetails.name} </h1>
               <p> {postDetails.category} </p>
               <span> {postDetails.createdAt} </span>
            </div>
            <h4>Seller Details</h4>
            {
               userDetails &&
               <div className="contactDetails">
                  <p> {userDetails.username} </p>
                  <p> {userDetails.phone} </p>
               </div>
            }
         </div>
      </div>
   );
};

export default View;
