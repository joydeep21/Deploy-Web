// // @mui material components
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Card from "@mui/material/Card";
// import Table from "react-bootstrap/Table";
// import TableContainer from "@mui/material/TableContainer";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import * as FileSaver from "file-saver";
// import XLSX from "sheetjs-style";
// //import ReactExport from 'react-export-excel';
// // Soft UI Dashboard React components
// import SoftBox from "components/SoftBox";
// import SoftTypography from "components/SoftTypography";
// import SoftBadge from "components/SoftBadge";
// import "index.css";
// // Soft UI Dashboard React examples
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// //import Table from "examples/Tables/Table";
// //import DataTable from "examples/Tables/DataTable";
// // import {
// //   authGetCustomer,
// //   authGetCustomerDetails,
// //   authSaveApprovalStatus,
// // } from "../../assets/globalAPI/GlobalApi";
// // Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";
// import { ToastContainer, toast } from "react-toastify";
// function RTL() {
//   const navigate = useNavigate();
//   const [userAccess, setUserAccess] = useState("");
//   const toastId = React.useRef(null);
//   const fileType =
//     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset-UTF-8";
//   const fileExtension = ".xlsx";
//   //const fileName = 'test';
//   // const ExcelExportData = [
//   //   {
//   //     "First Name": "Rahul",
//   //     "Last Name": "Sinha",
//   //   }
//   // ];
//   const [customerlist, setCustomerList] = useState([]);
//   const [customerDetails, setCustomerDetails] = useState([]);
//   const [lgShow, setLgShow] = useState(false);
//   const [show, setShow] = useState(false);
//   const [approvalStatus, setApprovalStatus] = useState("");
//   const [customerid, setcustomerid] = useState("");
//   const [state, setState] = useState({
//     email: "",
//     comment: "",
//   });
//   useEffect(() => {
//     if (localStorage.getItem("userid_details")) {
//       let session = localStorage.getItem("userid_details");
//       let userid_array = JSON.parse(session);
//       let userid = userid_array.userid;
//       let user_type = userid_array.user_type;
//       setUserAccess(user_type);
//     } else {
//       navigate("/");
//     }
//     const data = {
//       action: "getCustomerApproved",
//     };
//     authGetCustomer(JSON.stringify(data))
//       .then(
//         function (response) {
//           var res = response.data;

//           if (res.status == "true" && res.code == "200") {
//             //console.log(res.customer_details);
//             setCustomerList(res.customer_details);
//           } else {
//             setCustomerList(res.customer_details);
//           }
//         }.bind(this)
//       )
//       .catch(function (error) {
//         console.log(error);
//       });
//   }, []);

//   const handleInputChange = (event) => {
//     //console.log(event.target.value);
//     const { name, value } = event.target;
//     setState((prevProps) => ({
//       ...prevProps,
//       [name]: value,
//     }));
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let session = localStorage.getItem("userid_details");
//     let userid_array = JSON.parse(session);
//     let userid = userid_array.userid;
//     state["action"] = "saveApproval";
//     state["status"] = approvalStatus;
//     state["customerid"] = customerid;
//     state["userid"] = userid;

//     authSaveApprovalStatus(JSON.stringify(state))
//       .then(
//         function (response) {
//           var res = response.data;

//           if (res.status == "true" && res.code == "200") {
//             setShow(false);
//           } else {
//           }
//         }.bind(this)
//       )
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   const approveHandle = async (id, status) => {
//     setShow(true);
//     setApprovalStatus(status);
//     setcustomerid(id);
//   };
//   const viewCustomerDetails = async (id) => {
//     const data = {
//       action: "getCustomerFullDetails",
//       id: id,
//     };
//     authGetCustomerDetails(JSON.stringify(data))
//       .then(
//         function (response) {
//           var res = response.data;

//           if (res.status == "true" && res.code == "200") {
//             //console.log(res.customer_details);
//             setCustomerDetails(res.customer_details);
//             setLgShow(true);
//           } else {
//             setCustomerDetails(res.customer_details);
//           }
//         }.bind(this)
//       )
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
//   const exportToExcel = async (fileName, id) => {
//     const customerData = {
//       action: "getCustomerFullDetails",
//       id: id,
//     };
//     authGetCustomerDetails(JSON.stringify(customerData))
//       .then(
//         function (response) {
//           var res = response.data;

//           if (res.status == "true" && res.code == "200") {
//             //console.log(res.customer_details);
//             setCustomerDetails(res.customer_details);
//             const ExcelExportData = [
//               {
//                 "Company Code": res.customer_details.company_code,
//                 "Sales Organization": res.customer_details.sales_organization,
//                 "Distribution Channel": res.customer_details.distribution_channel,
//                 Division: res.customer_details.division,
//                 "Customer Account Group": res.customer_details.customer_account_group,
//                 "Name 1": res.customer_details.name1,
//                 "Name 2": res.customer_details.name2,
//                 "Name 3": res.customer_details.name3,
//                 "Name 4": res.customer_details.name4,
//                 "Search Term 1": res.customer_details.search_term1,
//                 "Street 2": res.customer_details.street2,
//                 "Street 3": res.customer_details.street3,
//                 Street: res.customer_details.street,
//                 District: res.customer_details.district,
//                 "City postal code": res.customer_details.postal_code,
//                 City: res.customer_details.city,
//                 "Country Key": res.customer_details.country,
//                 Region: res.customer_details.region,
//                 "Language Key": res.customer_details.language,
//                 "Telephone No": res.customer_details.telephone,
//                 Mobile: res.customer_details.mobile,
//                 FAX: res.customer_details.fax,
//                 "E-Mail Address": res.customer_details.email,
//                 "Address notes": res.customer_details.name2,
//                 "Attribute 1": res.customer_details.attribute1,
//                 "Attribute 3": res.customer_details.attribute2,
//                 "Permanent Account Number": res.customer_details.pan,
//                 "PAN Reference Number": res.customer_details.pan_reference,
//                 GSTN: res.customer_details.gstn,
//                 "Industry key": res.customer_details.industry_key,
//                 "Industry Code 1": res.customer_details.industry_code1,
//                 "Reconciliation Account in General Ledger": res.customer_details.general_ledger,
//                 "Sales District": res.customer_details.sales_district,
//                 "Sales Office": res.customer_details.sales_office,
//                 "Sales Group": res.customer_details.sales_group,
//                 Currency: res.customer_details.currency,
//                 "Pricing procedure assigned to this customer":
//                   res.customer_details.pricing_procedure,
//                 "Customer Statistics Group": res.customer_details.customer_statistic_group,
//                 "Shipping Conditions": res.customer_details.shipping_condition,
//                 Indicator: res.customer_details.indicator,
//                 "Incoterms (Part 1)": res.customer_details.incoterms1,
//                 "Incoterms (Part 2)": res.customer_details.incoterms2,
//                 "Terms of Payment Key": res.customer_details.payment_key,
//                 "Credit Control Area": res.customer_details.name2,
//                 "Account assignment group for this customer": res.customer_details.name2,
//                 "Tax classification 1": res.customer_details.tax_classification1,
//                 "Tax classification 2": res.customer_details.tax_classification2,
//                 "Tax classification 3": res.customer_details.tax_classification3,
//                 "Tax classification 4": res.customer_details.tax_classification4,
//                 "Tax classification 5": res.customer_details.tax_classification5,
//                 "Tax classification 6": res.customer_details.tax_classification6,
//                 "Partner Function": res.customer_details.partner_function,
//                 "Number of an SD business partner": res.customer_details.business_partner,
//               },
//             ];
//             const ws = XLSX.utils.json_to_sheet(ExcelExportData);
//             const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
//             const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
//             const data = new Blob([excelBuffer], { type: fileType });
//             FileSaver.saveAs(data, fileName + fileExtension);
//           } else {
//             if (!toast.isActive(toastId.current)) {
//               toastId.current = toast.warning("No record found! Please try again.");
//             }
//           }
//         }.bind(this)
//       )
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
//   return (
//     <DashboardLayout>
//       <ToastContainer />
//       <DashboardNavbar />
//       {userAccess == "superadmin" || userAccess == "support" ? (
//         <Table striped bordered hover size="sm" style={{ fontSize: 13 }}>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Customer Account Group</th>
//               <th>GSTN</th>
//               <th>PAN</th>
//               <th>Create At</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {customerlist.map((item, idx) => {
//               return (
//                 <tr key={idx}>
//                   <td>{item.name}</td>
//                   <td>{item.email}</td>
//                   <td>{item.customer_account_group}</td>
//                   <td>{item.gstn}</td>
//                   <td>{item.pan}</td>
//                   <td>{item.created_at}</td>
//                   <td>
//                     {item.status == "Approved" ? (
//                       <span style={{ color: "green" }}>Approved</span>
//                     ) : null}
//                   </td>
//                   <td>
//                     <Button
//                       variant="primary"
//                       size="sm"
//                       onClick={(e) => exportToExcel(item.name, item.id)}
//                     >
//                       Export to Excel
//                     </Button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       ) : (
//         "You do not have the access of this module!"
//       )}
//     </DashboardLayout>
//   );
// }

// export default RTL;
