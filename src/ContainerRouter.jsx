import React, { Fragment } from "react";
import { Routes ,Route} from "react-router-dom";
import MainContent from "./MainContent";
import LoginForm from "./LoginForm";
import sabtBimar from "./sabtBimar";
import "bootstrap/dist/css/bootstrap.min.css";

const Container =()=>{
return(
    <Fragment>
    
  

    <LoginForm/>
 <sabtBimar/>
    </Fragment>
)
}
export default Container;