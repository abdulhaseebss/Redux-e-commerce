import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from '../../../screens/home/Home'
import Cart from '../../../screens/cart/Cart'
import Navbar from '../../../components/Navbar/Navbar'
import SingleProduct from '../../../screens/singleProduct/SingleProduct'

const RouterConfig = () => {

    // UseSelector
    const cart = useSelector(state => state.cartItems.cartItems);

    return (
        <BrowserRouter> 

            <Navbar items={cart.length} />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='products/:id' element={<SingleProduct />} />
                <Route path='cart' element={<Cart />} />

            </Routes>
        </BrowserRouter>
    )
}

export default RouterConfig