import React, {useEffect, useState} from 'react'
import './Reviews.css'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";
import {postReviews} from '../../Redux/actions/index'

const Reviews = () => {
    const [input, setInput] = useState({
      rating: '',
       firstName: '',
    comment: ''
    });
    const dispatch = useDispatch();
    
    const { user, isAuthenticated } = useAuth0();
    // console.log(user, 'ajjajsajasjasj')
    // const handleRatingChange = (e) => {
    //     setInput({ ...input, rating: e.target.value });
    // };
    
    // const handleCommentChange = (e) => {
    //     setInput({ ...input, comment: e.target.value });
    // };
    // const handleFirstNameChange = (e) => {
    //     setInput({ ...input, firstName: e.target.value });
     // };

    function handleChange(e) {
      console.log("input", input)
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        })};
    
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(postReviews({ ...input, firstName: user.given_name + ' ' + user.family_name}));
      setInput({
        rating: '',
         firstName: '',
        comment: ''
      });
    };
    
    return (
      <div>
        <h1>manga de gays</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="rating">Rating:</label>
          <input type="number" id="rating" name="rating" value={input.rating} onChange={(e) => handleChange(e)} />
    
          <label htmlFor="comment">Comment:</label>
          <input id="comment" name="comment" value={input.comment} onChange={(e) =>handleChange(e)}></input>
    
          <label htmlFor="firstName">Name: </label>
          {/* <input type="text" id="firstName" name="firstName" value={input.firstName} onChange={(e) =>handleChange(e)} /> */}
          {/* <h1>{user.given_name}</h1> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default Reviews;