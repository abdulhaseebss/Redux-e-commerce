import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCartItem } from '../../config/redux/reducers/cartSlice'
import Swal from 'sweetalert2'

const CartProduct = () => {

    // UseSelector
    const selector = useSelector(state => state.cartItems.cartItems)

    // UseDispatch
    const dispatch = useDispatch()

    // Delete Items From Cart
    const dltCartItem = (index) => {
        console.log(index);
        dispatch(removeCartItem({
            index: index
        }))
    }

    function checOut() {
        Swal.fire({
            icon: "error",
            title: "Bhai maal khatam ho gaya",
          });
    }

    return (
        <>
        <div className='flex justify-center'>  
            <div className='mt-3 p-5 w-[90%]'>
                <h1 className='text-2xl font-bold'> Your Items </h1>

                {selector.length > 0 ? selector.map((item, index) => {
                    return <div key={item.id} className="flex w-full mt-5 p-5 items-center bg-gray-700 shadow-xl rounded-lg">
                        <div>
                            <figure><img src={item.image} className='w-[100px]' alt="Shoes" /></figure>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title"> {item.title}</h2>
                            <h4 className='font-semibold text-white'>$ {item.price} </h4>
                            <p> {item.description}</p>
                        </div>

                        <div>
                            <button className=' text-white p-2 w-32 rounded-lg bg-red-500 hover:bg-red-700 transition-all' onClick={() => dltCartItem(index)}> Delete </button>
                        </div>

                    </div >
                    
                }) : <h1 className='mt-5 bg-gray-700 p-20 rounded-lg text-white'> No Items in Cart </h1>}
                <button className='text-white p-2 w-32 rounded-lg bg-blue-500 hover:bg-blue-700 transition-all mt-8' onClick={checOut}>Check Out</button>
            </div>
            </div>

        </>
    )
}

export default CartProduct