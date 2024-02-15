import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/productCard/ProductCard'

const Home = () => {
  const [allProducts, setAllProducts] = useState([])

  // UseEffect
  useEffect(() => {

    axios.get('https://fakestoreapi.com/products?')
      .then((res) => {
        setAllProducts(res.data);

      })
      .catch((rej) => {
        console.log(rej);
      })

  }, [])


  return (
    <>


      <div className='flex flex-wrap justify-center gap-5 mt-10 p-5'>
        {allProducts.length > 0 ? allProducts.map((item, index) => {

          return <ProductCard key={item.id} image={item.image} title={item.title} price={item.price} description={item.description} id={item.id} />

        }) : <h1> Loading... </h1>}
      </div>



    </>
  )
}

export default Home