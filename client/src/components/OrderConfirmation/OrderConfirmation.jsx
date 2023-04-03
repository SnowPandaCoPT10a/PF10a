import './OrderConfirmation.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

function OrderConfirmation() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const product = JSON.parse(searchParams.get('products'));
    console.log(product[0])
    
    let endProduct = null;

    if (product.length >= 1) {
        const separator = " | ";
    const descriptions = product.reduce((accumulator, currentProduct) => {
  return accumulator + currentProduct.description + separator;
}, "");
        endProduct = {
            id: product[0].id,
            title: "Products",
            price: product.reduce((total, product) => total + product.price, 0),
            description: descriptions.slice(0, -separator.length),
            category_id: product.reduce((acc, cur) => {
                return acc + (acc !== '' ? ', ' : '') + cur.category;
              }, ''),
            quantity: 1,
            picture_url: "https://res.cloudinary.com/dberwyxyq/image/upload/v1679686192/SnowPandaCO/FrontEnd/sin_fondo_2085_x_1251_px_am8fvp.png",
        }
    }

    return (
       
        <div className='orderConfir'>
            <div>Order Confirmation</div>
            <br></br>
            <p>Thanks for placing an order.-</p>
            <button 
            className='buttonorder' 
            onClick={()=> {
                axios
                .post('http://localhost:3001/payment', endProduct)
                .then(
                    (res)=>
                    (window.location.href=res.data.response.body.init_point))
            }}>Proceed with payment</button>
        </div>
        
    )
}

export default OrderConfirmation

