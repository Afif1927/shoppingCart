import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './cartItem'
import {toggleStatusTab} from '../features/cart/cartSlice' 

const CartTab = () => {

  const carts = useSelector(store=> store.cart.items)
  const statusTab = useSelector(store=> store.cart.statusTab)
  const dispatch = useDispatch()
  const closeStatusTab = () => {
    dispatch(toggleStatusTab())
  }

  return (
    <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] transform ${statusTab === false? "translate-x-full" : ""} transform transition duration-500`}>
      <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
      <div className='p-5'>
        {carts.map((item,key) => <CartItem key={key} data={item}/>)}
      </div>
      <div className='grid grid-cols-2'>
        <button className='bg-black text-white' onClick={closeStatusTab}>Close</button>
        <button className='bg-amber-600 text-white'>Checkout</button>
      </div>
    </div>
  )
}

export default CartTab
