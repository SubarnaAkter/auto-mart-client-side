import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);
   
   useEffect(()=>{
       setLoading(true)
       fetch('https://pure-springs-40061.herokuapp.com/products')
       .then(res=>res.json())
       .then(data=>{
        setProducts(data)
           setLoading(false)
       })
     
   
   },[])
   return {products,setProducts,loading}
};

export default useProducts;