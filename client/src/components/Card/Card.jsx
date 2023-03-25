import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsId } from '../../Redux/actions/index.js'
import { useParams } from "react-router";

export default function Card() {

    const { id } = useParams();
    const dispatch = useDispatch()
    const productInfoId = useSelector((state) => state.productsID);

    useEffect(() =>{
    dispatch(getAllProductsId(id))
  },[id ,dispatch])


// console.log(productInfoId, 'ididid')
// console.log(productInfoId.sizes?.map(el => el.size));
    return ( 
            <div>
             <div className="containerId">
        <div className="imgBx">
            <img className='imgId'  src={productInfoId.img} alt="Img not found" />
        </div>
        <div className="details">
            <div className="contentId">
                <h2 className='pName'>{productInfoId.name}<br/>
                    <span className='spanId'>{productInfoId.brand}</span>
                </h2>
                <p className='pIds'>
                   {productInfoId.description}
                </p>
                <h4  className="imgBx2" data-brand={productInfoId.model}></h4>
                <p className='pIds'>
                 { productInfoId.numbersizes?.map(el => el.size + '-')   ||  productInfoId.sizes?.map(el => el.size + '-' )  }
                </p>
               
                <h3 className='h3Name'>${productInfoId.price}</h3>
                <button>Buy Now</button>
            </div>
        </div>
    </div>
            </div>

    );
}