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
import { Link, useNavigate } from "react-router-dom";
// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import Icon from "@mui/material/Icon";
// Soft UI Dashboard React components
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import SoftButton from "components/SoftButton";
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import BillingInformation2 from "layouts/billing/components/BillingInformation2";
import Transactions from "layouts/billing/components/Transactions";

function Billing() {
  const[block1,setBlock1] = useState(false);
  const[userAccess,setUserAccess] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('userid_details')) { 
    let session = localStorage.getItem('userid_details');
    let userid_array =JSON.parse(session);
    let userid = userid_array.userid;
    let user_type = userid_array.user_type;
    setUserAccess(user_type);
    }else{
      navigate('/');
    }
  })
  const handleApprover1 = async (event) => {
    alert('ok');   
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {userAccess=='superadmin' ?
      <SoftBox mt={4}>
        
        <SoftBox mb={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Grid container spacing={3}>
                {/* <Grid item xs={12} xl={6}>
                  <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22" />
                </Grid> */}
                
                
                <Grid item xs={12}>
                  <PaymentMethod />
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item xs={12} lg={4}>
              <Invoices />
            </Grid> */}
          </Grid>
        </SoftBox>
        <SoftBox my={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={6}>
              <BillingInformation2 />
            </Grid>
            {/* <Grid item xs={12} md={5}>
              <Transactions />
            </Grid> */}
          </Grid>
        </SoftBox>
        
      </SoftBox>
      : 'You do not have the access of this module!' }
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
