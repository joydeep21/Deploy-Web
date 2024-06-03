// Soft UI Dashboard React layouts
import { useEffect, useState } from "react";
import Dashboard from "layouts/dashboard";
// import Tables from "layouts/report/index";
// import Billing from "layouts/billing";
// import VirtualReality from "layouts/virtual-reality";
// import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Agesum from "layouts/ageSum/index";
// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
// import App1 from "demo/Demo1";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
// import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";
// import Retrodata from "./layouts/retrodata/index";
import Banner from "./layouts/uploader/banner"
import AppLogo from "./layouts/uploader/applogo"
import AddAccount from "layouts/userAction/addAccount";
import Transation from "layouts/userAction/transation";
import SignUpBasic from "layouts/authentication/sign-in/index"

// import Demo from "./layouts/retrodata/newindex";
import Usercreation from "./layouts/authentication/components/usercreation/index";

import User from "layouts/users/User";
import TransationDelete from "layouts/action/transation";
import DeleteLogo from "layouts/action/deletelogo";
import DeleteBanner from "layouts/action/deletebanner";
import UserEdit from "layouts/action/user";
// useEffect(() => {
//   setTimeout(() => {
//     setIsLoading(false);
//   }, 200);
//   // console.log("dctcvgfcbvb1111111111====>>>",event);

//   var getUserData = localStorage.getItem("userDetails");
//   var userData = cryptojs.AES.decrypt(getUserData, "ifbHad").toString(cryptojs.enc.Utf8);
//   var jsonData = JSON.parse(userData);
//   var moduleAccess = jsonData.module_access;
//   var arr = moduleAccess.split(",");
//   setModule(arr);
//   console.log("datas>>>", arr);
// }, []);
// const routes = [
//   {
//     type: "collapse",
//     name: "Dashboard",
//     key: "Dashboard",
//     route: "/dashboard",
//     icon: <Shop size="12px" />,
//     component: <Dashboard />,
//     noCollapse: true,
//   },
//   {
//     type: "collapse",
//     name: "One Pager",
//     key: "One Pager",
//     icon: <Office size="12px" />,
//     collapse: [
//       {
//         name: "Summary",
//         key: "Summary",
//         route: "/Summary",
//         component: <Tables />,
//       },
//       {
//         name: "Retro Data",
//         key: "Retro Data",
//         route: "/retrodata",
//         component: <Retrodata />,
//       },
//       {
//         name: "Age Sum",
//         key: "Age Sum",
//         route: "/age-sum",
//         component: <Agesum />,
//       },
//     ],
//   },
//   {
//     type: "collapse",
//     name: "Setting",
//     key: "Setting",
//     icon: <Cube size="12px" />,
//     collapse: [
//       {
//         name: "Create user",
//         key: "Create user",
//         route: "/create-user",
//         component: <Usercreation />,
//       },
//       {
//         name: "User Table",
//         key: "User Table",
//         route: "/userlist",
//         component: <User />,
//       },
//     ],
//   },
//   {
//     type: "collapse",
//     name: "Profile",
//     key: "Profile",
//     route: "/profile",
//     icon: <CustomerSupport size="12px" />,
//     component: <Profile />,
//     noCollapse: true,
//   },
//   {
//     name: "Sign In",
//     key: "sign-in",
//     route: "/authentication/sign-in",
//     component: <SignIn />,
//     noCollapse: false,
//   },
// ];
const routes = [
  { type: "title", title: "Uploader", key: "title-pages" },
  {
    type: "collapse",
    name: "Uploader",
    key: "uploader",
    icon: <Shop size="12px" />,
    collapse: [
      {
        name: "Banner",
        key: "banner",
        route: "/Uploader/banner",
        component: <Banner />,
      },
      {
        name: "App Logo",
        key: "automotive",
        route: "/Uploader/appLogo",
        component: <AppLogo />,
      }
    ],
  },
  { type: "divider", key: "divider-1" },
  { type: "title", title: "User Actions", key: "title-docs" },
  {
    type: "collapse",
    name: "User-Actions",
    key: "user-Actions",
    icon: <Shop size="12px" />,
    collapse: [
      {
        name: "AddAcount",
        key: "addAccount",
        route: "/user-Actions/addAcount",
        component: <AddAccount />,
      },
      {
        name: "Transation",
        key: "transation",
        route: "/user-Actions/transation",
        component: <Transation />,
      },
      {
        name: "Delete-Transation",
        key: "delete-transation",
        route: "/user-Actions/delete-transation",
        component: <TransationDelete />,
      },
      {
        name: "Delete-Logo",
        key: "delete-logo",
        route: "/user-Actions/delete-logo",
        component: <DeleteLogo />,
      },
      {
        name: "Delete-Banner",
        key: "delete-banner",
        route: "/user-Actions/delete-banner",
        component: <DeleteBanner />,
      },
      {
        name: "User-Edit",
        key: "user-edit",
        route: "/user-Actions/user-edit",
        component: <UserEdit />,
      }
    ],
  },
  { type: "divider", key: "divider-1" },
  { type: "title", title: "Authentication", key: "title-docs" },
  
  {
    type: "collapse",
    name: "Authentication",
    key: "authentication",
    collapse: [
  
      {
        name: "Sign Up",
        key: "sign-up",
        route: "/",
        component: <SignUpBasic />,
        noCollapse: false,
      }
    ],
  
},
];


export default routes;




