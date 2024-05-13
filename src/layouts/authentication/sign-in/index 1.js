/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React, { useState,useEffect } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import { authLogin } from '../../../assets/globalAPI';
// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";

function SignIn() {
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const toastId = useRef(null);
  const [rememberMe, setRememberMe] = useState(true);
  const [loader,setLoader] = useState(false);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const navigate = useNavigate();
  const onChangeEmail = (e) => {
    setUserId(e.currentTarget.value);
};
const onChangePassword = (e) => {
  setPassword(e.currentTarget.value);
};
  const handleSubmit = async event => {  
    event.preventDefault();
    
    if(userid!='' && password!='')
    {

      const data = {
      "action": 'userLogin',	
      "userid": userid,
      "password": password,
    };
  }
     
   if((userid==="arn-123"&&password==="12345")||(userid==="pri-123"&&password==="12345")||(userid==="rah-123"&&password==="12345"))
   {
    // authLogin(JSON.stringify(data)).then(function(response) {
    //     var res = response.data;
    //       if(res.status=='true' && res.code=='200')
    //       {
       
    //         localStorage.setItem('userid_details', JSON.stringify({userid:"arn-123",user_type:res.user_type,id:res.id,email:res.email,name:res.name})); 
    //         navigate('/dashboard');
    //       }else{
    //     if(! toast.isActive(toastId.current)) {
    //     toastId.current = toast.warning("Login failed,please try again!")  
    //   }
    //     }
    //     }.bind(this)
    // )
    // .catch(function(error) {
    //   setLoader(false)
    //   console.log(error);
    
    // }); 
    navigate('/dashboard');
   }    
    else{
      
      if(! toast.isActive(toastId.current)) {
        toastId.current = toast.warning("please fill proper data")
  
      }
  
    }
  }
  // const handleSubmit = async () => {
    
  //   navigate('/dashboard');
  // }
  return (
    <CoverLayout
      title="IFB HAD Portal"
      description=""
      image={curved9}
    >
       <ToastContainer />
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              User ID
            </SoftTypography>
          </SoftBox>
          <SoftInput type="text" placeholder="User ID" value={userid} onChange={onChangeEmail} />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="password" placeholder="Password" value={password} onChange = {onChangePassword} />
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" fullWidth onClick={handleSubmit}>
            sign in
          </SoftButton>
        </SoftBox>
       
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
