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

// @mui material components
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import {
  authGetFirstApprovarList,
  authGetFinalApprovarList,
} from "../../../../assets/globalAPI/GlobalApi";
// Billing page components
import Bill from "layouts/billing/components/Bill";
import list from "assets/theme/components/list";

function BillingInformation() {
  const [loader, setLoader] = useState(false);
  const [approvarlist, setList] = useState([]);
  const [arrayCount, setArrayCount] = useState(0);
  useEffect(() => {
    const data = {
      action: "getApproverList",
      approvar_type: "Lev-1",
    };
    const data1 = {
      action: "getApproverList",
      approvar_type: "Lev-2",
    };
    authGetFirstApprovarList(JSON.stringify(data))
      .then(
        function (response) {
          var res = response.data;
          console.log(res);
          if (res.status == "true" && res.code == "200") {
            setList(res.array);
            setArrayCount(res.array.length);
          }
        }.bind(this)
      )
      .catch(function (error) {
        setLoader(false);
        console.log(error);
      });
    //console.log(list);
  }, []);
  return (
    <Card id="delete-account">
      {arrayCount > 0 ? (
        <SoftBox pt={3} px={2}>
          <SoftTypography variant="h6" fontWeight="medium">
            First Approvar Information
          </SoftTypography>
        </SoftBox>
      ) : null}
      {arrayCount > 0 ? (
        <SoftBox pt={1} pb={2} px={2}>
          <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            {approvarlist.map((item, idx) => {
              return (
                <Bill
                  key={idx}
                  name={item.name}
                  userid={item.userid}
                  email={item.email}
                  type={item.user_type}
                />
              );
            })}
          </SoftBox>
        </SoftBox>
      ) : null}
    </Card>
  );
}

export default BillingInformation;
