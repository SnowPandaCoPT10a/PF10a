import React from 'react'
import './style.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../Redux/actions/index.js'

const Cards = ({ categoria }) => {

    const dispatch = useDispatch()
    const productsBoard = useSelector((state) => state.products);
    // console.log(productsBoard, 'hssahsh')

    useEffect(() => {
        dispatch(getAllProducts())

    }, [dispatch])

    return (
        <div>
            {productsBoard?.map((el) => el.category === categoria ?

                <div key={el.name} className="container page-wrapper">
                    <div className="page-inner">
                        <div className="row">
                            <div className="el-wrapper">
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
                            </div>
                        </div>
                    </div>
                </div>

                : null)}
        </div>

    )
}


export default Cards