import React, { Fragment } from "react";
import { Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import MainContent from "./MainContent";
const SabtBimar =()=>{
  
    
return(
    <Fragment>
      
    <div class="container sabt_bimar  p-4 mt-15   w-75  ">
    <img className="img_logo_container_sabt_bimar" src="https://khatamhospital.org/images/khatam-hospital-header.png" alt="" />
    <h1 className="title_sabt_bimar" >ثبت بیمار جدید</h1>
  <form action="/action_page.php  ">
  <div class="mb-3 mt-3 d-flex ">
    <label for="email" class="form-label m-2 ">نام:</label>
    <input type="email" class="form-control m-2 " id="email" placeholder=" " name="email"/>
    <label for="email" class="form-label m-2">نام خانوادگی:</label>
    <input type="email" class="form-control m-2 " id="email" placeholder=" " name="email"/>
  </div>
  <div class="mb-3 mt-3 d-flex ">
    <label for="email" class="form-label m-2 ">پزشک معالج:</label>
    <input type="email" class="form-control m-2 " id="email" placeholder=" " name="email"/>
    <label for="email" class="form-label m-2">تلفن:</label>
    <input type="email" class="form-control m-2 " id="email" placeholder=" " name="email"/>
  </div>
  <div class="mb-3 mt-3 d-flex ">
    <label for="email" class="form-label m-2  ">تاریخ بستری:</label>
    <input type="email" class="form-control m-2 " id="email" placeholder=" " name="email"/>
    <label for="email" class="form-label m-2">تاریخ ترخیص:</label>
    <input type="email" class="form-control m-2 " id="email" placeholder=" " name="email"/>
  </div>
  {/* <div class="mb-3 mt-3 d-flex ">
    <label for="email" class="form-label m-2 ">Email:</label>
    <input type="email" class="form-control m-2" id="email" placeholder="Enter email" name="email"/>
    <label for="email" class="form-label m-2">Email:</label>
    <input type="email" class="form-control m-2" id="email" placeholder="Enter email" name="email"/>
  </div> */}
  
  <button type="submit" class="btn btn-primary ">ثبت</button>
</form> 
</div> 

</Fragment>

)
}
export default SabtBimar;