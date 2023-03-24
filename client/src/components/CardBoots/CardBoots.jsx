import React from 'react'
import './CardBoots.css'
import { useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import  { getAllProducts } from '../../Redux/actions/index.js'

const CardBoots = () => {

	const dispatch = useDispatch()
	const productsBoard = useSelector((state) => state.products);
	// console.log(productsBoard, 'hssahsh')

  useEffect(() =>{
    dispatch(getAllProducts())

  },[dispatch])

	return (
		<div>
		 {productsBoard?.map((el) => el.category === 'boots' ? 

		 	<div class="container page-wrapper">
  <div class="page-inner">
    <div class="row">
      <div class="el-wrapper">
        <div class="box-up">
          <img class="img" src={el.img} alt="" />
          <div class="img-info">
            <div class="info-inner">
              <span class="p-name">{el.name}</span>
              <span class="p-company">{el.brand}</span>
            </div>
          </div>
        </div>

        
          <div class="h-bg">
            <div class="h-bg-inner"></div>
          </div>

          
            <span class="price">{el.price}</span>
           
         
       
      </div>
    </div>
  </div>
</div>

		 	: null)}
		</div>
	)
}



export default CardBoots