import React from 'react'
import { Link } from 'react-router-dom'
import IconCart from '../assets/images/iconCart.png'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'


const ProductCart = (props) => {
  
  const carts = useSelector(store => store.cart.items);
  console.log(carts)
  const {id,name,price,image,slug} =  props.data;

  const dispatch = useDispatch()  
  const handleAddToCart = () => {  
    dispatch(addToCart({
      productID: id,
      quantity: 1
    }))
  }
  return (
    <div className='bg-white p-5 rounded-xl shadow-xl'>
       <Link to={slug}>
        <img src={image} alt='' className='w-full h-80 object-cover object-top drop-shadow-[0_60px_30px_#0007]'/>
       </Link>
       <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
       <div className='flex justify-between items-center'>
        <p className='text-lg text-center font-medium'>${price}</p>
        <button className='bg-gray-200 p-2 rounded-md text-sm flex gap-2 hover:bg-gray-400' onClick={handleAddToCart}>
          <img src={IconCart} className='w-5'/>
          Add To Cart</button>
       </div>
    </div>
  )
}

export default ProductCart
