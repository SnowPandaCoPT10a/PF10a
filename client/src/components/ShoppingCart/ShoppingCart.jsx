import React from "react";
import "./ShoppingCart.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../Redux/actions";

const ShoppingCart = ({
  allProducts,
  setAllProducts,
  setCountProducts,
  countProducts,
  priceTotal,
  setPriceTotal,
}) => {
  const navigate = useNavigate();
const dispatch = useDispatch();
  const clearCart = () => {
    window.localStorage.setItem("productscart", JSON.stringify([]));
    window.localStorage.setItem("totalprices", JSON.stringify(0));
    window.localStorage.setItem("countproducts", JSON.stringify(0));
    setAllProducts([]);
    setCountProducts(0);
    setPriceTotal(0);
  };

  useEffect(() => {
    dispatch(getAllProducts())
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
  }, []);

  console.log(allProducts)

  // window.localStorage.setItem("productscart", JSON.stringify(allProducts));
  // window.localStorage.setItem("totalprices", JSON.stringify(priceTotal));
  // window.localStorage.setItem("countproducts", JSON.stringify(countProducts));

  function decrementProduct(product) {
    console.log(product, 'productos')
    const productToUpdate = allProducts?.find(
      (el) => el.productsID === product.productsID && el.size === product.size
    );
      console.log(productToUpdate);
      if (productToUpdate.sizes) {
    if (
      productToUpdate?.sizes?.map(el =>
        el.size === product.size ? el.quantity > 1 : null
      ) && productToUpdate.sizes.find((el) => el.size === product.size && el.quantity > 0)
    ) {
      const updatedProduct = allProducts.map((el) =>
        el.productsID === product.productsID && el.size === product.size
          ? {
            ...el,
            sizes: productToUpdate.sizes?.map((size) =>
              size.size === product.size
                ? {
                  ...size,

                  stock: Number(size.stock + 1),
                  quantity: Number(size.quantity - 1),
                }
                : size
            ),

            // price: Number(productToUpdate.price) * productToUpdate?.sizes.map(el => el.size === product.size ? Number(el.quantity): null )
          }
          : { ...el }
      );

      setAllProducts(updatedProduct);
      setCountProducts(countProducts - 1);
      setPriceTotal(priceTotal - Number(productToUpdate.price));
      //setPriceTotal(priceTotal -  Number(productToUpdate.price) * productToUpdate?.sizes.map(el => el.size === product.size ? Number(el.quantity): 209 ) );
      window.localStorage.setItem(
        "productscart",
        JSON.stringify(updatedProduct)
      );
      window.localStorage.setItem(
        "totalprices",
        JSON.stringify(priceTotal - Number(productToUpdate.price))
      );
      window.localStorage.setItem(
        "countproducts",
        JSON.stringify(countProducts - 1)
      );
    }
  }
  if (productToUpdate.boardsizes) {
    if (
      productToUpdate?.boardsizes?.map(el =>
        el.size === product.size ? el.quantity > 1 : null
      ) && productToUpdate.boardsizes.find((el) => el.size === product.size && el.quantity > 0)
    ) {
      const updatedProduct = allProducts.map((el) =>
        el.productsID === product.productsID && el.size === product.size
          ? {
            ...el,
            boardsizes: productToUpdate.boardsizes?.map((size) =>
              size.size === product.size
                ? {
                  ...size,
                  stock: Number(size.stock + 1),
                  quantity: Number(size.quantity - 1),
                }
                : size
            ),

            // price: Number(productToUpdate.price) * productToUpdate?.sizes.map(el => el.size === product.size ? Number(el.quantity): null )
          }
          : { ...el }
      );

      setAllProducts(updatedProduct);
      setCountProducts(countProducts - 1);
      setPriceTotal(priceTotal - Number(productToUpdate.price));
      //setPriceTotal(priceTotal -  Number(productToUpdate.price) * productToUpdate?.sizes.map(el => el.size === product.size ? Number(el.quantity): 209 ) );
      window.localStorage.setItem(
        "productscart",
        JSON.stringify(updatedProduct)
      );
      window.localStorage.setItem(
        "totalprices",
        JSON.stringify(priceTotal - Number(productToUpdate.price))
      );
      window.localStorage.setItem(
        "countproducts",
        JSON.stringify(countProducts - 1)
      );
    }
  }
  if (productToUpdate?.numbersizes) {
    if (
      productToUpdate?.numbersizes?.map((el) =>
        el.size === product.size ? el.quantity > 1 : null
      ) && productToUpdate.numbersizes.find((el) => el.size === product.size && el.quantity > 0)
    ) {
      const updatedProduct = allProducts.map((el) =>
        el.productsID === product.productsID && el.size === product.size
          ? {
            ...el,

            numbersizes: productToUpdate.numbersizes?.map((size) =>
              size.size === product.size
                ? {
                  ...size,

                  stock: Number(size.stock + 1),
                  quantity: Number(size.quantity - 1),
                }
                : size
            ),

            // price: Number(productToUpdate.price) * productToUpdate?.sizes.map(el => el.size === product.size ? Number(el.quantity): null )
          }
          : { ...el }
      );

      setAllProducts(updatedProduct);
      setCountProducts(countProducts - 1);
      setPriceTotal(priceTotal - Number(productToUpdate.price));
      //setPriceTotal(priceTotal -  Number(productToUpdate.price) * productToUpdate?.sizes.map(el => el.size === product.size ? Number(el.quantity): 209 ) );
      window.localStorage.setItem(
        "productscart",
        JSON.stringify(updatedProduct)
      );
      window.localStorage.setItem(
        "totalprices",
        JSON.stringify(priceTotal - Number(productToUpdate.price))
      );
      window.localStorage.setItem(
        "countproducts",
        JSON.stringify(countProducts - 1)
      );
    }
  }
  }

  // price: Number(productToUpdate.price) - Number(product.price)
  function incrementProduct(product) {
    const productNext = allProducts.find(
      (el) => el.productsID === product.productsID && el.size === product.size
    );
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
      setCountProducts(countProducts + 1);
      setPriceTotal(priceTotal + Number(productNext.price));
      window.localStorage.setItem(
        "productscart",
        JSON.stringify(updateProduct)
      );
      window.localStorage.setItem(
        "totalprices",
        JSON.stringify(priceTotal + Number(productNext.price))
      );
      window.localStorage.setItem(
        "countproducts",
        JSON.stringify(countProducts + 1)
      );
    }
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
          <p className="BasketSize">
            {el.size || el.boardsizes?.map((el) => el.size)}
          </p>
          <h3 className="BasketQty">
            {" "}
            <button className="butoninc" onClick={() => decrementProduct(el)}>-</button>
          {console.log(el, 'ACÁ ESTOY')}
            {el.sizes?.map((size) => {
              if (size.size === el.size) {
                return el.sizes.map((e) => {
                  if (e.size === el.size) {
                    //mapeo la prop sizes hasta encontrar su size y devuelve la quantity de ese en especifico
                    return e.quantity;
                  }
                });
              }
            })}{
              el.numbersizes?.map((size) => {
                if (size.size === el.size) {
                  return size.quantity;
                }
              })}{
              el.boardsizes?.map((size) => {
                {
                  /* if (size.size === el.size) { */
                }
                return size.quantity;
                {
                  /* } */
                }
              })}
            <button className="butoninc" onClick={() => incrementProduct(el)}>+</button>
          </h3>
          <h3 className="BasketQty">
            ${el.price}
          </h3>
          <h3 className="BasketPrice">
            ${(
              el.price *
              (el.sizes?.reduce((acc, size) => {
                if (size.size === el.size) {
                  const sizeQuantity =
                    el.sizes.find((e) => e.size === el.size)?.quantity || 0;
                  return acc + sizeQuantity;
                }
                return acc;
              }, 0) ||
                el.numbersizes?.reduce((acc, size) => {
                  if (size.size === el.size) {
                    const sizeQuantity =
                      el.numbersizes.find((e) => e.size === el.size)
                        ?.quantity || 0;
                    return acc + sizeQuantity;
                  }
                  return acc;
                }, 0) ||
                el.boardsizes?.reduce((acc, size) => {
                  const sizeQuantity =
                    el.boardsizes.find((e) => e.size === el.size)?.quantity ||
                    0;
                  return acc + sizeQuantity;
                }, 0) ||
                0)
            ).toFixed(2)}
          </h3>
        </React.Fragment>
      ));
    } else {
      return <div>The shopping cart is currently empty</div>;
    }
  };

  const handleCheckout = () => {
    navigate(`/checkout?products=${JSON.stringify(allProducts)}`);
  };
  return (
    <div>
      <div className="All">
        <div className="BasketContainer">
          <h1 className='text-center mt-5 titulos-color'>SHOPPING CART</h1>
          
            {priceTotal === 0 ? '' :             
            <button  onClick={() => handleCheckout ()} className="BasketButton">Go to checkout</button>}        
             
          <div className="BasketTable">
            <div className="BasketHeader">
              <h4>Item</h4>
              <h4>Size</h4>
              <h4>Quantity</h4>
              <h4>Price</h4>
              <h4>Total</h4>
            </div>
            <hr className="BasketHeaderLine"></hr>
            <div className="BasketHeader">{renderProduct()} </div>
            <hr className="BasketHeaderLine"></hr>
          </div>
          <button className="buttonvolver" onClick={() => clearCart()}>
            Clear
          </button>
          <div className="BasketTotal">Total: ${priceTotal.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;


