import React, { Fragment, useContext, useState } from 'react';
import './Create.scss';
import Header from '../Header/Header';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
// import { LoadContext } from '../../Store/LoadContext';
// import LoadingBar from 'react-top-loading-bar';
import { addDoc, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { colRef, db, storage } from '../../Firebase/Config';
import { getDownloadURL, ref, uploadBytes, uploadString } from 'firebase/storage';

const Create = () => {
   const navigate = useNavigate();

   // const { firebase } = useContext(FirebaseContext);
   const { user } = useContext(AuthContext);
   // const { loading, setLoading } = useContext(LoadContext);

   const [name, setName] = useState('');
   const [category, setCategory] = useState('');
   const [price, setPrice] = useState('');
   const [image, setImage] = useState(null);
   // console.log(image);
   const date = new Date();
   // const [loading, setLoading] = useState(0);

   const handleSubmit = () => {
      if ((name !== '') && (category !== '') && (price !== '') && (image !== null)) {
         // setLoading(98);

         const imageRef = ref(storage, `/images/${user.uid}/PRODUCT_IMG:${image.name}`);
         uploadBytes(imageRef, image).then((snapshot) => {
            // uploadString(imageRef, image).then((snapshot) => {
            getDownloadURL(imageRef).then(url => {
               addDoc(colRef, {
                  name,
                  category,
                  price,
                  url,
                  userId: user.uid,
                  createdDate: date.toDateString(),
                  createdTime: serverTimestamp(),
               }).then(() => {
                  navigate('/');
                  // setLoading(0);
               });
            });
         });
      } else {
         alert('Please fill all fields');
      }
   };

   return (
      <Fragment>
         {/* <LoadingBar
            color='#00e8dc'
            loaderSpeed='10000'
            height='3px'
            shadow={false}
            progress={loading}
         /> */}
         <Header />
         <div className="parentDivCreate">
            <h1>POST YOUR AD</h1>
            <div className="parentDetailDiv">
               <div className="addDetails">
                  <label htmlFor="fname">Name</label>
                  <br />
                  <input
                     className="input"
                     type="text"
                     // id="fname"
                     // defaultValue="John"
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
                     // id="fname"
                     // defaultValue="John"
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
                        // id="fname"
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
            <button onClick={handleSubmit} className="uploadBtn">Post now</button>
         </div>
      </Fragment >
   );
};

export default Create;
