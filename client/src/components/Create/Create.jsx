import React, { useState, useEffect } from "react";
import './Create.css'
import { useDispatch, useSelector } from "react-redux";
import {postProducts,getAllProducts} from "../../Redux/actions/index"



//!!!!!!!!!!!!
function Create() {
    const dispatch = useDispatch();

    

    const [input, setInput] = useState({
        name: "",
        img: "",
        description: "",
        category: "",
        price: "",
        material: "",
        activity: "",
        brand: "",
        model: "",
        numbersizes: [],
        sizes: [],
        boardsizes: [],
      });

      function handleSubmit(e) {
        console.log("llegue aca");
        e.preventDefault();
        dispatch(postProducts(input));
        setInput({
            name: "",
            img: "",
            description: "",
            category: "",
            price: "",
            material: "",
            activity: "",
            brand: "",
            model: "",
            numbersizes: [],
            sizes: [],
            boardsizes: [],
        });
        dispatch(getAllProducts());
       
      }
      function handleClickCategory(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
      }

      function handleChange(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
          
        })}

        console.log("acac",input)

    return (
<div className="signup-container">
  <div className="left-container">
    <h1>
      SnowPanda Co.
    </h1>
    <div className="puppy">
    <img className="img-link" src={input.img} alt="img not found" />
    </div>
  </div>
  <div className="right-container">
    <header>
      <h1>Aca va la frase titular </h1>
      <div className="pets-weight">
        <label htmlFor="pet-weight-0-25">Category</label>
        <div className="radio-container">
          <input id="pet-weight-0-25"  type="radio"  name="category" value="accessories" onClick={(e)=>handleClickCategory(e)}></input>
          <label htmlFor="pet-weight-0-25">Accessories</label>
          <input id="pet-weight-25-50" name="category" value="pants" type="radio"onClick={(e)=>handleClickCategory(e)} ></input>
          <label htmlFor="pet-weight-25-50">Pant</label>
          <input id="pet-weight-50-100" name="category" value="board" type="radio" onClick={(e)=>handleClickCategory(e)}></input>
          <label htmlFor="pet-weight-50-100">Board</label>
          <input id="pet-weight-100-plus" name="category" value="boots" type="radio" onClick={(e)=>handleClickCategory(e)}></input>
          <label htmlFor="pet-weight-100-plus">boot</label>
          <input id="pet-weight-100-plus" name="category" value="t-shirts" type="radio" onClick={(e)=>handleClickCategory(e)}></input>
          <label htmlFor="pet-weight-50-100">T-Shirt</label>
          <input id="pet-weight-100-plus" name="category" value="jackets" type="radio" onClick={(e)=>handleClickCategory(e)}></input>
          <label htmlFor="pet-weight-100-plus">Jacket</label>
        </div>
      </div>
      <div className="set">
        <div className="pets-name">
          <label htmlFor="pets-name" >Name</label>
          <input id="pets-name" placeholder="Pet's name" name ="name" value={input.name} type="text" onChange={(e) => handleChange(e)}/>
        </div>
        <div className="pets-breed">
          <label htmlFor="pets-breed">Brand</label>
          <input id="pets-breed" placeholder="Insert brand" name ="brand" value={input.brand} type="text" onChange={(e) => handleChange(e)}></input>
        </div>
      </div>
      <div className="set">
        <div className="pets-breed">
          <label htmlFor="pets-breed">Model</label>
          <input id="pets-breed" placeholder="Model" name ="model" value={input.model} type="text" onChange={(e) => handleChange(e)}></input>
        </div>
        <div className="pets-birthday">
          <label htmlFor="pets-birthday">Material</label>
          <input id="pets-birthday" placeholder="Material" name ="material" value={input.material} type="text" onChange={(e) => handleChange(e)}></input>
        </div>
      </div>
      <div className="set">
        <div className="pets-gender">
          <label htmlFor="pet-gender-female">Price</label>
          <div className="radio-container">
          <input id="pets-birthday" placeholder="Price" name ="price" value={input.price} type="text" onChange={(e) => handleChange(e)}></input>
          </div>
        </div>
        <div className="pets-spayed-neutered">
          <label htmlFor="pet-spayed">Activity</label>
          <div className="radio-container">
          <input id="pets-birthday" placeholder="Activity" name ="activity" value={input.activity} type="text" onChange={(e) => handleChange(e)}></input>
          </div>
        </div>
      </div>
      {<div className="pets-spayed-neutered">
          <label htmlFor="pet-spayed">Description </label>
          <div className="radio-container">
          <input id="pets-birthday" placeholder="Description" name ="description" value={input.description} type="text" onChange={(e) => handleChange(e)}></input>
          </div>
        </div>}
        <hr/>
              <label htmlFor="pets-upload">Upload a photo</label>
        <div className="pets-photo">
          <button id="pets-upload">
            <i className="fas fa-camera-retro"></i>
          </button>
          <div>
              <input
                className="input"
                type="text"
                
                value={input.img}
                name="img"
                onChange={(e) => handleChange(e)}
              />
            </div>
        </div>
    </header>
    <footer>
      <div className="set">
        <button id="back">Back</button>
        <button id="next" onClick={(e)=>handleSubmit(e)}>Upload</button>
      </div>
    </footer>
  </div>
</div>
    )}
export default Create