import React from 'react'
import './ShoppingCart.css'

const ShoppingCart = ({allProducts, setAllProducts, priceTotal}) => {


console.log(allProducts, 'mostrame la infooo')


	return (
		<div>
       {/* <All>
			<BasketContainer>
            <BasketTitle>Shopping Basket</BasketTitle>
            <BasketButton>Checkout</BasketButton>
            <BasketTable>
                <BasketHeader>

                </BasketHeader>
                <BasketHeaderLine />
              

                <BasketHeaderLine />
            </BasketTable>
            <BasketButton>Clear</BasketButton>
            <BasketTotal>Total: $0</BasketTotal>
        </BasketContainer>
        </All>*/}

{
    allProducts?.map((el) => {
        return (
            <div key={el.id}>
                <h1>price per quantity $ {el.price}</h1>
                <h1>{el.name}</h1>
                <h1>Size {(el.size) || (el.boardsizes?.map(el => el.size))}</h1>
                <img src={el.img} />
                <h1> quantity :
                    {(el.sizes?.map((size) => {
                        if (size.size === el.size) {
                            return size.quantity;
                        } 
                    })) || (el.numbersizes?.map((size) =>{
                        if(size.size === el.size){
                            return size.quantity
                        }
                    })) || (el.boardsizes?.map((size) => {
                        if(size.size === el.size){
                            return size.quantity
                        }
                    }))
                }
                </h1>
            </div>
        );
    })
}
        <h1>{Number(priceTotal)}</h1>
		</div>
	)
}


export default ShoppingCart

// const All = styled.div`
// height: 74vh;
// margin: 0;
// padding: 0;
// `

// const BasketContainer = styled.div`
// display: grid;
// padding: 20px;
// grid-template-rows: 0.25fr 1fr 0.25fr;
// grid-template-columns: 0.1fr 1fr 0.1fr;
// `
// const BasketTable = styled.div`
// grid-column: 1 / span 3;
// grid-template-rows: 0.25fr, 1fr 0.25fr 0.25fr;
// column-gap: 20px;
// padding-left:10px;
// `
// const BasketHeader = styled.div`
// display: grid;
// grid-template-columns: 1fr 0.5fr 0.4fr;
// `
// const BasketHeaderLine = styled.hr`
// margin-bottom:20px;
// border: 1px solid gray;
// `
// const BasketTitle = styled.h2`
// grid-column: 1 / span 3;
// padding-bottom: 20px;
// `
// const BasketQty = styled.h3`
// font-size: 18px;
// font-weigth: bold;
// dosplay: grid;
// grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;
// `
// const BasketPrice = styled.h3`
// font-size: 20px;
// font-weigth: bold;
// `
// const BasketTotal = styled.h2`
// justify-self: end;
// `
// const BasketButton = styled.button`
// border-radius: 8px;
// height: 40px;
// `