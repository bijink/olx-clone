import React, { useContext, useEffect, useState } from 'react';
import './View.css';
import { FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';

function View() {

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
            <div className="productDetails">
               <p>&#x20B9; {postDetails.price} </p>
               <span> {postDetails.name} </span>
               <p> {postDetails.category} </p>
               <span> {postDetails.createdAt} </span>
            </div>
            {
               userDetails && <div className="contactDetails">
                  <p>Seller details</p>
                  <p> {userDetails.username} </p>
                  <p> {userDetails.phone} </p>
               </div>
            }
         </div>
      </div>
   );
}
export default View;
