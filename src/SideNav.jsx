import React, { Fragment } from "react";
import ListBimar from "./listBimar";
import SabtBimar from "./sabtBimar";
import { Link, NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>;


const SideNav = () => {
  
 
  const display=()=>{
    const listBimarLink=document.querySelector(".listBimarLink");
    const sabtBimarLink=document.querySelector(".sabtBimarLink");
  
  }
 //////////////////////////listbimar////////////////////////////
//  const ListBimar =()=>{
      
//   return(
//       <Fragment>
       
//   <img className="img_logo_container" src="https://khatamhospital.org/images/khatam-hospital-header.png" alt="" />
//   <div class="container list_bimaran  mt-5  border-black bg-warning w-75   " >
//     <h1 className="title_list_bimaran  "  >لیست بیماران</h1>
  
//     <table class="table  border-black">
//       <thead>
//         <tr class="table-dark">
//           <th>نام</th>
//           <th>نام خانوادگی</th>
//           <th>پزشک معالج</th>
//           <th>تلفن</th>
//           <th>تاریخ بستری</th>
//           <th>تاریخ ترخیص</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>علی</td>
//           <td>محمدی</td>
//           <td>دکتر رسته</td>
//           <td>08-1455555 </td>
//           <td>1400-01-22</td>
//           <td>1400-02-02</td>
//         </tr>      
//         <tr class="table-primary">
//         <td>علی</td>
//           <td>محمدی</td>
//           <td>دکتر رسته</td>
//           <td>08-1455555 </td>
//           <td>1400-01-22</td>
//           <td>1400-02-02</td>
//         </tr>
//         <tr class="table-success">
//         <td>علی</td>
//           <td>محمدی</td>
//           <td>دکتر رسته</td>
//           <td>08-1455555 </td>
//           <td>1400-01-22</td>
//           <td>1400-02-02</td>
//         </tr>
//         <tr class="table-primary">
//         <td>علی</td>
//           <td>محمدی</td>
//           <td>دکتر رسته</td>
//           <td>08-1455555 </td>
//           <td>1400-01-22</td>
//           <td>1400-02-02</td>
//         </tr>
//         <tr class="table-danger">
//         <td>علی</td>
//           <td>محمدی</td>
//           <td>دکتر رسته</td>
//           <td>08-1455555 </td>
//           <td>1400-01-22</td>
//           <td>1400-02-02</td>
//         </tr>
//         <tr class="table-info">
//         <td>علی</td>
//           <td>محمدی</td>
//           <td>دکتر رسته</td>
//           <td>08-1455555 </td>
//           <td>1400-01-22</td>
//           <td>1400-02-02</td>
//         </tr>
//         <tr class="table-warning">
//         <td>علی</td>
//           <td>محمدی</td>
//           <td>دکتر رسته</td>
//           <td>08-1455555 </td>
//           <td>1400-01-22</td>
//           <td>1400-02-02</td>
//         </tr>
//         <tr class="table-info">
//         <td>علی</td>
//           <td>محمدی</td>
//           <td>دکتر رسته</td>
//           <td>08-1455555 </td>
//           <td>1400-01-22</td>
//           <td>1400-02-02</td>
//         </tr>
//         <tr class="table-info">
//         <td>علی</td>
//           <td>محمدی</td>
//           <td>دکتر رسته</td>
//           <td>08-1455555 </td>
//           <td>1400-01-22</td>
//           <td>1400-02-02</td>
//         </tr>
//         <tr class="table-secondary">
//         <td>علی</td>
//           <td>محمدی</td>
//           <td>دکتر رسته</td>
//           <td>08-1455555 </td>
//           <td>1400-01-22</td>
//           <td>1400-02-02</td>
//         </tr>
//         <tr class="table-light">
//         <td>علی</td>
//           <td>محمدی</td>
//           <td>دکتر رسته</td>
//           <td>08-1455555 </td>
//           <td>1400-01-22</td>
//           <td>1400-02-02</td>
//         </tr>
//         <tr class="table-warning">
//         <td>علی</td>
//           <td>محمدی</td>
//           <td>دکتر رسته</td>
//           <td>08-1455555 </td>
//           <td>1400-01-22</td>
//           <td>1400-02-02</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
  
//   </Fragment>
//   )

  
//   }

//  //////////////////////////listbimar////////////////////////////

//  //////////////////////////sabtbimar////////////////////////////

 
//  const SabtBimar =()=>{
 
//   return(
//       <Fragment>
        
//       <div class="container sabt_bimar  p-4 mt-10   w-75   ">
//       <h1 className="title_sabt_bimar" >ثبت بیمار جدید</h1>
//     <form action="/action_page.php ">
//     <div class="mb-3 mt-3 d-flex ">
//       <label for="email" class="form-label m-2 ">نام:</label>
//       <input type="email" class="form-control m-2 " id="email" placeholder=" " name="email"/>
//       <label for="email" class="form-label m-2">نام خانوادگی:</label>
//       <input type="email" class="form-control m-2 " id="email" placeholder=" " name="email"/>
//     </div>
//     <div class="mb-3 mt-3 d-flex ">
//       <label for="email" class="form-label m-2 ">پزشک معالج:</label>
//       <input type="email" class="form-control m-2 " id="email" placeholder=" " name="email"/>
//       <label for="email" class="form-label m-2">تلفن:</label>
//       <input type="email" class="form-control m-2 " id="email" placeholder=" " name="email"/>
//     </div>
//     <div class="mb-3 mt-3 d-flex ">
//       <label for="email" class="form-label m-2  ">تاریخ بستری:</label>
//       <input type="email" class="form-control m-2 " id="email" placeholder=" " name="email"/>
//       <label for="email" class="form-label m-2">تاریخ ترخیص:</label>
//       <input type="email" class="form-control m-2 " id="email" placeholder=" " name="email"/>
//     </div>
    
//     <button type="submit" class="btn btn-primary ">ثبت</button>
//   </form> 
//   </div> 
 
  // </Fragment>
  
  // )
  // }
 //////////////////////////sabttbimar////////////////////////////

 







  return (
    <Fragment>
      <div className=" sideNavContainer ">
        <div class="sidenav">
          <img src="data:image/jpeg;base64,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"></img> 
          <Link to="/SabtBimar">
          <div className="sabtBimar " >
          <p className="sabtBimarLink">ثبت بیمار جدید</p>
          
          <i className="fa fa-user-plus" ></i>
          </div>
          </Link>
          <Link to="/ListBimar">
          <div className="listBimar" type="submit"  onClick={display()}
          //   document.querySelector(".title_sabt_bimar").style.background_color="blue";
         >
         
            <p className="listBimarLink" >لیست  بیمار</p>
            <i className="fa fa-list"></i>
          </div>
          </Link>
         
        
        </div>

   
      {/* <SabtBimar/>
      <ListBimar />  */}
   <div class="containerCarousel">
    <div class="carousel">
      <div class="carousel__face"><img src="https://khatamhospital.org/picbox/backpicbox163.jpg" alt="" /></div>
      <div class="carousel__face"><img src="https://khatamhospital.org/picbox/backpicbox163.jpg" alt="" /></div>
      <div class="carousel__face"><img src="https://khatamhospital.org/picbox/backpicbox156.jpg" alt="" /></div>
      <div class="carousel__face"><img src="https://khatamhospital.org/picbox/backpicbox159.jpg" alt="" /></div>
      <div class="carousel__face"><img src="https://khatamhospital.org/picbox/backpicbox153.jpg" alt="" /></div>
      <div class="carousel__face"><img src="https://khatamhospital.org/picbox/backpicbox155.jpg" alt="" /></div>
      <div class="carousel__face"><img src="https://khatamhospital.org/picbox/backpicbox160.jpg" alt="" /></div>
      <div class="carousel__face"><img src="https://khatamhospital.org/picbox/backpicbox162.jpg" alt="" /></div>
    
    </div>
  </div>

      
      </div>
    </Fragment>
  );
};

export default SideNav;
