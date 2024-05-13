// /* eslint-disable react/prop-types */
// // Soft UI Dashboard React components
// import React, { useState, useEffect } from "react";
// import SoftBox from "components/SoftBox";
// import SoftTypography from "components/SoftTypography";
// import SoftAvatar from "components/SoftAvatar";
// import SoftBadge from "components/SoftBadge";
// import { authGetCustomer } from "../../../assets/globalAPI/GlobalApi";
// // Images
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

// function Author({ image, name, email }) {
//   const [loader, setLoader] = useState(false);
//   const [customerlist, setCustomerList] = useState({});
//   useEffect(() => {
//     const data = {
//       action: "getCustomer",
//     };
//     authGetCustomer(JSON.stringify(data))
//       .then(
//         function (response) {
//           var res = response.data;
//           console.log(res);
//           if (res.status == "true" && res.code == "200") {
//             setCustomerList(res.customer_details);
//           } else {
//             setCustomerList(res.customer_details);
//           }
//         }.bind(this)
//       )
//       .catch(function (error) {
//         setLoader(false);
//         console.log(error);
//       });
//   });

//   return (
//     <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
//       <SoftBox display="flex" flexDirection="column">
//         <SoftTypography variant="button" fontWeight="medium">
//           {name}
//         </SoftTypography>
//         <SoftTypography variant="caption" color="secondary">
//           {email}
//         </SoftTypography>
//       </SoftBox>
//     </SoftBox>
//   );
// }

// const authorsTableData = {
//   columns: [
//     { name: "name", align: "left" },
//     { name: "customer_account", align: "left" },
//     { name: "gstn", align: "center" },
//     { name: "pan", align: "center" },
//     { name: "created_at", align: "center" },
//     { name: "status", align: "center" },
//     { name: "action", align: "center" },
//   ],

//   rows: [
//     {
//       name: <Author name="John Michael" email="john@creative-tim.com" />,
//       customer_account: (
//         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
//           23/04/18
//         </SoftTypography>
//       ),
//       gstn: (
//         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
//           23/04/18
//         </SoftTypography>
//       ),
//       pan: (
//         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
//           23/04/18
//         </SoftTypography>
//       ),
//       created_at: (
//         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
//           23/04/18
//         </SoftTypography>
//       ),
//       status: (
//         <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
//       ),
//       action: (
//         <SoftTypography
//           component="a"
//           href="#"
//           variant="caption"
//           color="secondary"
//           fontWeight="medium"
//         >
//           View
//         </SoftTypography>
//       ),
//     },
//   ],
// };

// export default authorsTableData;
