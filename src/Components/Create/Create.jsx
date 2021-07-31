import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../Store/Context';
import { useHistory } from 'react-router-dom';
import { LoadContext } from '../../Store/LoadContext';
import LoadingBar from 'react-top-loading-bar';

const Create = () => {

   const [name, setName] = useState('');
   const [category, setCategory] = useState('');
   const [price, setPrice] = useState('');
   const [image, setImage] = useState(null);
   const { firebase } = useContext(FirebaseContext);
   const { user } = useContext(AuthContext);
   const history = useHistory();
   const date = new Date();
   const { loading, setLoading } = useContext(LoadContext);
   // const [loading, setLoading] = useState(0);


   const handleSubmit = () => {
      setLoading(99.999);
      firebase.storage().ref(`/images/${image.name}`).put(image).then(({ ref }) => {
         ref.getDownloadURL().then(url => {
            // console.log(url);

            firebase.firestore().collection('products').add({
               name,
               category,
               price,
               url,
               userId: user.uid,
               createdAt: date.toDateString()
            }).then(() => {
               history.push('/');
               setLoading(0);
            });
         });
      });
   };

   return (

      <Fragment>
         <LoadingBar
            color='#00e8dc'
            loaderSpeed='9000'
            height='3px'
            shadow={false}
            progress={loading}
         // onLoaderFinished={() => setLoading(100)}
         />
         <Header />
         <card>
            <div className="centerDiv">
               <label htmlFor="fname">Name</label>
               <br />
               <input
                  className="input"
                  type="text"
                  id="fname"
                  name="Name"
                  defaultValue="John"
                  value={name}
                  onChange={e => setName(e.target.value)}
               />
               <br />
               <label htmlFor="fname">Category</label>
               <br />
               <input
                  className="input"
                  type="text"
                  id="fname"
                  name="category"
                  defaultValue="John"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
               />
               <br />
               <label htmlFor="fname">Price</label>
               <br />
               <input
                  className="input"
                  type="number"
                  id="fname"
                  name="Price"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
               />
               <br />
               <br />
               <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
               <br />
               <input onChange={e => setImage(e.target.files[0])} type="file" />
               <br />
               <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
            </div>
         </card>
      </Fragment>
   );
};

export default Create;
