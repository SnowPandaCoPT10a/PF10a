import React from 'react'
import './style.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../Redux/actions/index.js'
import {Link} from 'react-router-dom';


const Cards = ({ categoria, path }) => {

    const dispatch = useDispatch()
    const productsBoard = useSelector((state) => state.products);
    console.log(productsBoard, 'hssahsh')

    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getAllProducts(categoria))

    }, [dispatch])

     // <Link to={'/shoes/' + el.id +'/buyNow'}
     const filteredProducts = productsBoard.filter(el => el.category === categoria || el.brand === categoria)
     console.log("TU VIEJA", filteredProducts)
    return (
        <div>
            
            {filteredProducts.length > 0 ?
            filteredProducts.map((el) => 
             
                 
                <div key={el.name} className="container page-wrapper">
                    <div className="page-inner">
                        <div className="row">
                            <div className="el-wrapper">
                        <Link  key={el.productsID}  to={`${path}/${el.productsID}/Detail`}>
                                <div className="box-up">
                                
                                    <img className="img" src={el.img} alt="" />
                                    
                                    <div className="img-info">
                                        <div className="info-inner">
                                            <span className="p-name">{el.name}</span>
                                            <span className="p-company">{el.brand}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-bg">
                                    <div className="h-bg-inner" />
                                </div>
                                <span className="price">{el.price}</span>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
               
                ) : 
                <div key={"LA CAGAMO"} className="container page-wrapper">
                <div className="page-inner">
                    <div className="row">
                        <div className="el-wrapper">
                            <div className="box-up">
                                <img className="img"  alt="" />
                                <div className="img-info">
                                    <div className="info-inner">
                                        <span className="p-name">{"LA CAGAMO"}</span>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="h-bg">
                                <div className="h-bg-inner" />
                            </div>

                            <button className="price">volver</button>
                        </div>
                    </div>
                </div>
            </div>}
        </div>

    )
}


export default Cards