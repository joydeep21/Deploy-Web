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
import React, { useState,useEffect } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { ToastContainer, toast } from 'react-toastify';
import { Bars } from 'react-loader-spinner';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import SoftInput from "components/SoftInput";
import Tooltip from "@mui/material/Tooltip";
import $ from 'jquery';
// Soft UI Dashboard React components
import SoftSelect from "components/SoftSelect";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import { authApprovarCreation,authDistributionChannel } from '../../../../assets/globalAPI/GlobalApi';
// Soft UI Dashboard React base styles
import borders from "assets/theme/base/borders";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "assets/images/logos/visa.png";

function PaymentMethod() {
  const MySwal = withReactContent(Swal);
  const { borderWidth, borderColor } = borders;
  const[rows,setRows] = useState([]);
  const[distributionChannel,setDistributionChannel] = useState({});
  const[approvar,setApprovar] = useState([]);
  const [loader,setLoader] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);
    let your_array = [];
    $('#approvar_block .first_approvar').each(function(row, tr) {
      your_array.push({
        name: $(tr).find("input[name=name]").val(),
        email: $(tr).find("input[name=email]").val(),
        userid: $(tr).find("input[name=userid]").val(),
        approver_type: $(tr).find("input[name=approver_type]").val(),
        dc: $(tr).find("input[name=dc]").val()
      });  
    });
    const data = {
      "action": "save_approvar",
      "approvar_list": your_array
    }
    console.log(data);
    console.log(your_array);

    authApprovarCreation(JSON.stringify(data)).then(function(response) {
      var res = response.data;
      console.log(res);
        if(res.status=='true' && res.code=='200')
        {
          setLoader(false);
          

          MySwal.fire({
            title: <strong>Success</strong>,
            html: <i>Approvar Created successfully!</i>,
            icon: 'success',
           
          }
          ).then(() =>{
            window.location.reload();
          })



        }else{
         
      }
      }.bind(this)
    )
    .catch(function(error) {
    setLoader(false)
    console.log(error);
    
    });


  }
const handleRemove = (idx) => (event) => {
  const newArray = [...rows];
  newArray.splice(idx,1);
  setRows(newArray);
}
const handleAddRow = async (event) => {
  const item = {
    name: "",
    email: "",
    userid: "",
    dc: "",
    approver_type: ""
  };

  setRows(rows => [...rows, item]);
  console.log(JSON.stringify(rows));
  const data = {
    "action": 'distributionChannel'
  };

  authDistributionChannel(JSON.stringify(data)).then(function(response) {
    var res = response.data;
      if(res.status=='true' && res.code=='200')
      {
        setDistributionChannel(res.array);
      }else{
        setDistributionChannel(res.array);
    }
    }.bind(this)
)
.catch(function(error) {
  setLoader(false)
  console.log(error);

});





}
  return (
    <Card id="delete-account">
      <ToastContainer />
      <SoftBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <SoftTypography variant="h6" fontWeight="medium">
          Approvar
        </SoftTypography>
        <SoftButton variant="gradient" color="dark" onClick={handleAddRow}>
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;add new approvar
        </SoftButton>
      </SoftBox>
      <SoftBox p={2} id="approvar_block">
      <form noValidate onSubmit={handleSubmit}>
      {rows.map((item, idx) => {
return <Grid container key={idx} spacing={3} lineHeight={3} className="first_approvar">
          <Grid item xs={12} md={2}>
            <SoftBox> 
              <SoftInput 
                 type="text"
                 name="name"
                 id={"name" + idx}
                 placeholder="Name"
                 size="medium"                
                 inputProps={{maxLength: "100"}}
                  />
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={2}>
          <SoftBox> 
              <SoftInput 
                 type="email"
                 name="email"
                 id={"email" + idx}
                 placeholder="Email"
                 size="medium"                
                 inputProps={{maxLength: "100"}}
                  />
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={2}>
          <SoftBox> 
              <SoftInput 
                 type="text"
                 name="userid"
                 id={"userid" + idx}
                 placeholder="SAP USer ID"
                 size="medium"                
                 inputProps={{maxLength: "100"}}
                  />
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={2}>
          <SoftBox>
          <SoftSelect
                  name="approver_type"
                  options={[
                    { value: "Lev-1", label: "Lev-1" },
                    { value: "Lev-2", label: "Lev-2" }
                  ]}
                  
                />   
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={2}>
          <SoftBox>
          <SoftSelect
                  name="dc"
                  options={distributionChannel}
                  
                />   
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={2}>
          <SoftBox>
          <SoftButton variant="text" color="error" onClick={handleRemove(idx)}>
                <Icon>delete</Icon>&nbsp;delete
              </SoftButton>
            </SoftBox>
          </Grid>
      </Grid>
       })}

        
              <SoftBox display="flex" justifyContent="flex-end">
                <SoftButton variant="gradient" color="info" type="submit">
                  save
                </SoftButton>
                
              </SoftBox>
              </form>
      </SoftBox>
    </Card>
  );
}

export default PaymentMethod;
