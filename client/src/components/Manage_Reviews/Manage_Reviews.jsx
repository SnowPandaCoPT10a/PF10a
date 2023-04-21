import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'



import { getAllReviews } from "../../Redux/actions/index.js";

const ManageReviews = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allReviews = useSelector((e) => e.allReviews);
  const [dropNewData, setDropNewData] = useState(0);

  useEffect(() => {
    dispatch(getAllReviews());
  }, [dispatch]);

  console.log(allReviews, "allReviews")
  const scrollTop = () => {
    window.scroll(0, 0)
  }

  return (
    <div className="container">
    <div className="row">
      <div className="col">
        <h1 className="text-center mt-5 titulos-color">RECENT ORDERS</h1>
      </div>
    </div>
  
    {allReviews ? allReviews.map((el) => (
      <div className="card border-dark mb-3">
      <div className="card-header">{el.firstName}</div>
      <div className="card-body text-dark">
        <h5 className="card-title">Rating: {el.rating}</h5>
        <p className="card-text">Comment: {el.comment}</p>
      </div>
      <button
                        className="fav"
                        onClick={() => handleBannedProduct(e.email)}
                        
                      >
                        Delete Review
      </button>
    </div>
    )) : (<h1>No orders to display</h1>)
      }
    </div>
  );
};

export default ManageReviews;
