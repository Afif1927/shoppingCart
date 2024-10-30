import React, { useEffect, useState } from 'react'
import products from '../assets/product'
import { useDispatch } from 'react-redux';
import {changeQuantity} from '../features/cart/cartSlice'

const CartItem = (props) => {
  const {productID, quantity} = props.data; 
  const [detail, setDetail] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
   const findDetail = products.filter(product=> product.id === productID)[0];
   setDetail(findDetail)
  }, [productID])

  const handleMinusQuantity = () => {
    dispatch(changeQuantity({
        productID: productID,
        quantity: quantity - 1
    }))
  }
  const handlePlusQuantity = () => {
    dispatch(changeQuantity({
        productID: productID,
        quantity: quantity + 1
    }))
  }

    return (
    <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-red-500 gap-3 rounded-md'>
        <img src={detail.image} alt='' className='w-12'/>
        <h3>{detail.name}</h3>
        <p>${detail.price * quantity}</p>
        <div className='w-20 flex justify-between gap-2'>
          <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600 flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
          <span>{quantity}</span>
          <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600 flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
        </div>
    </div>
  )
}

export default CartItem

