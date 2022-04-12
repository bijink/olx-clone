import React, { Fragment, useContext, useState } from 'react';
import './Create.scss';
import Header from '../Header/Header';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../Firebase/Config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';


const Create = () => {
   const navigate = useNavigate();

   const { user } = useContext(AuthContext);

   const [name, setName] = useState('');
   const [category, setCategory] = useState('');
   const [price, setPrice] = useState('');
   const [image, setImage] = useState(null);
   const [loading, setLoading] = useState(false);

   const date = new Date();


   const handleSubmit = () => {
      if (((name && category && price) !== '') && (image !== null)) {
         setLoading(true);

         addDoc(collection(db, 'products'), {
            name,
            imgTitle: image.name,
            category,
            price,
            userId: user.uid,
            createdDate: date.toDateString(),
            createdTime: serverTimestamp(),
         }).then((res) => {
            // console.log('id::', res.id);
            const imageRef = ref(storage, `/images/${user.uid}/PRODUCT_IMG:${res.id}`);
            // uploadString(imageRef, image).then((snapshot) => {
            uploadBytes(imageRef, image).then((snapshot) => {
               getDownloadURL(imageRef).then(url => {
                  updateDoc(doc(db, 'products', res.id), {
                     url,
                     productID: res.id,
                  }).then(() => {
                     setLoading(false);
                     navigate('/');
                  });
               });
            });
         });
      } else {
         alert('Please fill all fields');
      }
   };


   return (
      <Fragment>
         <Header />
         <div className="parentDivCreate">
            <h1>POST YOUR PRODUCT</h1>
            <div className="parentDetailDiv">
               <div className="addDetails">
                  <label htmlFor="fname">Name</label>
                  <br />
                  <input
                     className="input"
                     type="text"
                     name="name"
                     value={name}
                     onChange={e => setName(e.target.value)}
                  />
                  <br />
                  <label htmlFor="fname">Category</label>
                  <br />
                  <input
                     className="input"
                     type="text"
                     name="category"
                     value={category}
                     onChange={e => setCategory(e.target.value)}
                  />
                  <br />
                  <label htmlFor="fname">Price</label>
                  <br />
                  <div className="priceDiv">
                     <h1>&#x20B9;</h1>
                     <input
                        className="inputPrice"
                        type="number"
                        name="Price"
                        value={price}
                        onWheel={e => e.target.blur()}
                        onChange={e => setPrice(e.target.value)}
                     />
                  </div>
                  <br />
                  <br />
               </div>
               <div className="addImg">
                  <div className="imgBorder">
                     <label htmlFor="upload-button">
                        {
                           image ?
                              <>
                                 <img src={image ? URL.createObjectURL(image) : ''} alt="" />
                              </>
                              :
                              <div>
                                 <i className="fas fa-file-image"></i>
                                 <p>Add Photo</p>
                              </div>
                        }
                     </label>
                     <input id="upload-button" style={{ display: "none" }} onChange={e => setImage(e.target.files[0])} type="file" />
                  </div>
                  {image && <i onClick={() => setImage(null)} className="fas fa-times closeImg"></i>}
               </div>
            </div>
            <button disabled={loading} onClick={handleSubmit} className="uploadBtn">{
               !loading ? 'Post now' : `Posting...`
            }</button>
         </div>
      </Fragment >
   );
};

export default Create;
