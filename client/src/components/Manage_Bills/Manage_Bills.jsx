import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'


import { getAllBills} from "../../Redux/actions/index.js";


const ManageBills = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const allBills = useSelector((e) => e.allBills);
  


  useEffect(() => {
    dispatch(getAllBills());
  }, [dispatch]);
  
  console.log(allBills,"LASBILLS")

return(

<div>
  <div>
    <h1>ACA VAN LAS BILL's PERRRRRRRRRRROo</h1>
  </div>

  {
  allBills ? allBills.map((e)=> <div class="list-group">
   <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{e.user.email}</h5>
        <h5 class="mb-1">{e.user.first_name} {e.user.last_name}</h5>
        {Math.floor((new Date()- new Date(e.date)) / 86400000) === 0 ? <small>Today</small> : <small>{Math.floor((new Date()- new Date(e.date)) / 86400000)} days ago</small>}
      </div>
      <p class="mb-1">lista de mercaderia comprada</p>
      <div>
        {e.payment_status?<small> {e.payment_status} </small>: <small>Pending payment</small>}
        {e.payment_status && e.Shipped === false ?<button onClick={(e)=> handleSubmit(e)}>Shipped</button>:null}
      </div>
    </a>
    <hr/>{/* //!Borraar esto y meterle un padding  */}
  </div>)

  
  :(<h1>No Vendimo una mierda hasta ahora --Carita Triste-- </h1>)
  }
</div>
)
}


export default ManageBills;



