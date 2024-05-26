/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState,useRef } from "react";

// react-router-dom components
import { Link,useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import {login} from  "assets/globalAPI";
import { ToastContainer, toast } from "react-toastify";
import Swal from 'sweetalert2';
import Card from "@mui/material/Card";


// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
import chat from "assets/images/illustrations/rocket-white.png";

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);
  const [agreement, setAgremment] = useState(true);
  const toastId = useRef(null);
  const MySwal = withReactContent(Swal);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);


  // const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const handleSetAgremment = () => setAgremment(!agreement);
  const handleUsernameChange = (event) => {

    setUserId(event.target.value);

  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);

  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("user details");
    // let userid = document.getElementById("userid").value;
    // let password = document.getElementById("password").value;
    if (userId == "" || password == "") {
    console.log("user details");
    Swal.fire({
      icon: 'error',
      title: 'Required Data missing',
      text: "fil the require data",
      confirmButtonText: 'OK'
    });

      
    } else {
      const data = {
        accountNumber: userId,
        mpin: password
      };
      try {
        console.log("hiiii------------>>>", data);
        const resp = await login(data);
        console.log("vggvhgvgvh",resp.data);
        const res = resp.data;
        if (resp.status == 200) {
          const token = res.token;
          // Save token to local storage
          console.log("token",token);
          localStorage.setItem('token', token);
          Swal.fire({
            icon: 'success',
            title: "Login succesfull",
            text: res.message,
            showConfirmButton: false,
            timer: 1500
          });
          console.log("Data posted successfully===>>>>", data);
          navigate("/Uploader/banner")
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Login failed!',
            text: res.message,
            confirmButtonText: 'OK'
          });
        }
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Login failed!',
          confirmButtonText: 'OK'
        });
      }
    }
  }

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your Account  and Mpin to sign in"
      illustration={{
        image: chat,
        title: '"Attention is the new currency"',
        description:
          "The more effortless the writing looks, the more effort the writer actually put into the process.",
      }}
    >
      
       <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftInput type="text" placeholder="Account Number" size="large" value={userId} onChange={handleUsernameChange} />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftInput type="password" placeholder="Mpin" size="large"  value={password} onChange={handlePasswordChange}/>
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          {/* <Switch checked={rememberMe} onChange={handleSetRememberMe} /> */}
          <SoftTypography
            variant="button"
            fontWeight="regular"
           
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" size="large" fullWidth onClick={handleSubmit}>
            sign in
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            {/* <SoftTypography
              component={Link}
              to="/authentication/sign-up/illustration"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography> */}
          </SoftTypography>
        </SoftBox>
      </SoftBox>
     
    </IllustrationLayout>
  );
}

export default Illustration;
