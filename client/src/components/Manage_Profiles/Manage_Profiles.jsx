import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { IoClose } from 'react-icons/io5';
import './Manage_Profiles.css'
import { getAllProducts } from "../../Redux/actions/index.js";


const FormCreatePoke = ({input, setInput, objInput,setCreateActive,createActive}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const allProducts = useSelector(e => e.allProducts);

  const [errors,setErrors] = useState({})


  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);


  const handleChange = (e) => {
    
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }



 console.log(allProducts, "TARANTARANNN")

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postPoke(input))
    setInput(objInput)
    navigate('/Home')
    setCreateActive(!createActive)
    navigate(0)
  }
 try{

  return (
    
<div class="dropdown ms-3">

{allProducts? allProducts?.map(e=> <main class="container_manager">
  <section class="card">
    <div class="product-image">
      <img class="img_" src={e.img} alt="OFF-white Red Edition" draggable="false" />
    </div>
    <div class="product-info">
      <h2>{e.name}</h2>
      <p>Category: {e.category}</p>
      <p>Brand: {e.brand.brandName}</p>
      <div class="price">${e.price}</div>
    </div>
    <div class="btn">
      <button class="buy-btn">Edit Now</button>
      <button class="fav">
        <svg class="svg" id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
        </svg>
      </button>
      
      <button class="fav">
      <svg viewBox="0 0 100 100" class="svg" id="i-star" xmlns="http://www.w3.org/2000/svg" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
  <circle cx="50" cy="50" r="40" stroke="#000" stroke-width="10" fill="none" />
  <line x1="20" y1="20" x2="80" y2="80" stroke="#000" stroke-width="10" />
</svg>
      </button>
    </div>
  </section>
</main>) : (<div>Loading ... </div>)}
</div>
)
 } catch (err) {
  console.log(err)
 }
      
}

export default FormCreatePoke