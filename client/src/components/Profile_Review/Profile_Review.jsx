import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Reviews from "../Reviews/Reviews";
import './ProfileReview.css'
import { getAllBills } from "../../Redux/actions/index.js";

const profileReview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  const allBills = useSelector((e) => e.allBills);

  const [reviewButton, setReviewButton] = useState("Cerrado");

  try {
    if (isAuthenticated) {
      var profileBills = allBills?.filter((e) => e.user.email === user.email);
      var superBills = profileBills?.filter(
        (e) => e.payment_status === "approved"
      );
      var filterBills = superBills
        ?.map((objeto) => objeto.item)
        .reduce((acc, val) => acc.concat(val), []);

      var userBills = profileBills?.map((e) => e.item);
    }
    let userEmail = user;
  } catch (error) {
    console.log(error);
  }

  useEffect(() => {
    dispatch(getAllBills());
  }, [dispatch]);

  try {
    return (
      <div  className="profilecont">
        <h1 className="text-center mt-5 titulos-color">My Reviews: </h1>
        {filterBills ? (
          filterBills.map((e, index = 1) => (
            <a className="review">
              <div
                href="#"
                className="list-group-item list-group-item-action flex-column align-items-start active"
              >
                <div className="p-name">{e}</div>
                <button
                  className="float-end btn btn-light btn-sm editar"
                  onClick={() => setReviewButton(index)}
                >
                  Editar Review
                </button>
                <div>
                  {reviewButton === index ? (
                    <div>
                      <div>
                        <Reviews item={e} />
                      </div>
                      <button
                        className="float-end btn btn-danger"
                        onClick={() => setReviewButton("Cerrado")}
                      >
                        X
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </a>
          ))
        ) : (<h1 className="text-center mt-5 titulos-color">No reviews to display</h1>)
        }
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

export default profileReview;
