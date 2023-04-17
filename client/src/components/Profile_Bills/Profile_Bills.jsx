
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react"

import { getAllBills} from "../../Redux/actions/index.js";


const ManageBills = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isAuthenticated } = useAuth0();
  const allBills = useSelector((e) => e.allBills);
  
console.log(allBills, ' dameeee la info') 

 try {
    if(isAuthenticated){
        var profileBills= allBills?.map((e)=> e.user.email === user.email)
    }
    let userEmail = user.email;
console.log(userEmail, "useeeeeeeeeeeeeeeeeerr")
 } catch (error) {
console.log(error) } 


  useEffect(() => {
    dispatch(getAllBills());
  }, [dispatch]);
  
  
  
  console.log(profileBills,"profileBILLS")
  console.log(allBills,"LASBILLS")

  try {
    return (
      <div>
        <h1>ACA VAN LAS BILL's PERRRRRRRRRRROo</h1>
        {profileBills ? (
          profileBills.map((e) => (
            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action flex-column align-items-start active"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{e.user.email}</h5>
                  <h5 class="mb-1">
                    {e.user.first_name} {e.user.last_name}
                  </h5>
                  {Math.floor(
                    (new Date() - new Date(e.date)) / 86400000
                  ) === 0 ? (
                    <small>Today</small>
                  ) : (
                    <small>
                      {Math.floor((new Date() - new Date(e.date)) / 86400000)}{" "}
                      days ago
                    </small>
                  )}
                </div>
                <p class="mb-1">lista de mercaderia comprada</p>
                <div>
                  {e.payment_status ? (
                    <small> {e.payment_status} </small>
                  ) : (
                    <small>Pending payment</small>
                  )}
                  {e.payment_status && e.Shipped === false ? (
                    <button onClick={(e) => handleSubmit(e)}>Shipped</button>
                  ) : null}
                </div>
              </a>
              
              <hr />{" "}
              {/* //!Borraar esto y meterle un padding  */}
            </div>
          ))
        ) : (
          <h1>No Vendimo una mierda hasta ahora --Carita Triste-- </h1>
        )}
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}


export default ManageBills;



