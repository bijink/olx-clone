import React, { useContext, useEffect, useState } from 'react';
import './View.scss';
import { AuthContext } from '../../Context/AuthContext';
import { PostDetailsContext } from '../../Context/PostDetailsContext';
import { useNavigate } from 'react-router';
import { connect } from 'react-redux';
import { setFavLocalRemoveId } from '../../Redux/FavLocalIdRemove/FavLocalIdRemoveAction';
import { deleteDoc, doc, onSnapshot, query, where } from 'firebase/firestore';
import { colRef, colRefUsers, db } from '../../Firebase/Config';

const View = (props) => {
   const navigate = useNavigate();

   // const { firebase } = useContext(FirebaseContext);
   const { postDetails } = useContext(PostDetailsContext);
   // console.log(postDetails);
   const { user } = useContext(AuthContext);
   // console.log(user);

   const [userDetails, setUserDetails] = useState([]);

   const handlePostDelete = () => {
      // firebase.firestore().collection("products").where("url", "==", `${postDetails.url}`).get()
      //    .then(querySnapshot => {
      //       querySnapshot.docs[0].ref.delete();
      //       let imageRef = firebase.storage().refFromURL(postDetails.url);
      //       imageRef.delete();
      //    }).then(() => {
      //       // console.log(postDetails.url);
      //       props.setFavLocalRemoveId(postDetails.url);
      //       navigate('/');
      //    });

      // const imageRef = ref(storage, `posts/${id}/image`);
      // const deletePost = async () => {
      //    await deleteDoc(doc(db, 'posts', id));
      //    deleteObject(imageRef);
      // };

      const filter1 = query(colRef, where("url", "==", `${postDetails.url}`));
      onSnapshot(colRef, filter1, (snapshot) => {


         snapshot.docs[0].ref.delete();
         // console.log(snapshot.docs[0]);
         // deleteDoc(doc(db, 'products', postDetails.url));

         // let imageRef = firebase.storage().refFromURL(postDetails.url);
         // imageRef.delete();


      }).then(() => {
         // console.log(postDetails.url);
         props.setFavLocalRemoveId(postDetails.url);
         navigate('/');
      });
   };

   useEffect(() => {
      const { userId } = postDetails;

      // firebase.firestore().collection('users').where('id', '==', userId).get().then((response) => {
      //    response.forEach(doc => {
      //       setUserDetails(doc.data());
      //       // console.log(doc.data());
      //    });
      // });

      const filter2 = query(colRefUsers, where('id', '==', userId));
      onSnapshot(colRef, filter2, (snapshot) => {
         snapshot.forEach(doc => {
            setUserDetails(doc.data());
            // console.log(doc.data());
         });
      });
   }, [postDetails]);

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
                     <p> Name : {userDetails?.username} </p>
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
