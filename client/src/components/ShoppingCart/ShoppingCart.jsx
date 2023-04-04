import React from "react";
import "./ShoppingCart.css";
import { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Checkout from "../Checkout/Checkout";

const ShoppingCart = ({
  allProducts,
  setAllProducts,
  setCountProducts,
  countProducts,
  priceTotal,
  setPriceTotal,
}) => {
  const navigate = useNavigate();

  const clearCart = () => {
    setAllProducts([])
    setCountProducts(0)
    setPriceTotal(0);
  };

  //  console.log(allProducts,'facu')
 function decrementProduct(product) {
    const productToUpdate = allProducts?.find(
      (el) => el.productsID === product.productsID && el.size === product.size
    );

    if (
      productToUpdate.sizes?.map((el) =>
        el.size === product.size ? el.quantity > 1 : null
      )
    ) {
      const updatedProduct = allProducts.map((el) =>
        el.productsID === product.productsID && el.size === product.size
          ? {
              ...el,

              sizes: productToUpdate.sizes?.map(
                (size) =>
                  size.size === product.size
                    ? {
                        ...size,

                        stock: Number(size.stock + 1),
                        quantity: Number(size.quantity - 1),
                      }
                    : size,
                console.log("facu")
              ),

              // price: Number(productToUpdate.price) * productToUpdate?.sizes.map(el => el.size === product.size ? Number(el.quantity): null )
            }
          : { ...el }
      );

      //   console.log(productToUpdate.price, 'preiceee')
      // console.log(productToUpdate, 'porudoc')
      setAllProducts(updatedProduct);
      setCountProducts(countProducts - 1);
      setPriceTotal( priceTotal - Number(productToUpdate.price))
      //setPriceTotal(priceTotal -  Number(productToUpdate.price) * productToUpdate?.sizes.map(el => el.size === product.size ? Number(el.quantity): 209 ) );
    }
    if (
      productToUpdate.boardsizes?.map((el) =>
        el.size === product.size ? el.quantity > 1 : null
      )
    ) {
      const updatedProduct = allProducts.map((el) =>
        el.productsID === product.productsID && el.size === product.size
          ? {
              ...el,

              boardsizes: productToUpdate.boardsizes?.map(
                (size) =>
                  size.size === product.size
                    ? {
                        ...size,

                        stock: Number(size.stock + 1),
                        quantity: Number(size.quantity - 1),
                      }
                    : size,
                console.log("facu")
              ),

              // price: Number(productToUpdate.price) * productToUpdate?.sizes.map(el => el.size === product.size ? Number(el.quantity): null )
            }
          : { ...el }
      );

      //   console.log(productToUpdate.price, 'preiceee')
      // console.log(productToUpdate, 'porudoc')
      setAllProducts(updatedProduct);
      setCountProducts(countProducts - 1);
      setPriceTotal( priceTotal - Number(productToUpdate.price))
      //setPriceTotal(priceTotal -  Number(productToUpdate.price) * productToUpdate?.sizes.map(el => el.size === product.size ? Number(el.quantity): 209 ) );
    }
    if (
      productToUpdate.numbersizes?.map((el) =>
        el.size === product.size ? el.quantity > 1 : null
      )
    ) {
      const updatedProduct = allProducts.map((el) =>
        el.productsID === product.productsID && el.size === product.size
          ? {
              ...el,

              numbersizes: productToUpdate.numbersizes?.map(
                (size) =>
                  size.size === product.size
                    ? {
                        ...size,

                        stock: Number(size.stock + 1),
                        quantity: Number(size.quantity - 1),
                      }
                    : size,
                console.log("lucho")
              ),

              // price: Number(productToUpdate.price) * productToUpdate?.sizes.map(el => el.size === product.size ? Number(el.quantity): null )
            }
          : { ...el }
      );

      //   console.log(productToUpdate.price, 'preiceee')
      // console.log(productToUpdate, 'porudoc')
      setAllProducts(updatedProduct);
      setCountProducts(countProducts - 1);
      setPriceTotal( priceTotal - Number(productToUpdate.price))
      //setPriceTotal(priceTotal -  Number(productToUpdate.price) * productToUpdate?.sizes.map(el => el.size === product.size ? Number(el.quantity): 209 ) );
    }
  }

  // price: Number(productToUpdate.price) - Number(product.price)
  function incrementProduct(product) {
    const productNext = allProducts.find(
      (el) => el.productsID === product.productsID && el.size === product.size
    );
    // console.log(allProducts, "allprodict");
    if (productNext) {
      const updateProduct = allProducts.map((el) =>
        el.productsID === productNext.productsID && el.size === productNext.size
          ? {
              ...el,
              //price: Number(productNext.price) + Number(product.price),
              sizes: productNext.sizes?.map((size) =>
                size.size === product.size
                  ? {
                      ...size,
                      stock: Number(size.stock - 1),
                      quantity: Number(size.quantity + 1),
                    }
                  : size
              ),
              numbersizes: productNext.numbersizes?.map((size) =>
                size.size === product.size
                  ? {
                      ...size,
                      stock: Number(size.stock - 1),
                      quantity: Number(size.quantity + 1),
                    }
                  : size
              ),
              boardsizes: productNext.boardsizes?.map((size) =>
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
      const updateProducts = allProducts.map((el) =>
        el.productsID === product.productsID && el.size === product.size
          ? { ...el }
          : el
      );

      setAllProducts(updateProduct);
      setPriceTotal(priceTotal + Number(productNext.price));
    } else {
      const newProduct = {
        ...product,
        price: Number(product.price) + Number(product.price),
        sizes: product.sizes?.map((size) =>
          size.size === product.size
            ? {
                ...size,
                stock: Number(size.stock - 1),
                quantity: Number(size.quantity + 1),
              }
            : size
        ),
        numbersizes: product.numbersizes?.map((size) =>
          size.size === product.size
            ? {
                ...size,
                stock: Number(size.stock - 1),
                quantity: Number(size.quantity + 1),
              }
            : size
        ),
        boardsizes: product.boardsizes?.map((size) =>
          size.size === "one size"
            ? {
                ...size,
                stock: Number(size.stock - 1),
                quantity: Number(size.quantity + 1),
              }
            : size
        ),
      };
      const newProducts = [...allProducts, newProduct];
      setAllProducts(newProducts);
      setPriceTotal(priceTotal + Number(newProduct.price));
    }
    setCountProducts(countProducts + 1);
  }

  const renderProduct = () => {
    if (allProducts.length > 0) {
      return allProducts.map((el) => (
        <React.Fragment key={el.id}>
          <div>
            <Link
              onClick={() => scroll()}
              to={`/Products/${el.category}/${el.productsID}/Detail`}
            >
              {el.name}
            </Link>
            <img className="imgcart" src={el.img} alt="Img not found" />
          </div>
          <BasketSize>
            {el.size || el.boardsizes?.map((el) => el.size)}
          </BasketSize>
          <BasketQty>
            {" "}
            Quantity :
            {el.sizes?.map((size) => {
              if (size.size === el.size) {
                return el.sizes.map((e) => {
                  if (e.size === el.size) {
                    //mapeo la prop sizes hasta encontrar su size y devuelve la quantity de ese en especifico
                    return e.quantity;
                  }
                });
              }
            }) ||
              el.numbersizes?.map((size) => {
                if (size.size === el.size) {
                  return size.quantity;
                }
              }) ||
              el.boardsizes?.map((size) => {
                {
                  /* if (size.size === el.size) { */
                }
                return size.quantity;
                {
                  /* } */
                }
              })}
          </BasketQty>
          <BasketPrice>
            <button onClick={() => decrementProduct(el)}>-</button>${el.price}
            <button onClick={() => incrementProduct(el)}>+</button>
          </BasketPrice>
          <BasketQty>
            {el.price *
              (el.sizes?.reduce((acc, size) => {
                console.log("gato");
                if (size.size === el.size) {
                  const sizeQuantity =
                    el.sizes.find((e) => e.size === el.size)?.quantity || 0;
                  return acc + sizeQuantity;
                }
                return acc;
              }, 0) ||
                el.numbersizes?.reduce((acc, size) => {
                  console.log("perro");
                  if (size.size === el.size) {
                    const sizeQuantity =
                      el.numbersizes.find((e) => e.size === el.size)
                        ?.quantity || 0;
                    return acc + sizeQuantity;
                  }
                  return acc;
                }, 0) ||
                el.boardsizes?.reduce((acc, size) => {
                  console.log("pato");
                  const sizeQuantity =
                    el.boardsizes.find((e) => e.size === el.size)?.quantity ||
                    0;
                  return acc + sizeQuantity;
                }, 0) ||
                0)}
          </BasketQty>
        </React.Fragment>
      ));
    } else {
      return <div>The shopping cart is currently empty</div>;
    }
  };

  const renderTotal = () => {
    const total = allProducts.reduce(
      (total, product) => total + product.price,
      0
    );
    return total;
  };
  return (
    <div>
      <All>
        <BasketContainer>
          <BasketTitle>Shopping Cart</BasketTitle>
          <Link to={`/checkout?products=${JSON.stringify(allProducts)}`}>
          <BasketButton >Go to checkout</BasketButton>
      </Link>
          <BasketTable>
            <BasketHeader>
              <h4>Item</h4>
              <h4>Size</h4>
              <h4>Quantity</h4>
              <h4>Price</h4>
              <h4>Total</h4>
            </BasketHeader>
            <BasketHeaderLine />
            <BasketHeader>{renderProduct()}</BasketHeader>
            <BasketHeaderLine />
          </BasketTable>
          <BasketButton  onClick={() => clearCart() }>Clear</BasketButton>
          <BasketTotal>Total: {priceTotal}</BasketTotal>
        </BasketContainer>
      </All>
    </div>
  );
};

export default ShoppingCart;

const All = styled.div`
  height: 100vh;
  margin-top: 70px;
  padding: 0;
`;

const BasketContainer = styled.div`
  display: grid;
  padding: 20px;
  grid-template-rows: 0.25fr 1fr 0.25fr;
  grid-template-columns: 0.1fr 1fr 0.1fr;
`;
const BasketTable = styled.div`
  grid-column: 1 / span 6;
  grid-template-rows: 0.25fr, 1fr 0.25fr 0.25fr;
  column-gap: 20px;
  padding-left: 10px;
`;
const BasketHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.4fr 0.4fr 0.4fr;
`;
const BasketHeaderLine = styled.hr`
  margin-bottom: 20px;
  border: 1px solid gray;
`;
const BasketTitle = styled.h2`
  grid-column: 1 / span 3;
  padding-bottom: 20px;
`;
const BasketQty = styled.h3`
  font-size: 18px;
  font-weigth: bold;
  grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;
`;
const BasketSize = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  font-weigth: bold;
  grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;
`;

const BasketPrice = styled.h3`
  font-size: 20px;
  font-weigth: bold;
`;
const BasketTotal = styled.h2`
  justify-self: end;
`;
const BasketButton = styled.button`
  margin-rigth: 25px;
  border-radius: 8px;
  height: 40px;
  &:hover {
    box-shadow: 0 0 0 6px #488cfb;
  }
`