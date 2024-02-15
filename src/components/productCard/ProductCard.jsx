import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../../config/redux/reducers/cartSlice';
import Swal from 'sweetalert2';

const ProductCard = ({ title, price, description, image, id }) => {


  // UseNavigate
  const navigate = useNavigate()

  // Navigate to Show Product Details
  const showProductDetails = (id) => {
    navigate(`/products/${id}`)
  }

   // UseSelector
   const selector = useSelector(state => state.cartItems.cartItems)

   // UseDispatch
   const dispatch = useDispatch()

  const productAddToCart = (event) => {
    event.stopPropagation()

    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {

        if (selector.length === 0) {

          // Product Addedd to Redux cart
          dispatch(addToCart({
            title: res.data.title,
            price: res.data.price,
            description: res.data.description,
            image: res.data.image,
            id: res.data.id
          }))

          // Sweet Alert
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product Added to Cart",
            showConfirmButton: false,
            timer: 1500
          });
        }
        else {
          let productAlreadyExist = false

          // Checking Product Exist in Cart or Not
          selector.map((item) => {

            if (item.id === res.data.id) {
              productAlreadyExist = true
            }
          })

          if (productAlreadyExist) {

            // Sweet Alert
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Product Already in Cart",
              showConfirmButton: false,
              timer: 1500
            });
          }
          else {

            // Product Addedd to Redux
            dispatch(addToCart({
              title: res.data.title,
              price: res.data.price,
              description: res.data.description,
              image: res.data.image,
              id: res.data.id
            }))

            // Sweet Alert
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Product Added to Cart",
              showConfirmButton: false,
              timer: 1500
            });
          }

        }

      })
      .catch((err) => {
        console.log(err);
      })
  }


  return (
    <>
      <div onClick={() => showProductDetails(id)} className="card w-72 cursor-pointer shadow-xl bg-gray-700 pt-8 ">
        <figure><img src={image} className='h-[200px] rounded-lg' alt="Shoes" /></figure>

        <div className="card-body">
          <h2 className="card-title"> {title.slice(0, 18)}...</h2>
          <h4 className='font-semibold text-white'>$ {price}</h4>
          <p> {description.slice(0, 50)}... </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={productAddToCart}>Add To Cart</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard