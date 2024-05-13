import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import { Col, Row } from "react-bootstrap";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
// import Socials from "layouts/authentication/components/Socials";
// import Separator from "layouts/authentication/components/Separator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Images
import ifb from "assets/images/curved-images/background-portal-v-03.jpg";
import logo from "assets/images/logo-ct.png";
import { RowingRounded } from "@mui/icons-material";
import { login } from "assets/globalAPI/GlobalApi";

function SignIn() {
  var CryptoJS = require("crypto-js");
  const [userid, setUserId] = useState("pritammanna814@gmail.com");
  const [password, setPassword] = useState("1");
  const toastId = useRef(null);
  const [rememberMe, setRememberMe] = useState(true);
  const [loader, setLoader] = useState(false);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const navigate = useNavigate();
  const onChangeEmail = (e) => {
    setUserId(e.currentTarget.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.currentTarget.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userid === "" || password === "") {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.warning("Please Fill the required data");
      }
    } else {
      navigate("/dashboard");

      // var data = {
      //   email: userid,
      //   password: password,
      //   device_id: "ifnhad",
      // };
      // var response = await login(data);
      // var res = response.data\.2`67890

      // if (res.status == 200) {
      //   var userDetails = JSON.stringify(res.userdata);
      //   var encryptdetails = CryptoJS.AES.encrypt(userDetails, "ifbHad");
      //   await localStorage.setItem("userDetails", encryptdetails);
      //   toastId.current = toast.success(res.message);
      //   console.log(res.userdata);
      //   navigate("/dashboard");
      // } else {
      //   toastId.current = toast.error(res.message);
      // }
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="maindiv"
      >
        <div
          style={{
            width: "70%",
            height: "80vh",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="loginimg"
        >
          <Row style={{ width: "100%" }}>
            <Col
              sm={6}
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            ></Col>
            <Col sm={5}>
              <Card
                className="backbox"
                style={{
                  backgroundColor: "#ffffff",
                  boxShadow: "none",
                  borderRadius: 0,
                  width: "100%",
                  // height: "100%",
                }}
              >
                <SoftBox p={3} pb={1} mb={1} textAlign="center">
                  <img src={logo} alt="ifb-Logo" className="logimg" />
                  <SoftTypography variant="h3" fontWeight="bold">
                    Log In
                  </SoftTypography>

                  {/* <SoftTypography variant="h4" fontWeight="medium">
                  IFB-HAD
                </SoftTypography> */}
                </SoftBox>
                <SoftBox mb={2}>{/* <Socials /> */}</SoftBox>
                <SoftBox p={3} pt={1}>
                  <SoftBox component="form" role="form" onSubmit={(e) => handleSubmit(e)}>
                    <SoftBox mb={2}>
                      <SoftInput
                        type="text"
                        value={userid}
                        placeholder="Username"
                        onChange={onChangeEmail}
                      />
                    </SoftBox>
                    <SoftBox mb={2}>
                      <SoftInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={onChangePassword}
                      />
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
                      <SoftButton variant="gradient" color="info" fullWidth type="submit">
                        sign in
                      </SoftButton>
                    </SoftBox>
                  </SoftBox>
                </SoftBox>
              </Card>
            </Col>
            <Col sm={1}></Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default SignIn;
