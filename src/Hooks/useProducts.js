import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);
    const size=6;
   useEffect(()=>{
       setLoading(true)
       fetch(`http://localhost:5000/products?size=${size}`)
       .then(res=>res.json())
       .then(data=>{
        setProducts(data)
           setLoading(false)
       })
     
   
   },[])
   return {products,setProducts,loading}
};

export default useProducts;