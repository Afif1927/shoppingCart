import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconCart from '../assets/images/iconCart.png'
import { useDispatch, useSelector } from "react-redux";
import {toggleStatusTab} from '../features/cart/cartSlice' 

const Header = () => {
  const carts = useSelector(store=> store.cart.items)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const dispatch = useDispatch();  
  useEffect(() => {
  let total = 0;
  carts.forEach(items => total += items.quantity)
  setTotalQuantity(total)   
  }, [carts])
  const openStatusTab = () => {
    dispatch(toggleStatusTab())
  }
  
  return <header className="flex justify-between items-center mb-5">
    <Link to="/" className="text-xl font-semibold">Home.</Link>
    <div className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative cursor-pointer" onClick={openStatusTab}>
    <img src={IconCart} alt="" className="w-6"/>
    <span className="absolute top-2/3 right-1/2 bg-red-500 text-white w-5 h-5 rounded-full flex justify-center items-center">{totalQuantity}</span>
    </div>
  
  </header>;
};

export default Header;
