import React from "react";
import products from '../assets/product'
import ProductCart from "../components/productCart";

const Home = () => {
  return <div> 
    <h1 className="text-3xl my-5">List Products</h1>
     <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
       {products.map((product,index) => 
        <ProductCart key={index} data={product}/>
       
      )}
     </div>
   </div>;
};

export default Home;
