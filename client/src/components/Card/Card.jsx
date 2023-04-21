import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsId, getAllReviews } from "../../Redux/actions/index.js";
import { useParams } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import Reviews from "../Reviews/Reviews";

export default function Card({
  oneProducts,
  setOneProducts,
  allProducts,
  setAllProducts,
  priceTotal,
  setPriceTotal,
  countProducts,
  setCountProducts,
}) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productInfoId = useSelector((state) => state.productsID);
  const review = useSelector((state) => state.allReviews);
  const [selectedSize, setSelectedSize] = useState("");
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  // try {

  //   var productReview = review.map((e) => <Reviews key={i} e={e} />);
  // } catch (error) {
  //   console.log(error);
  // }

  useEffect(() => {
    dispatch(getAllProductsId(id));
    dispatch(getAllReviews());
    const storedProduct = window.localStorage.getItem("productscart");
    const storedPriceTotal = window.localStorage.getItem("totalprices");
    const storedCountProducts = window.localStorage.getItem("countproducts");
    if (storedProduct) {
      setAllProducts(JSON.parse(storedProduct));
    }
    if (storedPriceTotal) {
      setPriceTotal(Number(storedPriceTotal));
    }
    if (storedCountProducts) {
      setCountProducts(Number(storedCountProducts));
    }
  }, [id, dispatch]);

  function handleOnAddProduct(product) {
    if (!isAuthenticated) {
      Swal.fire({
        icon: "warning",
        title: "You are not logged",
        text: "you need to log in to be able to buy",
      });
      loginWithRedirect();
      return;
    }

    if (
      allProducts.find(
        (el) => el.productsID === product.productsID && el.size === product.size
      )
    ) {
      const products = allProducts.map((el) =>
        el.productsID === product.productsID && el.size === product.size
          ? {
              ...el,
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
                size.size === "one size"
                  ? {
                      ...size,
                      stock: Number(size.stock - 1),
                      quantity: Number(size.quantity + 1),
                    }
                  : size
              ),
            }
          : el
      );
      setPriceTotal(priceTotal + product.price);
      setCountProducts(countProducts + 1);
      setAllProducts([...products]);
      setOneProducts([...products]);
    } else {
      let newProduct = {
        ...product,
        sizes: product.sizes?.map((el) => ({
          ...el,
          stock: el.size === product.size ? Number(el.stock - 1) : null,
        })),
        numbersizes: product.numbersizes?.map((el) => ({
          ...el,
          stock: el.size === product.size ? Number(el.stock - 1) : null,
        })),
        boardsizes: product.boardsizes?.map((el) => ({
          ...el,
          stock: el.size === product.size ? Number(el.stock - 1) : null,
        })),
      };
      if (
        !newProduct.sizes &&
        !newProduct.numbersizes &&
        !newProduct.boardsizes
      ) {
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

    Swal.fire({
      icon: "success",
      title: "Done",
      text: "Added to shopping cart successfully",
    });
  }

  window.localStorage.setItem("productscart", JSON.stringify(allProducts));
  window.localStorage.setItem("totalprices", JSON.stringify(priceTotal));
  window.localStorage.setItem("countproducts", JSON.stringify(countProducts));

  function handleChange(event) {
    const selectedSize = event.target.value;
    setSelectedSize((prevProduct) => ({
      ...prevProduct,
      size: selectedSize,
    }));
  }

  return (
    <div className="cardComponent">
      <div className="container ">
        {productInfoId ? (
          <div>
            <div className="id">
              <div className="imgBx">
                <img
                  className="imgId"
                  src={productInfoId.img}
                  alt="Img not found"
                />
              </div>
              <div className="details">
                <div className="contentId">
                  <h2 className="pName">
                    {productInfoId.name}
                    <br />
                  </h2>
                  <br></br>
                  <p className="pIds">
                    Brand:{" "}
                    {productInfoId.brand?.brandName
                      ? productInfoId.brand?.brandName
                      : productInfoId.brand}
                  </p>
                  <p className="pIds">Best for: {productInfoId.activity}</p>
                  <p className="pIds">
                    Description: {productInfoId?.description}
                  </p>
                  <p className="pIds">Made of: {productInfoId.material}</p>
                  <p className="pIds">Select size: </p>
                  {console.log(productInfoId.sizes, "selector")}
                  {console.log(productInfoId)}

                  <div className="size-container">
                    {productInfoId.sizes ? (
                      productInfoId.sizes.map((el) => (
                        <div>
                          {console.log(productInfoId.sizes, "size de size")}
                          <button
                            className="buttonsize"
                            value={el.size}
                            onClick={() =>
                              handleOnAddProduct({
                                ...productInfoId,
                                size: el.size,
                              })
                            }
                            key={el.size}
                          >
                            {el.size}
                          </button>
                        </div>
                      ))
                    ): null}
                    {productInfoId.numbersizes ? (
                      productInfoId.numbersizes.map((el) => (
                        <div>
                          {console.log(
                            productInfoId.numbersizes,
                            "size de number"
                          )}
                          <button
                            className="buttonsize"
                            value={el.size}
                            onClick={() =>
                              handleOnAddProduct({
                                ...productInfoId,
                                size: el.size,
                              })
                            }
                            key={el.size}
                          >
                            {el.size}
                          </button>
                        </div>
                      ))
                    ): null}
                    {productInfoId.boardsizes ? (
                      productInfoId.boardsizes.map((el) => (
                        <div>
                          {console.log(
                            productInfoId.boardsizes,
                            "size de board"
                          )}
                          <button
                            className="buttonsize"
                            value={el.size}
                            onClick={() =>
                              handleOnAddProduct({
                                ...productInfoId,
                                size: el.size,
                              })
                            }
                            key={el.size}
                          >
                            {el.size}
                          </button>
                        </div>
                      ))
                    )
                  : null} 
                  </div>
                  <div className="cardprice">
                    <h3 className="h3Name">${productInfoId.price}</h3>
                  </div>
                </div>
              </div>
              <Link to="/Shop">
                <button className="buttonback">Back to shop</button>
              </Link>
            </div>

            <div>
              {/* <p className="text-center mt-5 titulos-color">Product reviews:</p>
              {productReview?.map((el) => {
                <div key={el.idReviews}></div>
            return    el.productName === productInfoId.name && el.idReviews ? (
                  <div className="card border-dark mb-3">
                    <div className="card-header">{el.firstName}</div>
                    <div className="card-body text-dark">
                      <h5 className="card-title">Rating: {el.rating}</h5>
                      <p className="card-text">Comment: {el.comment}</p>
                    </div>
                  </div>
                ) : null
              }
              )} */}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
