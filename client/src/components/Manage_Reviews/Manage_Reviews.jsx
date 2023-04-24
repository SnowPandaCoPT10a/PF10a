import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { getAllReviews ,putDisableReviews} from "../../Redux/actions/index.js";

const ManageReviews = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropNewData, setDropNewData] = useState(0);

  console.log(allReview, "LASBILLS")
  const scrollTop = () => {
    window.scroll(0, 0) }

  let allReviews;
  try {
    allReviews = useSelector((e) => e.allReviews);
  } catch (error) {
    console.log("Error fetching reviews from the store: ", error);

  }



  const handleBannedProduct = (e) => {
    dispatch(putDisableReviews(e));
    Swal.fire({
      title: "¡Review Deleted!",
      icon: "success",
    });
  };
try{
  return (
    
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center mt-5 titulos-color">RECENT REVIEWS</h1>
        </div>
      </div>
  
      {allReviews ? allReviews.map((el) => (
        <div className="card border-dark mb-3">
          <div className="card-header">{el.firstName}</div>
          <div className="card-body text-dark">
          
          <h5 className="card-title">Product: {el.productName}</h5>

            <h5 className="card-title">Rating: {el.rating}</h5>
            <p className="card-text">Comment: {el.comment}</p>
          </div>
          <button className="fav" onClick={() => handleBannedProduct(el.idReviews)}>
            Delete Review
          </button>
        </div>
      )) : (<h1>No orders to display</h1>)}
    </div>
  );
      }catch(err){console.log(err)};
};

export default ManageReviews;