// /**
// =========================================================
// * Soft UI Dashboard React - v4.0.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
// * Copyright 2022 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// // react-router-dom components

// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// // @mui material components
// import Card from "@mui/material/Card";
// import Checkbox from "@mui/material/Checkbox";
// import { authUserRegistration } from "../../../assets/globalAPI";
// // Soft UI Dashboard React components
// import SoftBox from "components/SoftBox";
// import SoftTypography from "components/SoftTypography";
// import SoftInput from "components/SoftInput";
// import SoftButton from "components/SoftButton";

// // Authentication layout components
// import BasicLayout from "layouts/authentication/components/BasicLayout";
// import Socials from "layouts/authentication/components/Socials";
// import Separator from "layouts/authentication/components/Separator";
// import { ToastContainer, toast } from "react-toastify";
// // Images
// import curved6 from "assets/images/curved-images/curved14.jpg";

// function SignUp() {
//   const [agreement, setAgremment] = useState(true);
//   const toastId = React.useRef(null);
//   const MySwal = withReactContent(Swal);
//   const [userAccess, setUserAccess] = useState("");
//   const [userID, setUserID] = useState("");
//   const navigate = useNavigate();
//   const [loader, setLoader] = useState(false);
//   // useEffect(() => {
//   //   if (localStorage.getItem('userid_details')) {
//   //     let session = localStorage.getItem('userid_details');
//   //     let userid_array =JSON.parse(session);
//   //     let userid = userid_array.userid;
//   //     let user_type = userid_array.user_type;
//   //     setUserAccess(user_type);
//   //     setUserID(userid);
//   //     }else{
//   //       navigate('/');
//   //     }

//   // },[userID]);

//   const handleSetAgremment = () => setAgremment(!agreement);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     let name = document.getElementById("name").value;
//     let userid = document.getElementById("userid").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     if (name == "" || userid == "" || email == "" || password == "") {
//       if (!toast.isActive(toastId.current)) {
//         toastId.current = toast.warning("Mandatory field(s) missing!");
//       }
//     } else {
//       const data = {
//         action: "userRegistration",
//         name: name,
//         userid: userid,
//         email: email,
//         password: password,
//       };

//       authUserRegistration(JSON.stringify(data))
//         .then(
//           function (response) {
//             var res = response.data;
//             console.log(res);
//             if (res.status == "true" && res.code == "200") {
//               MySwal.fire({
//                 title: <strong>Success</strong>,
//                 html: <i>User Created successfully!</i>,
//                 icon: "success",
//               }).then(() => {
//                 window.location.reload();
//               });
//             } else {
//             }
//           }.bind(this)
//         )
//         .catch(function (error) {
//           setLoader(false);
//           console.log(error);
//         });
//     }
//   };

//   return (
//     <BasicLayout title="Welcome!" description="User Registration" image={curved6}>
//       <ToastContainer />
//       {userAccess == "superadmin" ? (
//         <Card>
//           <SoftBox p={3} mb={1} textAlign="center">
//             <SoftTypography variant="h5" fontWeight="medium">
//               Register with
//             </SoftTypography>
//           </SoftBox>

//           <SoftBox pt={2} pb={3} px={3}>
//             <SoftBox>
//               <form noValidate onSubmit={handleSubmit}>
//                 <SoftBox mb={2}>
//                   <SoftInput placeholder="Name" name="name" id="name" />
//                 </SoftBox>
//                 <SoftBox mb={2}>
//                   <SoftInput placeholder="USER ID" name="userid" id="userid" />
//                 </SoftBox>
//                 <SoftBox mb={2}>
//                   <SoftInput type="email" placeholder="Email" name="email" id="email" />
//                 </SoftBox>
//                 <SoftBox mb={2}>
//                   <SoftInput type="password" placeholder="Password" name="password" id="password" />
//                 </SoftBox>

//                 <SoftBox mt={4} mb={1}>
//                   <SoftButton variant="gradient" color="dark" fullWidth type="submit">
//                     sign up
//                   </SoftButton>
//                 </SoftBox>
//               </form>
//               <SoftBox mt={3} textAlign="center">
//                 <SoftTypography variant="button" color="text" fontWeight="regular">
//                   <SoftTypography
//                     component={Link}
//                     to="/dashboard"
//                     variant="button"
//                     color="dark"
//                     fontWeight="bold"
//                     textGradient
//                   >
//                     Go Back
//                   </SoftTypography>
//                 </SoftTypography>
//               </SoftBox>
//             </SoftBox>
//           </SoftBox>
//         </Card>
//       ) : null}
//     </BasicLayout>
//   );
// }

// export default SignUp;
