import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'



import { getAllReviews } from "../../Redux/actions/index.js";

const ManageReviews = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allReview = useSelector((e) => e.allReviews);
  const [dropNewData, setDropNewData] = useState(0);

  useEffect(() => {
    dispatch(getAllReviews());
  }, [dispatch]);

  console.log(allReview, "LASBILLS")
  const scrollTop = () => {
    window.scroll(0, 0)
  }

  return (
    <div className="container">
    <div className="row">
      <div className="col">
        <h1 className="text-center mt-5 titulos-color">RECENT REVIEWS</h1>
      </div>
    </div>
  
    {allReview ? allReview.map((e) => (
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active"  >
          <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{e.productName}</h5>
          <h5 class="mb-1">{e.rating}</h5>
          <h5 class="mb-1">{e.comment}</h5>
          <h5 class="mb-1">{e.firstName}</h5>
     
          </div>
        </a>
        
        <hr class="my-2" />
      </div>
    )) : (<h1>No orders to display</h1>)
      }
    </div>
  );
};

export default ManageReviews;
