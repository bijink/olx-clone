import React, { useContext, useEffect, useState } from 'react';
import './View.scss';
import { useNavigate } from 'react-router';
import { collection, deleteDoc, doc, onSnapshot, query, where } from 'firebase/firestore';
import { db, storage } from '../../Firebase/Config';
import { useSearchParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { deleteObject, ref } from 'firebase/storage';


const View = () => {
   const navigate = useNavigate();

   const { user } = useContext(AuthContext);

   const [searchParams] = useSearchParams();
   const productIdParam = searchParams.get('product');

   const [productDetails, setProductDetails] = useState([]);
   const [userDetails, setUserDetails] = useState([]);


   const handlePostDelete = () => {
      const imageRef = ref(storage, `images/${user.uid}/PRODUCT_IMG:${productDetails.productID}`);
      deleteDoc(doc(db, 'products', productDetails.productID)).then(() => deleteObject(imageRef)).then(() => {
         navigate('/');
      });
   };


   useEffect(() => {
      const query1 = query(collection(db, 'products'), where('productID', '==', productIdParam));
      onSnapshot(query1, (snapshot) => {
         snapshot.forEach(doc => {
            // console.log('product::', doc.data());
            setProductDetails(doc.data());
            // console.log('product::', doc.id);
            // setProductID(doc.id);

            const query2 = query(collection(db, 'users'), where('id', '==', (doc.data().userId)));
            onSnapshot(query2, (snapshot) => {
               snapshot.forEach(doc => {
                  // console.log('userDetails::', doc.data());
                  setUserDetails(doc.data());
               });
            });
         });
      });
   }, [productIdParam]);


   return (
      <div className="viewParentDiv">
         <div className="topSection">
            <div className="imageShowDiv">
               <img src={productDetails.url} alt="product" />
            </div>
            <div className="rightSection">
               <h4>Seller Details</h4>
               <div className="contactDetails">
                  <p>Name : {userDetails.username}</p>
                  <p>Phone : {userDetails.phone}</p>
               </div>
               {(user?.uid === productDetails.userId) && (
                  <button className="deleteBtn" onClick={() => {
                     handlePostDelete();
                  }}>Remove Post</button>
               )}
            </div>
         </div>
         <div className="bottomSection">
            <h4>Product Details</h4>
            <div className="productDetails">
               <p>&#x20B9; {productDetails.price} </p>
               <h1>{productDetails.name}</h1>
               <p>{productDetails.category}</p>
               <span>{productDetails.createdAt}</span>
            </div>
         </div>
      </div>
   );
};

export default View;
