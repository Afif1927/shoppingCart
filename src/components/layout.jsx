import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import CartTab from './cartTab'
import { useSelector } from 'react-redux'


const Layout = () => {

  const statusTab = useSelector(store=> store.cart.statusTab)

  return (
    <div className='bg-zinc-200'>
      <main className={`w-[1200px] max-w-full m-auto p-5 trans transform transition-transform duration-500 
        ${statusTab === false? "" : "-translate-x-56"}`}>
        <Header/>
        <Outlet/>
      </main>
       <CartTab/>
    </div>
  )
} 

export default Layout