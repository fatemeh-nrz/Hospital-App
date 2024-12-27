import React, { Fragment } from "react";
import MainContent from "./MainContent";
import matchers from "@testing-library/jest-dom/matchers";
import { Link,NavLink} from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import * as yup from "yup";
import {Form, ErrorMessage, Field, Formik, useFormik, FastField,FieldArray } from "formik";
const initialValues = {
  name: "",
  family: "",
  email: "",
  pswd:"",
};

////////////////////
const validationSchema = yup.object({
  
  name: yup.string().required("لطفا نام خود را وارد نمایید "),
  pswd: yup
    .string()
    .required("لطفا رمز عبور خود را وارد نمایید")
    .min(8, "حداقل 8 کاراکتر باید وارد نمایید")
    .max(12, "رمز عبور شما بیشتر از حد مجاز است"),
  email: yup
    .string()
    .required("لطفا ایمیل خود را وارد نمایید")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "لطفا ایمیل خود را به درستی وارد نمایید"),
  family: yup
  .string()
  .required("لطفا نام خانوادگی خود را وارد نمایید")
  
});
const onSubmit = (values) => {

};
console.log()
////////////////////
const LoginForm=()=>{

  const formik =useFormik ({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });

  const loginBtn =()=>{
    return(
      <>
       if(Field=""){
<Link to="/MainContent">ورود </Link>
           }
      else{
<Link to="/LoginForm">ورود </Link>
          
  }
      </>
    )
     
}
    return(
      <Fragment>
<Formik
        initialValues={initialValues}
        onSubmit={onsubmit}
        validationSchema={validationSchema}

        validateOnBlur={true}
        validateOnChange={true}
      >

{
(formik) =>{return(
<Form>
<div className="container login_form w-25  mt-5  "> 
<form >
  <img src="" alt="" srcset="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSajZmDxDFDHGaR7dASRW_R86ZlgLCa3-GHXA&s" />
<div class="mb-3 mt-3">
    <label for="email" class="form-label">نام:</label>
    {/* <input type="email" class="form-control" id="email" placeholder="نام خود را وارد نمایید" name="name"/> */}
    <Field  name="name" class="form-control" />
    <ErrorMessage name="name"className="erorr" />
  </div>

  <div class="mb-3 mt-3">
    <label for="email" class="form-label">نام خانوادگی:</label>
    {/* <input type="email" class="form-control" id="email" placeholder=" نام خانوادگی خود را وارد نمایید" name="family"/> */}
    <Field  name="family" class="form-control" />
    <ErrorMessage name="family" className="erorr" />
  </div>

  <div class="mb-3 mt-3">
    <label for="email" class="form-label">ایمیل:</label>
    {/* <input type="email" class="form-control" id="email" placeholder="ایمیل خود را وارد نمایید" name="email"/> */}
    <Field  name="email" class="form-control" />
    <ErrorMessage name="email" className="erorr"  />
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label">رمز ورود:</label>
    {/* <input type="password" class="form-control" id="pwd" placeholder="رمز ورود را وارد نمایید" name="pswd"/> */}
    <Field  name="pswd" class="form-control" />
    <ErrorMessage name="pswd" className="erorr"/>
  </div>
  <div class="form-check mb-3">
    <label class="form-check-label"/>
      <input class="form-check-input" type="checkbox" name="remember"/>
       مرا به خاطر داشته باش 
  </div>
  <button type="submit" className="btn btn-success " >
  <Link to="/MainContent">ورود </Link> 
  </button>
</form> 
</div>

</Form>
)
}}
</Formik>
</Fragment>
    )
}
export default LoginForm;