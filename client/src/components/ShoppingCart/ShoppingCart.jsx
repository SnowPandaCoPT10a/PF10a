import React from 'react'
import './ShoppingCart.css'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ShoppingCart = ({ allProducts, setAllProducts, priceTotal }) => {


    console.log(allProducts, 'mostrame la infooo')


    const renderProduct = () => {
        if (allProducts.length > 0) {
            return allProducts.map(el => (
                <React.Fragment key={el.id}>
                    <div><Link onClick={() => scroll()} to={`/Products/${el.category}/${el.productsID}/Detail`}>{el.name}</Link>
                        <img className='imgcart' src={el.img} alt="Img not found" /></div>
                    <BasketSize>{(el.size) || (el.boardsizes?.map(el => el.size))}</BasketSize>
                    <BasketQty> Quantity :
                        {(el.sizes?.map((size) => {
                            if (size.size === el.size) {
                                return el.sizes.map((e) => {
                                    if (e.size === el.size) { //mapeo la prop sizes hasta encontrar su size y devuelve la quantity de ese en especifico
                                        return e.quantity
                                    }
                                });
                            }
                        })) || (el.numbersizes?.map((size) => {
                            if (size.size === el.size) {
                                return size.quantity
                            }
                        })) || (el.boardsizes?.map((size) => {
                            {/* if (size.size === el.size) { */ }
                            return size.quantity
                            {/* } */ }
                        }))
                        }
                    </BasketQty>
                    <BasketPrice>
                        ${el.price}
                    </BasketPrice>
                </React.Fragment>
            ))
        } else {
            return <div>The shopping cart is currently empty</div>
        }
    }

    const renderTotal = () => {
        const total = allProducts.reduce((total, product) =>
            (total + product.price), 0)
        return total;
    }
    return (
        <div>
            <All>
                <BasketContainer>
                    <BasketTitle>Shopping Cart</BasketTitle>
                    <BasketButton>Checkout</BasketButton>
                    <BasketTable>
                        <BasketHeader>
                            <h4>Item</h4>
                            <h4>Size</h4>
                            <h4>Quantity</h4>
                            <h4>Price</h4>
                        </BasketHeader>
                        <BasketHeaderLine />
                        <BasketHeader>
                            {renderProduct()}
                        </BasketHeader>
                        <BasketHeaderLine />
                    </BasketTable>
                    <BasketButton >Clear</BasketButton>
                    <BasketTotal>Total: ${renderTotal()}</BasketTotal>
                </BasketContainer>
            </All>
        </div>
    )
}

export default ShoppingCart

const All = styled.div`
            height: 100vh;
            margin-top: 70px;
            padding: 0;
            `

const BasketContainer = styled.div`
            display: grid;
            padding: 20px;
            grid-template-rows: 0.25fr 1fr 0.25fr;
            grid-template-columns: 0.1fr 1fr 0.1fr;
            `
const BasketTable = styled.div`
            grid-column: 1 / span 6;
            grid-template-rows: 0.25fr, 1fr 0.25fr 0.25fr;
            column-gap: 20px;
            padding-left:10px;
            `
const BasketHeader = styled.div`
            display: grid;
            grid-template-columns: 1fr 0.5fr 0.4fr 0.4fr;
            `
const BasketHeaderLine = styled.hr`
            margin-bottom:20px;
            border: 1px solid gray;
            `
const BasketTitle = styled.h2`
            grid-column: 1 / span 3;
            padding-bottom: 20px;
            `
const BasketQty = styled.h3`
            font-size: 18px;
            font-weigth: bold;            
            grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;
            `
const BasketSize = styled.p`
            font-size: 20px;
            text-transform: uppercase;
            font-weigth: bold;            
            grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;
            `

const BasketPrice = styled.h3`
            font-size: 20px;
            font-weigth: bold;
            `
const BasketTotal = styled.h2`
            justify-self: end;
            `
const BasketButton = styled.button`
            margin-rigth: 25px;
            border-radius: 8px;
            height: 40px;

            &:hover {
                box - shadow: 0 0 0 6px #488cfb;
  }
            `

const QuantityButton = styled.button`
            margin: 7px;
            border-radius: 3px;
            height: auto;

            &:hover {
                box - shadow: 0 0 0 6px #488cfb;
  }
            `