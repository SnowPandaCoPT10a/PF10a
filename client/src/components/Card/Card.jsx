import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsId } from '../../Redux/actions/index.js'
import { useParams } from "react-router";

export default function Card({oneProducts, setOneProducts, allProducts, setAllProducts, priceTotal, setPriceTotal, countProducts, setCountProducts }) {

  const { id } = useParams();
  const dispatch = useDispatch()
  const productInfoId = useSelector((state) => state.productsID);
  const [selectedSize, setSelectedSize] = useState('');


  useEffect(() => {
    dispatch(getAllProductsId(id))
  }, [id, dispatch])

function handleOnAddProduct(product) {

  if (allProducts.find((el) => el.productsID === product.productsID && el.size === product.size)) {
    
    const products = allProducts.map((el) =>
      el.productsID === product.productsID && el.size === product.size
        ? {
          ...el,
          price: Number(el.price) + Number(product.price),
          sizes: el.sizes?.map((size) =>
            size.size === product.size
              ? {
                ...size,
                stock: Number(size.stock - 1),
                quantity: Number(size.quantity + 1),
              }
              : size
          ),
          numbersizes: el.numbersizes?.map((size) =>
            size.size === product.size
              ? {
                ...size,
                stock: Number(size.stock - 1),
                quantity: Number(size.quantity + 1),
              }
              : size
          ),
          boardsizes: el.boardsizes?.map((size) =>
            size.size === 'one size'
              ? {
                ...size,
                stock: Number(size.stock - 1),
                quantity: Number(size.quantity + 1),
              }
              : size
          )
        }
        : el
    );
    setPriceTotal(priceTotal + product.price);
    setCountProducts(countProducts + 1);
    setAllProducts([...products]);
    setOneProducts([...products]);
  }  else {
    
    let newProduct = {
      ...product,
      sizes: product.sizes?.map((el) => ({ ...el, stock: el.size === product.size ? Number( el.stock - 1 ) : null })),
      numbersizes: product.numbersizes?.map((el) => ({ ...el, stock: el.size === product.size ?  Number(el.stock - 1) : null })),
      boardsizes: product.boardsizes?.map((el) => ({ ...el, stock: el.size === product.size ? Number(el.stock - 1) : null })),
    };
    if (!newProduct.sizes && !newProduct.numbersizes && !newProduct.boardsizes) {
       
      newProduct = {
        ...newProduct,
        stock: Number(newProduct.stock - 1),
      };
    }
    setPriceTotal(priceTotal + product.price);
    setCountProducts(countProducts + 1);
    setAllProducts([...allProducts, newProduct]);
    }
    setOneProducts([...allProducts, product]);

}


  function handleChange(event) {
    const selectedSize = event.target.value;
    setSelectedSize((prevProduct) => ({
      ...prevProduct,
      size: selectedSize,
    }));
  }

  // console.log(allProducts, 'holi')
  // console.log(productInfoId, 'ididid')
  // console.log(productInfoId.sizes?.map(el => el.size));
  return (
    <div className="cardComponent">
      {productInfoId ? (
        <div className="containerId">
          <div className="imgBx">
            <img className='imgId' src={productInfoId.img} alt="Img not found" />
          </div>
          <div className="details">
            <div className="contentId">
              <h2 className="pName">
                {productInfoId.name}
                <br />
              </h2>
              <p className="pIds">{productInfoId.brand?.brandName}</p>
              <p className="pIds">{productInfoId.activity}</p>
              <p className="pIds">{productInfoId?.description}</p>
              <p className="pIds">{productInfoId.material}</p>


              {/*<h4  className="imgBx2" data-brand={productInfoId.model}></h4>*/}

              {/* <p className='pIds'>*/}
{productInfoId.numbersizes && (
                productInfoId.numbersizes?.map((el) => (
                  <button
                    value={el.size}
                    onClick={() => handleOnAddProduct({ ...productInfoId, size: el.size })}
                    key={el.size}
                  >
                    {el.size}
                  </button>
                ))

              )  || (
                productInfoId.sizes?.map((el) => (
                  <button
                    value={el.size}
                    onClick={() => handleOnAddProduct({ ...productInfoId, size: el.size })}
                    key={el.size}
                  >
                    {el.size}
                  </button>
                ))
              ) 
              /* || (
                productInfoId.boardsizes?.map((el) => (
                  <button
                    value={el.size}
                    onClick={() => handleOnAddProduct({ ...productInfoId, size: el.size })}
                    key={el.size}
                  >
                    {el.size}
                  </button>
                ))
              ) */
              }


              <h3 className='h3Name'>${productInfoId.price}</h3>
              <button onClick={((e) => handleOnAddProduct(productInfoId))} >Buy Now</button>
            </div>
          </div>
          <Link to='/Shop'>
            <button className="buttonback">Back to shop</button>
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>

  );
}