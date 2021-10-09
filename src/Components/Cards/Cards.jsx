import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import Heart from '../../assets/Heart';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';
import './Cards.scss';

const Cards = (props) => {
   const { firebase } = useContext(FirebaseContext);
   const { setPostDetails } = useContext(PostContext);
   const { user } = useContext(AuthContext);


   const [products, setProducts] = useState([]);

   let today = new Date();
   let todayDateString = today.toDateString();
   let yesterday = new Date();
   yesterday.setDate(today.getDate() - 1);
   let yesterdayDateString = yesterday.toDateString();

   const history = useHistory();

   const atDate = (createdDate) => {
      if (createdDate === todayDateString) {
         return 'Today';
      } else if (createdDate === yesterdayDateString) {
         return 'Yesterday';
      } else {
         return createdDate;
      }
   };


   const [favLists, setFavLists] = useState(() => {
      const saved = localStorage.getItem(`OLX_${user.uid}`);
      const initialValue = JSON.parse(saved);
      return (initialValue || "");
   });
   // console.log(favLists[1].name);

   // const favList = (prods) => {
   //    for (let i = 0; i < favLists.length; i++) {
   //       // if (favLists[i].name !== 'dsf') {
   //       // if (prods.name === 'dsf') {
   //       // if (prods.url === favLists[i].url) {
   //       if (favLists[i].url != prods.url) {
   //          // console.log(favLists[i]);
   //          // console.log(prods);
   //          setFavLists([...favLists, {
   //             name: prods.name,
   //             category: prods.category,
   //             price: prods.price,
   //             url: prods.url,
   //             userId: prods.userId,
   //             createdAt: prods.createdAt,
   //             favUserId: user.uid
   //          }]);
   //       }
   //    }
   // };

   // const [arg, setArg] = useState([]);
   // const [pass, setPass] = useState(false);
   // const [count, setCount] = useState(0);
   // console.log(pass);

   // favLists.forEach((favLists) => {
   //    // console.log(favLists);
   //    // y = favLists.name;
   //    if (favLists.name !== arg.name) {
   //       // console.log('kdkdk');
   //       setPass(true);
   //       // setCount(count + 1);
   //    }
   // });

   // console.log(count);


   // // var arr = ["ae90ac1a-64c4-49a7-b588-ae6b69a37d47", "ae90ac1a-64c4-49a7-b588-ae6b69a37d47"];
   // function squash(favLists) {
   //    var tmp = [];
   //    for (var i = 0; i < favLists.length; i++) {
   //       if (tmp.indexOf(favLists[i]) == -1) {
   //          tmp.push(favLists[i]);
   //       }
   //    }
   //    return tmp;
   // }
   // console.log(squash(favLists));

   const favList = (prods) => {
      // setArg(prods);
      // // console.log(prods);
      // for (var i = 0; i < favLists.length; i++) {
      //    // console.log(favLists[i].name);
      //    // setArr(favLists[i].name);
      //    if (prods.name === favLists[i].name) {
      //       // console.log('kdkdk');
      //       setPass(true);
      //       // setCount(count + 1);
      //    }
      // }
      // favLists.forEach((favLists) => {
      //    // console.log(favLists);
      //    // y = favLists.name;


      //    // if (favLists.name !== arg.name) {
      //    //    console.log('kdkdk');
      //    //    // setPass(true);
      //    //    // setCount(count + 1);
      //    // }
      // });

      (
         // !pass &&
         (setFavLists([...favLists, {
            name: prods.name,
            category: prods.category,
            price: prods.price,
            url: prods.url,
            userId: prods.userId,
            createdAt: prods.createdAt,
            favUserId: user.uid
         }])));
      // setPass(false);
   };

   // const favList = (prods) => {
   //    // console.log(prods);
   //    setFavLists([...favLists, {
   //       name: prods.name,
   //       category: prods.category,
   //       price: prods.price,
   //       url: prods.url,
   //       userId: prods.userId,
   //       createdAt: prods.createdAt,
   //       favUserId: user.uid
   //    }]);
   // };
   // var x = [];
   // var y = [];
   // for (let i = 0; i < favLists.length; i++) {
   //    // if (favLists[i].name === 'dsf') {
   //    //    var x = favLists.length;
   //    //    console.log(x);

   //    // }
   //    x = favLists[i].name === 'Creative';
   //    console.log(x.length);
   // }

   // favLists.map((favLists) => {
   //    // console.log(favLists.name);
   //    // y = favLists.name;

   //    if (favLists.name === 'Creative') {
   //       console.log('kdkdk');
   //    }

   // });
   // console.log(y);

   // useEffect(() => {
   //    // firebase.firestore().collection('users').where('id', '==', userId).get().then((response) => {
   //    firebase.firestore().collection('favorites').get().then((snapshot) => {
   //       // 
   //       const allPost = snapshot.docs.map((product) => {
   //          return {
   //             ...product.data(),
   //             id: product.id
   //          };
   //       });
   //       setProducts(allPost);
   //       // console.log(allPost);
   //    });
   // }, []);



   // const [checkUrl, setCheckUrl] = useState();
   // console.log(checkUrl);


   // var foo = (liii) => {
   //    // console.log(liii);
   //    setCheckUrl(liii);
   // };

   // for (let i = 0; i < favLists.length; i++) {
   //    console.log(favLists[i].name);
   // }
   // console.log(favLists);


   const [pass, setPass] = useState();



   useEffect(() => {
      firebase.firestore().collection('products').get().then((snapshot) => {
         const allPost = snapshot.docs.map((product) => {
            return {
               ...product.data(),
               id: product.id
            };
         });
         setProducts(allPost);

         // const index = Math.floor(Math.random() * allPost.length);
         // setState2(allPost);
      });
      // favLists.map((favLists) => {
      //    console.log(favLists.name);

      // });

      // favLists.forEach(element => {
      //    // console.log(element.url);
      //    var lii = element[2];
      //    // localStorage.setItem(`OLX_${user.uid}`, JSON.stringify(favLists));
      //    foo(lii);
      // });

      // for (let i = 0; i < favLists.length; i++) {
      //    if (favLists[i].name !== 'dsf') {
      //       // console.log(favLists[i]);
      //       localStorage.setItem(`OLX_${user.uid}`, JSON.stringify(favLists));

      //    }
      //    // console.log((favLists[i].name === 'Creative') && favLists[i]);
      // }


      // favLists.map((favLists) => {
      //    // console.log(favLists.url);
      //    var urlss = favLists.url;

      //    // setCheckUrl(urlss);


      //    !urlss &&
      // });
      localStorage.setItem(`OLX_${user.uid}`, JSON.stringify(favLists));
      // });
   }, [favLists]);


   // const index = favLists && favLists.findIndex(obj => obj.name === 'Creative');
   // console.log(index);
   // if (index > -1) favLists && favLists.splice((index), 1);


   // const index = Math.floor(Math.random() * response.data.results.length);
   // const indexs = Math.floor(Math.random() * products.length);
   // const getRandomItem = iterable => iterable.get([...iterable.keys()][Math.floor(Math.random() * iterable.size)])
   // const getRandomItem = products => products.get([...products.keys()][Math.floor(Math.random() * products.size)])

   // console.log(products);
   return (
      <div className="cardsParentDiv">
         {
            !props.fav && (products.slice(0, (props.quickMenu ? 3 : (props.fav ? props.noOfItemToLoadFav : props.noOfItemToLoadPost)))
               .map((product, index) => {
                  // products.map((product, index) => {
                  return (
                     <div key={index} className="cardsMap"
                        onClick={() => {
                           setPostDetails(product);
                           history.push('/view');
                        }}>
                        <div className="imgFav">
                           <div className="image">
                              <img src={product.url} alt="" />
                           </div>
                           <div
                              onClick={e => {
                                 e.stopPropagation();
                                 // if (favLists) {
                                 //    // for (let i = 0; i < favLists.length; i++) {
                                 //    //    if (product.name !== favLists[i].name) {
                                 //    //       favList(product);
                                 //    //    }
                                 //    // }
                                 //    favLists.forEach(element => {
                                 //       if (product.name === element.name) {
                                 //          !favList(product);
                                 //       }
                                 //    });

                                 //    // for (let i = 0; i < favLists.length; i++) {
                                 //    //    if (product.name !== favLists[i].name) {
                                 //    //       favList(product);
                                 //    //    }
                                 //    // }
                                 // } else {
                                 //    // favList(product);
                                 // }

                                 // if (x < 1) {

                                 //    favList(product);
                                 // }

                                 // for (var i = 0; i < favLists.length; i++) {
                                 //    // console.log(favLists[i].name);
                                 //    // setArr(favLists[i].name);
                                 //    if ((product.url == favLists[i].url)) {
                                 //       // console.log('kdkdk');
                                 //       setPass(false);
                                 //       // setCount(count + 1);
                                 //    }
                                 //    else if (!(product.url == favLists[i].url)) {
                                 //       setPass(true);
                                 //    }
                                 // }
                                 // pass && favList(product);
                                 // console.log(pass);


                                 const index = favLists && favLists.findIndex(obj => obj.name === product.name);
                                 // console.log(index);
                                 if (index > -1) favLists && favLists.splice((index), 1);


                                 favList(product);

                                 // for (var i = 0; i < favLists.length; i++) {

                                 //    if (favLists.length === 0) {
                                 //       favList(product);
                                 //    } else if (favLists.length > 0) {
                                 //       if (product.name === favLists[i].name) {
                                 //          favList(product);
                                 //       }
                                 //    }
                                 // }



                                 // favList(product);

                                 // }
                              }}
                              className="favorite" >
                              <Heart fav={props.fav} product={product} />
                           </div>
                        </div>
                        <div className="content">
                           <p className="price">&#x20B9; {product.price} </p>
                           <p className="name">{product.name}</p>
                           <p className="category">{product.category}</p>
                        </div>
                        <div className="date">
                           <span>
                              {atDate(product.createdAt)}
                           </span>
                           {/* <span>{product.userId}</span> */}
                        </div>
                     </div>
                  );
               }))
         }
         {
            // (props.fav && (
            //    // products.slice(0, (props.quickMenu ? 3 : (props.fav ? props.noOfItemToLoadFav : props.noOfItemToLoadPost)))
            //    // .map((product, index) => {
            //    favLists.map((favLists, index) => {
            //       return (
            //          <div key={index} className="cardsMap"
            //          // onClick={() => {
            //          //    setPostDetails(product);
            //          //    history.push('/view');
            //          // }}
            //          >
            //             <div className="imgFav">
            //                <div className="image">
            //                   <img src={favLists.url} alt="" />
            //                </div>
            //                <div
            //                   // onClick={e => {
            //                   //    e.stopPropagation();
            //                   //    favList(product);
            //                   // }}
            //                   className="favorite" >
            //                   {/* <Heart fav={props.fav} product={product} /> */}
            //                   {/* <Heart  product={product} /> */}
            //                </div>
            //             </div>
            //             <div className="content">
            //                <p className="price">&#x20B9; {favLists.price} </p>
            //                <p className="name">{favLists.name}</p>
            //                {/* <p className="category">{favLists.category}</p> */}
            //             </div>
            //             <div className="date">
            //                <span>
            //                   {/* {atDate(favLists.createdAt)} */}
            //                </span>
            //                {/* <span>{product.userId}</span> */}
            //             </div>
            //          </div>
            //       );
            //    })))
         }
      </div >
   );
};

const mapStateToProps = (state) => {
   return {
      noOfItemToLoadPost: state.post.noOfItemToLoadPost,
      noOfItemToLoadFav: state.favorite.noOfItemToLoadFav
   };
};

export default connect(mapStateToProps)(Cards);
