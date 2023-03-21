import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ id, img, name, price, description }) {
    return (
        <Link to={`/detail/${id}`}>
            <div >
                <div >
                    <h2 >{name}</h2>
                    <img  src={img} alt="img" style={{ width: "300px" }} />
                    <h2 >{price}</h2>
                    <h2 >{description}</h2>                            
                </div>
            </div>
        </Link>
    );
}