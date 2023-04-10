import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { AiFillEye ,AiOutlineEyeInvisible} from 'react-icons/ai';
import './Manage_Products.css'
import { getAllProducts ,setBannedProduct,setFeaturedProduct} from "../../Redux/actions/index.js";


const FormCreatePoke = ({input, setInput, objInput,setCreateActive,createActive}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const allProducts = useSelector(e => e.allProducts);

  const [errors,setErrors] = useState({})


  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);


  const handleBannedProduct = (e) => {
    console.log(e, "salio el Ban");
    dispatch(setBannedProduct(e))
    navigate(0)
  }

  const handleFeaturedProduct = (e) =>{
    dispatch(setFeaturedProduct())
    navigate(0)
  }



  const handleSubmit = (e) => {
    e.preventDefault()

  }
console.log(allProducts, "all")

 try{

  return (
    
<div className="dropdown ms-3">

{allProducts? allProducts?.sort((a, b) => a.productsID - b.productsID).map(e=> 
  <main className="container_manager">
  <section className={e.status ? "card_" : "mariela"}>
    <div className="product-image">
      <img className="img_" src={e.img} alt="OFF-white Red Edition" draggable="false" />
    </div>
    <div className="product-info">
      <h2>{e.name}</h2>
      <p>Category: {e.category}</p>
      <p>Brand: {e.brand.brandName}</p>
      <p>{e.productsID}</p>
      
      <div className="price">${e.price}</div>
    </div>
    <div className="btn_">
      <button className="buy-btn">Edit Now</button>


      <button className={!e.featuredProduct ? "fav" : "featured"}  onClick={()=>handleFeaturedProduct(e.productsID)}>
        <svg className="svg" id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
        </svg>
      </button>


     {e.status?
        <button className="fav"  onClick={()=>handleBannedProduct(e.productsID)} >
        <AiFillEye  className="svg_eyes" color="#08c46b" />
        </button>
        :
        <button className="fav"  onClick={()=>handleBannedProduct(e.productsID)} >
        <AiOutlineEyeInvisible  className="svg_eyes_disabled" color="#08c46b" />
        </button>
         }
   
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