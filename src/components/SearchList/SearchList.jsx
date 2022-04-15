import { collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../config/firebase.config';
import './SearchList.scss';


const SearchList = ({ input, setIsMouseHover }) => {
   const navigate = useNavigate();

   const [products, setProducts] = useState([]);


   //create a new array by filtering the original array
   const filteredProducts = products.filter((obj) => {
      //if no input then return the original
      if (input === '') {
         return obj.name;
      }
      //return the item which contains the user input
      else {
         return obj.name.toLowerCase().includes(input);
      }
   });


   useEffect(() => {
      const queryOrder = query(collection(db, 'products'));
      onSnapshot(queryOrder, (snapshot) => {
         const allPost = snapshot.docs.map((product) => {
            return {
               ...product.data(),
               id: product.id
            };
         });
         setProducts(allPost);
      });
   }, []);


   return (
      <div
         className="searchList"
         onMouseEnter={() => setIsMouseHover(true)}
         onMouseLeave={() => setIsMouseHover(false)}
      >
         <div className='searchList__total' >
            {!(filteredProducts.length === 0) ? (
               <>
                  <p className='searchList__total--text'>No.of results found : </p>
                  <p className='searchList__total--number'>{filteredProducts.length}</p>
               </>
            ) : (
               <p className='searchList__total--noMatch'>No results found !</p>
            )}
         </div>
         <div className="searchList__item">
            {filteredProducts.map(product => (
               <div
                  key={product.id}
                  className='product'
                  onClick={() => {
                     navigate(`/view?product=${product.productID}`);
                  }}
               >
                  <div className='product__img'>
                     <img src={product.url} alt="product" />
                  </div>
                  <div className='product__text'>
                     <p className='product__text--name'>{product.name}</p>
                     <p className="product__text--category">{product.category}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default SearchList;
