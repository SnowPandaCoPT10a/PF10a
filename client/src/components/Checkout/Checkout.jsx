import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { updateAddres } from "../../Redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import './Checkout.css'

function Checkout() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const products = JSON.parse(searchParams.get("products"));
  const { user, isAuthenticated } = useAuth0();
  const usuarios = useState(user);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    shippingAddress1: "",
    touched: {
      name: false,
      email: false,
      shippingAddress1: false,
    },
  });
  const navigate = useNavigate();
  const errors = {
    name: form.name.length === 0,
    email: form.name.length === 0,
    shippingAddress1: form.shippingAddress1.length === 0,
  };
  const disabled = Object.keys(errors).some((x) => errors[x]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    if (disabled) {
      e.preventDefault();

      return;
    }
    navigate("/OrderConfirmation");
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        touched: { ...form.touched, [name]: true },
      };
    });
  };
  const showError = (field) => (errors[field] ? form.touched[field] : false);

  const scrollTop = () => {
    dispatch(updateAddres(user.email, { address: form.shippingAddress1 }));

    window.scroll(0, 0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="CheckoutContainer">
        <h2 className="CheckoutTitle">Checkout</h2>

        <div className="CheckoutHeader">
          <h4>Your details:</h4>
        </div>
        <hr className="CheckoutHeaderLine" />
        <div className="CheckoutTable">
          <label className="CheckoutFormLabel">Name *</label>
          <input className={`checkout-form-input ${showError("name") ? "invalid" : ""}`}
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Enter name"
            invalid={showError("name")}
            onBlur={handleBlur}
          />
          <label className="CheckoutFormLabel">Email *</label>
          <input className={`checkout-form-input ${showError("email") ? "invalid" : ""}`}
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="Enter email"
            invalid={showError("email")}
            onBlur={handleBlur}
          />
        </div>
        <div className="CheckoutHeader">
          <h4>Address Details:</h4>
        </div>
        <hr className="CheckoutHeaderLine" />

        <div className="CheckoutTable">
          <label className="CheckoutFormLabel">Billing Address</label>
          <div className='CheckoutAddress'>
            <input type="text" name="billingAddress1" />
            <input type="text" name="billingAddress2" />
            <input type="text" name="billingCity" />
          </div>
          <label className="CheckoutFormLabel">Shipping Address *</label>
          <div className='CheckoutAddress'>
            <input className={`checkout-form-input ${showError("shippingAddress1") ? "invalid" : ""}`}
              type="text"
              name="shippingAddress1"
              onChange={handleChange}
              placeholder="Enter address"
              invalid={showError("shippingAddress1")}
              onBlur={handleBlur}
            />
            <input type="text" name="shippingAddress2" />
            <input type="text" name="shippingCity" />
          </div>
        </div>
        <button className="CancelButton" onClick={() => navigate("/ShoppingCart")}>
          Back to cart
        </button>
        <div></div>
        {form.name && form.shippingAddress1 && form.email ? (
          <Link
            to={`/orderconfirmation?products=${JSON.stringify(products)}`}
            onClick={() => scrollTop()}
          >
            <button className="ConfirmButton">Confirm Order</button>
          </Link>
        ) : (
          <p className="please">Please complete the form with your information</p>
        )}

      </div>
    </form>
  );
}

export default Checkout;


