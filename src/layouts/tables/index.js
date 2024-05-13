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
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { ToastContainer, toast } from 'react-toastify';
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { Bars } from 'react-loader-spinner'
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import SoftSelect from "components/SoftSelect";
import { ThreeDots } from 'react-loader-spinner'
// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { authDistributionChannel, authDivision, authAccountGroup, authSalesOrganization, authPostalCodeMaster, authGeoMapping, authIndustryCode,authAccountAssignmentGroup,authCustomerCreation, authGSTNIntegration, getGSTValidation} from '../../assets/globalAPI/GlobalApi';
function Tables() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  const toastId = React.useRef(null);
  const[userAccess,setUserAccess] = useState('');
  const[category,setCategory] = useState({ value: "Masters", label: "Masters" });
const[companyCode,setCompanyCode] = useState({ value: "3000", label: "3000" });
const[salesOrganization,setSalesOrganization] = useState({});
const[loaderspinner,setLoaderSpinner] = useState(false);
const[SalesOrganizationValidation,setSalesOrganizationValidation] = useState(false);
const[distributionChannel,setDistributionChannel] = useState({});
const[selectDistributionChannel,setSelectDistributionChannel] = useState('');
const[selectDivision,setSelectDivision] = useState('');
const[selectRegion,setSelectRegion] = useState('');
const[DistributionChannelvalidation,setDistributionChannelvalidation] = useState(false);
const[panValidation,setPanValidation] = useState(false);
const[division,setDivision] = useState({});
const[accountGroup,setAccountGroup] = useState({});
const[selectedAccountGroup,setSelectedAccountGroup] = useState('');
const[accountGroupValidation,setaccountGroupValidation] = useState(false);
const[street,setStreet] = useState({});
const[selectstreet,setSelectStreet] = useState('');
const[city1,setCity1] = useState({});
const[selectcity1,setSelectcity1] = useState('');
const[city2,setCity2] = useState({});
const[selectDistrict,setSelectDistrict] = useState('');
const[accountAssignmentGroup,setAccountAssignmentGroup] = useState({});

const[postalCode,setPostalCode] = useState({});
const[region,Setregion] = useState({ value: "", label: "Select option" });
const[salesDistrict,setSalesDistrict] = useState({ value: "", label: "Select option" });
const[salesOffice,setSalesOffice] = useState({ value: "", label: "Select option" });
const[salesGroup,setSalesGroup] = useState({ value: "", label: "Select option" });
const[name,setName] = useState("");
const[selectname1,setSelectName1] = useState(false);
const[selectname3,setSelectName3] = useState(false);

const[selectMobile,setSelectMobile] = useState('');
const[selectEmail,setSelectEmail] = useState('');
const[selectPAN,setSelectPAN] = useState('');
const[selectGSTN,setSelectGSTN] = useState('');
const[selectIndustryCode,setSelectIndustryCode] = useState('');
const[selectLedger,setSelectLedger] = useState('');
const[selectSalesGroup,setSelectSalesGroup] = useState('');
const[selectCustomerGroup,setSelectCustomerGroup] = useState('');
const[selectShippingCondition,setSelectShippingCondition] = useState('');
const[selectIndicator,setSelectIndicator] = useState('');
const[selectIncoterms1,setSelectIncoterms1] = useState('');
const[selectIncoterms2,setSelectIncoterms2] = useState('');
const[selectPaymentKey,setSelectPaymentKey] = useState('');
const[selectCreditControl,setSelectCreditControl] = useState('');
const[selectAssignmentGroup,setSelectAssignmentGroup] = useState('');
const[selectTAXClassification1,setSelectTAXClassification1] = useState('');
const[selectTAXClassification2,setSelectTAXClassification2] = useState('');
const[selectSalesOrganization,setSelectSalesOrganization] = useState('');
const[validationStatus,setvalidationStatus] = useState('');
const[industryCode,setIndustryCode] = useState({});
const [loader,setLoader] = useState(false);
const [formValues, setFormValues] = useState({
  name1:{
    value:'',
    error:false
  },
  name2:{
    value:''
  },
  name3:{
    value:'',
    error:false
  },
  name4:{
    value:''
  },
  customer_account_group:{
    value:'',
    error:false
  },
  distribution_channel:{
    value:'',
    error:false
  },
  division:{
    value:'',
    error:false
  },
  region:{
    value:'',
    error:false
  },
  mobile:{
    value:'',
    error:false
  },
  email:{
    value:'',
    error:false
  },
  pan:{
    value:'',
    error:false
  },
  gstn:{
    value:'',
    error:false
  },
  industry_code1:{
    value:'',
    error:false
  },
  general_ledger:{
    value:'',
    error:false
  },
  sales_group:{
    value:'',
    error:false
  },
  currency:{
    value:'',
    error:false
  },
  customer_statistic_group:{
    value:'',
    error:false
  },
  shipping_condition:{
    value:'',
    error:false
  },
  indicator:{
    value:'',
    error:false
  },
  incoterms1:{
    value:'',
    error:false
  },
  incoterms2:{
    value:'',
    error:false
  },
  payment_key:{
    value:'',
    error:false
  },
  credit_control_area:{
    value:'',
    error:false
  },
  account_assignment_group:{
    value:'',
    error:false
  },
  tax_classification1:{
    value:'',
    error:false
  },
  tax_classification2:{
    value:'',
    error:false
  },
  attribute1:{
    value:''
  },
  attribute2:{
    value:''
  },
  sales_district:{
    value:''
  },
  sales_office:{
    value:''
  },
  pricing_procedure:{
    value:''
  },
  tax_classification3:{
    value:''
  },
  tax_classification4:{
    value:''
  },
  tax_classification5:{
    value:''
  },
  tax_classification6:{
    value:''
  },
  business_partner:{
    value:'',
    error:false
  },
  partner_function:{
    value:'',
    error:false
  },
  fax:{
    value:''
  },
  currency:{
    value:''
  },
  industry_key:{
    value:''
  },
  comment:{
    value:''
  },
  telephone:{
    value:''
  },
  language:{
    value:''
  },
  country:{
    value:''
  },
  street2:{
    value:''
  },
  street1:{
    value:''
  },
  street:{
    value:''
  },
  district:{
    value:''
  },
  city:{
    value:''
  },
  postal_code:{
    value:''
  },
  search_term1:{
    value:''
  },
  company_code:{
    value:''
  },
  sales_organization:{
    value:'',
    error:false
  }
})
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
    if(userAccess=='superadmin')
    {
    document.getElementById( 'lifnr' ).style.display = 'none';
    }
  const group_data = {
    "action": 'account_group'
  };

  const sales_org_data = {
    "action": 'sales_organization'
  };

  const street_data = {
    "action": 'street_master'
  };

//   authDistributionChannel(JSON.stringify(data)).then(function(response) {
//     var res = response.data;
//       if(res.status=='true' && res.code=='200')
//       {
//         setDistributionChannel(res.array);
//       }else{
//         setDistributionChannel(res.array);
//     }
//     }.bind(this)
// )
// .catch(function(error) {
//   setLoader(false)
//   console.log(error);

// });

// authDivision(JSON.stringify(division_data)).then(function(response) {
//   var res = response.data;
//     if(res.status=='true' && res.code=='200')
//     {
//       setDivision(res.array);
//     }else{
//       setDivision(res.array);
//   }
//   }.bind(this)
// )
// .catch(function(error) {
// setLoader(false)
// console.log(error);

// });

authAccountGroup(JSON.stringify(group_data)).then(function(response) {
  var res = response.data;
    if(res.status=='true' && res.code=='200')
    {
      setAccountGroup(res.array);
    }else{
      setAccountGroup(res.array);
  }
  }.bind(this)
)
.catch(function(error) {
setLoader(false)
console.log(error);

});


});
const handlePostalCode = (event) => {
  var postal_code = event.target.value;
  
  const data = {
    "action": 'geo_mapping',
    "postal_code" : postal_code
  };
  //console.log(data);
  authGeoMapping(JSON.stringify(data)).then(function(response) {
    var res = response.data;
      console.log(res);
      if(res.status=='true' && res.code=='200')
      {
        
        setCity1(res.city);
       
        setCity2(res.district);
        setStreet(res.street);
       
        
      }else{
        
    }
    }.bind(this)
)
.catch(function(error) {
  setLoader(false)
  console.log(error);

});
}

const handleStreetOnChange = async (event) => {
  
  setSelectStreet(event.value);
 
}
const handlePAN = async (event) => {
  formValues.pan.value = event.target.value;
  formValues.pan.error = false;
  var pan = event.target.value;
  var fourth_char = pan.charAt(3);
  if(fourth_char=='C')
  {
    setPanValidation(true);
  }else{
    
    setPanValidation(false);
  }
}
const handleChangeGSTN =async (event) => {
  formValues.gstn.value = event.target.value;
 
  const gstn_data = {
    "action": 'gstn_integration',
    "gstn" : event.target.value
  };

  authGSTNIntegration(JSON.stringify(gstn_data)).then(function(response) {
    var res = response.data;
      if(res.status=='true' && res.code=='200')
      {
        if(! toast.isActive(toastId.current)) {
          toastId.current = toast.warning("GSTN already exist!");  
        }
        
      }else{
        formValues.gstn.value = event.target.value;
        formValues.gstn.error = false;
        
    }
    }.bind(this)
  )
  .catch(function(error) {
  setLoader(false)
  console.log(error);  
  });


}
const handleChangeEmail =async (event) => {
  formValues.email.value = event.target.value;
  formValues.email.error = false;
}
const handleChangeIndicator =async (event) => {
  formValues.indicator.value = event.target.value;
  formValues.indicator.error = false;
}
const handleChangeMobile =async (event) => {
    formValues.mobile.value = event.target.value;
    formValues.mobile.error = false;
}
const handleNameChange3 =async (event) => {

    formValues.name3.value = event.target.value;
    formValues.name3.error = false;  
}

const handleChangePF =async (event) => {
  formValues.partner_function.value = event.target.value;
  formValues.partner_function.error = false;
}
const handleChangeBP =async (event) => {
  formValues.business_partner.value = event.target.value;
  formValues.business_partner.error = false;
}

const handleNameChange =async (event) => {
 
    formValues.name1.value = event.target.value;
    formValues.name3.value = event.target.value;
    formValues.name1.error = false;
    formValues.name3.error = false;
    document.getElementById("search_term1").value = event.target.value;
    document.getElementById("comment").value = event.target.value;
  

}
const handleChangeRegion = async (event) => {
  formValues.region.value = event.value;
  formValues.region.error = false;
  setSelectRegion(event.value);
}
const handleChangeTAXClassification3 = async (event) => {
  formValues.tax_classification3.value = event.value;
}
const handleChangeTAXClassification4 = async (event) => {
  formValues.tax_classification4.value = event.value;
}
const handleChangeTAXClassification5 = async (event) => {
  formValues.tax_classification5.value = event.value;
}
const handleChangeTAXClassification6 = async (event) => {
  formValues.tax_classification6.value = event.value;
}
const handleChangePricingProcedure = async (event) => {
  formValues.pricing_procedure.value = event.value;
}
const handleChangeSalesOffice = async (event) => {
  formValues.sales_office.value = event.value;
}
const handleChangeSalesDistrict = async (event) => {
  formValues.sales_district.value = event.value;
}
const handleChangeAttribute1 = async (event) => {
  formValues.attribute1.value = event.value;
}
const handleChangeAttribute2 = async (event) => {
  formValues.attribute2.value = event.value;
}

const handleChangeIndustryCode1 = async (event) => {
  formValues.industry_code1.value = event.value;
  formValues.industry_code1.error = false;
  setSelectIndustryCode(event.value);
}
const handleChangePaymentKey = async (event) => {
  formValues.payment_key.value = event.value;
  formValues.payment_key.error = false;
  setSelectPaymentKey(event.value);
}
const handleChangeIncoterms1 = async (event) => {
  formValues.incoterms1.value = event.value;
  formValues.incoterms1.error = false;
  setSelectIncoterms1(event.value);
}
const handleChangeIncoterms2 = async (event) => {
  formValues.incoterms2.value = event.value;
  formValues.incoterms2.error = false;
  setSelectIncoterms2(event.value);
}
const handleChangeCreditControl = async (event) => {
  formValues.credit_control_area.value = event.value;
  formValues.credit_control_area.error = false;
  setSelectCreditControl(event.value);
}
const handleChangeTAXClassification1 = async (event) => {
  formValues.tax_classification1.value = event.value;
  formValues.tax_classification1.error = false;
  setSelectTAXClassification1(event.value);
}
const handleChangeGeneralLedger = async (event) => {
  formValues.general_ledger.value = event.value;
  formValues.general_ledger.error = false;
  setSelectLedger(event.value);
}
const handleChangeAssignment = async (event) => {
  formValues.account_assignment_group.value = event.value;
  formValues.account_assignment_group.error = false;
  setSelectAssignmentGroup(event.value);
}
const handleChangeShippingCondition = async (event) => {
  formValues.shipping_condition.value = event.value;
  formValues.shipping_condition.error = false;
  setSelectShippingCondition(event.value);
}
const handleChangeSalesGroup = async (event) => {
  formValues.sales_group.value = event.value;
  formValues.sales_group.error = false;
  setSelectSalesGroup(event.value);
}
const handleChangeStatisticGroup = async (event) => {
  formValues.customer_statistic_group.value = event.value;
  formValues.customer_statistic_group.error = false;
  setSelectCustomerGroup(event.value);
}
const handleChangeTAXClassification2 = async (event) => {
  formValues.tax_classification2.value = event.value;
  formValues.tax_classification2.error = false;
  setSelectTAXClassification2(event.value);
}

const handleChangeValue = async (event) => {
  
  formValues.distribution_channel.value = event.value;
  formValues.distribution_channel.error = false;
  formValues.industry_key = event.value;
  document.getElementById('industry_key').value = event.value;
  setSelectDistributionChannel(event.value);
  let account_group = selectedAccountGroup;
  let dc = event.value;
  const data = {
    "action": "status_gstn_validation",
    "account_group" : account_group,
    "dc" : dc
  };

  getGSTValidation(JSON.stringify(data)).then(function(response) {
    var res = response.data;
      if(res.status=='true' && res.code=='200')
      {
        setvalidationStatus(res.gstn_validation);
      }else{
        setvalidationStatus(res.gstn_validation);
    }
    }.bind(this)
)
.catch(function(error) {
  
  console.log(error);

});


}
const handleChangeDivisionValue = async (event) => {
  formValues.division.value = event.value;
  formValues.division.error = false;
  setSelectDivision(event.value);
}
const handleOnChange = async (event) => {
  formValues.customer_account_group.value = event.value;
  formValues.customer_account_group.error = false;
  setSelectedAccountGroup(event.value);
  const data = {
    "action": 'distributionChannel'
  };
  const division_data = {
    "action": 'division'
  };
  const industry_code_data = {
    "action": 'industry_code'
  };

  const account_assignment_group_data = {
    "action": 'account_assignment_group'
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

authDivision(JSON.stringify(division_data)).then(function(response) {
  var res = response.data;
    if(res.status=='true' && res.code=='200')
    {
      setDivision(res.array);
    }else{
      setDivision(res.array);
  }
  }.bind(this)
)
.catch(function(error) {
setLoader(false)
console.log(error);

});

authIndustryCode(JSON.stringify(industry_code_data)).then(function(response) {
  var res = response.data;
    if(res.status=='true' && res.code=='200')
    {
      setIndustryCode(res.array);
    }else{
      setIndustryCode(res.array);
  }
  }.bind(this)
)
.catch(function(error) {
setLoader(false)
console.log(error);

});

authAccountAssignmentGroup(JSON.stringify(account_assignment_group_data)).then(function(response) {
  var res = response.data;
    if(res.status=='true' && res.code=='200')
    {
      setAccountAssignmentGroup(res.array);
    }else{
      setAccountAssignmentGroup(res.array);
  }
  }.bind(this)
)
.catch(function(error) {
setLoader(false)
console.log(error);

});

  if(event.value=='Z011')
  {
    document.getElementById( 'form_heading' ).innerHTML = 'Marketing-Customer Creation';
    setSalesOrganization({});
    setSalesOrganization({ value: "3000", label: "3000" });
    setSelectSalesOrganization('3000');
    
    document.getElementById( 'name3' ).style.display = 'block';
    document.getElementById( 'name4' ).style.display = 'block';
    document.getElementById( 'comments' ).style.display = 'block';
    document.getElementById( 'lifnr' ).style.display = 'none';
    document.getElementById( 'indicator' ).style.display = 'block';
    document.getElementById( 'marketing_rows' ).style.display = 'block';
  }else{
    document.getElementById( 'form_heading' ).innerHTML = 'Service-Customer Creation';
    setSalesOrganization({});
    setSalesOrganization({ value: "4000", label: "4000" });
    setSelectSalesOrganization("4000");
    document.getElementById( 'indicator' ).style.display = 'none';
    
    //formValues.name3.value = 'no need';
    formValues.indicator.value= '0';
    formValues.business_partner.value= 'NA';
    formValues.partner_function.value= 'NA';
    formValues.name3.value= 'NA';
    document.getElementById( 'name3' ).style.display = 'none';
    document.getElementById( 'name4' ).style.display = 'none';
    document.getElementById( 'comments' ).style.display = 'none';
    document.getElementById( 'lifnr' ).style.display = 'block';
    document.getElementById( 'marketing_rows' ).style.display = 'none';
    
 
  }
}
const handleChangeCity = async (event) => {
  setSelectcity1(event.value);
}
const handleChangeDistrict = async (event) => {
  setSelectDistrict(event.value);
}
const handleSubmit = async (event) => {

  event.preventDefault();
  
  const formFields = Object.keys(formValues);
    let newFormValues = {...formValues}
   
    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = formValues[currentField].value;
      
      if(currentValue === ''){
        newFormValues = {
          ...newFormValues,
          [currentField]:{
            ...newFormValues[currentField],
            error:true
          }
        }
      }

    }

    setFormValues(newFormValues) 
   
var company_code = "3000";
formValues.company_code.value = company_code;
var sales_organization = selectSalesOrganization;
formValues.sales_organization.value = sales_organization;
var name2 = document.getElementById('name_2').value;
formValues.name2.value = name2;
var name4 = document.getElementById('name_4').value;
formValues.name4.value = name4;
var search_term1 = document.getElementById('search_term1').value;
formValues.search_term1.value = search_term1;
var postal_code = document.getElementById('postal_code').value;
formValues.postal_code.value = postal_code;
var city = selectcity1;
formValues.city.value = city;
var district = selectDistrict;
formValues.district.value = district;
var street = selectstreet;
formValues.street.value = street;
var street1 = document.getElementById('street1').value;
formValues.street1.value = street1;
var street2 = document.getElementById('street2').value;
formValues.street2.value = street2;
var country = 'IN';
formValues.country.value = country;
var language = 'EN';
formValues.language.value = language;
var telephone = document.getElementById('telephone').value;;
formValues.telephone.value = telephone;
var fax = document.getElementById('fax').value;
formValues.fax.value = fax;
var comment = document.getElementById('comment').value;
formValues.comment.value = comment;
//var industry_key = document.getElementById('industry_key').value;
//formValues.industry_key.value = industry_key;
var currency = 'INR';
formValues.currency.value = currency;
var partner_function = document.getElementById('partner_function').value;
formValues.partner_function.value = partner_function;
var business_partner = document.getElementById('business_partner').value;
formValues.business_partner.value = business_partner;
//console.log(formValues);
if((formValues.customer_account_group.value=='' || formValues.customer_account_group.value==undefined) || (formValues.distribution_channel.value=='' || formValues.distribution_channel.value==undefined) || (formValues.division.value=='' || formValues.division.value==undefined) || (formValues.name1.value=='' || formValues.name1.value==undefined) || (formValues.name3.value=='' || formValues.name3.value==undefined) || (formValues.region.value=='' || formValues.region.value==undefined) || (formValues.mobile.value=='' || formValues.mobile.value==undefined) || (formValues.email.value=='' || formValues.email.value==undefined) || (formValues.pan.value=='' || formValues.pan.value==undefined) || (formValues.gstn.value=='' || formValues.gstn.value==undefined) || (formValues.industry_code1.value=='' || formValues.industry_code1.value==undefined) || (formValues.general_ledger.value=='' || formValues.general_ledger.value==undefined) || (formValues.sales_group.value=='' || formValues.sales_group.value==undefined) || (formValues.customer_statistic_group.value=='' || formValues.customer_statistic_group.value==undefined) || (formValues.shipping_condition.value=='' || formValues.shipping_condition.value==undefined) || (formValues.indicator.value=='' || formValues.indicator.value==undefined) || (formValues.incoterms1.value=='' || formValues.incoterms1.value==undefined) || (formValues.incoterms2.value=='' || formValues.incoterms2.value==undefined) || (formValues.payment_key.value=='' || formValues.payment_key.value==undefined) || (formValues.credit_control_area.value=='' || formValues.credit_control_area.value==undefined) || (formValues.account_assignment_group.value=='' || formValues.account_assignment_group.value==undefined) || (formValues.tax_classification1.value=='' || formValues.tax_classification1.value==undefined) || (formValues.tax_classification2.value=='' || formValues.tax_classification2.value==undefined) || (formValues.business_partner.value=='' || formValues.business_partner.value==undefined) || (formValues.partner_function.value=='' || formValues.partner_function.value==undefined) )
{
  if(! toast.isActive(toastId.current)) {
    toastId.current = toast.warning("Mandatory field(s) missing !");  
  }
}else{
  let gstn_validation_status = validationStatus;
  if(gstn_validation_status==1)
  {
    setLoaderSpinner(true);
    const gstn_data = {
      "action": 'gstn_integration',
      "gstn" : formValues.gstn.value
    };
  
    authGSTNIntegration(JSON.stringify(gstn_data)).then(function(response) {
      var res = response.data;
        if(res.status=='true' && res.code=='200')
        {
          setLoaderSpinner(false);
          if(! toast.isActive(toastId.current)) {
            toastId.current = toast.warning("GSTN already exist!");  
          }
          
        }else{
  
          //code
          setLoader(true);
    const data = {
      "action": 'save_customer',
      "customer_account_group" : formValues.customer_account_group.value,
      "company_code" : formValues.company_code.value,
      "sales_organization" : formValues.sales_organization.value,
      "distribution_channel" : formValues.distribution_channel.value,
      "division" : formValues.division.value,
      "name1" : formValues.name1.value,
      "name2" : formValues.name2.value,
      "name3" : formValues.name3.value,
      "name4" : formValues.name4.value,
      "search_term1" : formValues.search_term1.value,
      "postal_code" : formValues.postal_code.value,
      "city" : formValues.city.value,
      "district" : formValues.district.value,
      "street" : formValues.street.value,
      "street1" : formValues.street1.value,
      "street2" : formValues.street2.value,
      "country" : formValues.country.value,
      "region" : formValues.region.value,
      "language" : formValues.language.value,
      "telephone" : formValues.telephone.value,
      "mobile" : formValues.mobile.value,
      "fax" : formValues.fax.value,
      "email" : formValues.email.value,
      "comment" : formValues.comment.value,
      "attribute1" : formValues.attribute1.value,
      "attribute2" : formValues.attribute2.value,
      "pan" : formValues.pan.value,
      "gstn" : formValues.gstn.value,
      "industry_key" : formValues.industry_key.value,
      "industry_code1" : formValues.industry_code1.value,
      "general_ledger" : formValues.general_ledger.value,
      "sales_district" : formValues.sales_district.value,
      "sales_office" : formValues.sales_office.value,
      "sales_group" : formValues.sales_group.value,
      "currency": formValues.currency.value,
      "pricing_procedure" : formValues.pricing_procedure.value,
      "customer_statistic_group" : formValues.customer_statistic_group.value,
      "shipping_condition" : formValues.shipping_condition.value,
      "indicator" : formValues.indicator.value,
      "incoterms1" : formValues.incoterms1.value,
      "incoterms2" : formValues.incoterms2.value,
      "payment_key" : formValues.payment_key.value,
      "credit_control_area" : formValues.credit_control_area.value,
      "account_assignment_group" : formValues.account_assignment_group.value,
      "tax_classification1" : formValues.tax_classification1.value,
      "tax_classification2" : formValues.tax_classification2.value,
      "tax_classification3" : formValues.tax_classification3.value,
      "tax_classification4" : formValues.tax_classification4.value,
      "tax_classification5" : formValues.tax_classification5.value,
      "tax_classification6" : formValues.tax_classification6.value,
      "partner_function" : formValues.partner_function.value,
      "business_partner" : formValues.business_partner.value
      };
      //console.log(data);
    authCustomerCreation(JSON.stringify(data)).then(function(response) {
      var res = response.data;
        if(res.status=='true' && res.code=='200')
        {
          setLoader(false);
          MySwal.fire({
            title: <strong>Success</strong>,
            html: <i>Customer Created successfully!</i>,
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
      }.bind(this)
    )
    .catch(function(error) {
    setLoader(false)
    console.log(error);  
    });
  }else{
    //without gstn validation
    //code
    setLoader(true);
    const data = {
      "action": 'save_customer',
      "customer_account_group" : formValues.customer_account_group.value,
      "company_code" : formValues.company_code.value,
      "sales_organization" : formValues.sales_organization.value,
      "distribution_channel" : formValues.distribution_channel.value,
      "division" : formValues.division.value,
      "name1" : formValues.name1.value,
      "name2" : formValues.name2.value,
      "name3" : formValues.name3.value,
      "name4" : formValues.name4.value,
      "search_term1" : formValues.search_term1.value,
      "postal_code" : formValues.postal_code.value,
      "city" : formValues.city.value,
      "district" : formValues.district.value,
      "street" : formValues.street.value,
      "street1" : formValues.street1.value,
      "street2" : formValues.street2.value,
      "country" : formValues.country.value,
      "region" : formValues.region.value,
      "language" : formValues.language.value,
      "telephone" : formValues.telephone.value,
      "mobile" : formValues.mobile.value,
      "fax" : formValues.fax.value,
      "email" : formValues.email.value,
      "comment" : formValues.comment.value,
      "attribute1" : formValues.attribute1.value,
      "attribute2" : formValues.attribute2.value,
      "pan" : formValues.pan.value,
      "gstn" : formValues.gstn.value,
      "industry_key" : formValues.industry_key.value,
      "industry_code1" : formValues.industry_code1.value,
      "general_ledger" : formValues.general_ledger.value,
      "sales_district" : formValues.sales_district.value,
      "sales_office" : formValues.sales_office.value,
      "sales_group" : formValues.sales_group.value,
      "currency": formValues.currency.value,
      "pricing_procedure" : formValues.pricing_procedure.value,
      "customer_statistic_group" : formValues.customer_statistic_group.value,
      "shipping_condition" : formValues.shipping_condition.value,
      "indicator" : formValues.indicator.value,
      "incoterms1" : formValues.incoterms1.value,
      "incoterms2" : formValues.incoterms2.value,
      "payment_key" : formValues.payment_key.value,
      "credit_control_area" : formValues.credit_control_area.value,
      "account_assignment_group" : formValues.account_assignment_group.value,
      "tax_classification1" : formValues.tax_classification1.value,
      "tax_classification2" : formValues.tax_classification2.value,
      "tax_classification3" : formValues.tax_classification3.value,
      "tax_classification4" : formValues.tax_classification4.value,
      "tax_classification5" : formValues.tax_classification5.value,
      "tax_classification6" : formValues.tax_classification6.value,
      "partner_function" : formValues.partner_function.value,
      "business_partner" : formValues.business_partner.value
      };
      //console.log(data);
    authCustomerCreation(JSON.stringify(data)).then(function(response) {
      var res = response.data;
        if(res.status=='true' && res.code=='200')
        {
          setLoader(false);
          MySwal.fire({
            title: <strong>Success</strong>,
            html: <i>Customer Created successfully!</i>,
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
  
  

  // setLoader(true);
  // const data = {
  //   "action": 'save_customer',
  //   "customer_account_group" : formValues.customer_account_group.value,
  //   "company_code" : formValues.company_code.value,
  //   "sales_organization" : formValues.sales_organization.value,
  //   "distribution_channel" : formValues.distribution_channel.value,
  //   "division" : formValues.division.value,
  //   "name1" : formValues.name1.value,
  //   "name2" : formValues.name2.value,
  //   "name3" : formValues.name3.value,
  //   "name4" : formValues.name4.value,
  //   "search_term1" : formValues.search_term1.value,
  //   "postal_code" : formValues.postal_code.value,
  //   "city" : formValues.city.value,
  //   "district" : formValues.district.value,
  //   "street" : formValues.street.value,
  //   "street1" : formValues.street1.value,
  //   "street2" : formValues.street2.value,
  //   "country" : formValues.country.value,
  //   "region" : formValues.region.value,
  //   "language" : formValues.language.value,
  //   "telephone" : formValues.telephone.value,
  //   "mobile" : formValues.mobile.value,
  //   "fax" : formValues.fax.value,
  //   "email" : formValues.email.value,
  //   "comment" : formValues.comment.value,
  //   "attribute1" : formValues.attribute1.value,
  //   "attribute2" : formValues.attribute2.value,
  //   "pan" : formValues.pan.value,
  //   "gstn" : formValues.gstn.value,
  //   "industry_key" : formValues.industry_key.value,
  //   "industry_code1" : formValues.industry_code1.value,
  //   "general_ledger" : formValues.general_ledger.value,
  //   "sales_district" : formValues.sales_district.value,
  //   "sales_office" : formValues.sales_office.value,
  //   "sales_group" : formValues.sales_group.value,
  //   "currency": formValues.currency.value,
  //   "pricing_procedure" : formValues.pricing_procedure.value,
  //   "customer_statistic_group" : formValues.customer_statistic_group.value,
  //   "shipping_condition" : formValues.shipping_condition.value,
  //   "indicator" : formValues.indicator.value,
  //   "incoterms1" : formValues.incoterms1.value,
  //   "incoterms2" : formValues.incoterms2.value,
  //   "payment_key" : formValues.payment_key.value,
  //   "credit_control_area" : formValues.credit_control_area.value,
  //   "account_assignment_group" : formValues.account_assignment_group.value,
  //   "tax_classification1" : formValues.tax_classification1.value,
  //   "tax_classification2" : formValues.tax_classification2.value,
  //   "tax_classification3" : formValues.tax_classification3.value,
  //   "tax_classification4" : formValues.tax_classification4.value,
  //   "tax_classification5" : formValues.tax_classification5.value,
  //   "tax_classification6" : formValues.tax_classification6.value,
  //   "partner_function" : formValues.partner_function.value,
  //   "business_partner" : formValues.business_partner.value
  //   };
    
  // authCustomerCreation(JSON.stringify(data)).then(function(response) {
  //   var res = response.data;
  //     if(res.status=='true' && res.code=='200')
  //     {
  //       setLoader(false);
  //       MySwal.fire({
  //         title: <strong>Success</strong>,
  //         html: <i>Customer Created successfully!</i>,
  //         icon: 'success',
         
  //       }
  //       ).then(() =>{
  //         window.location.reload();
  //       })
  //     }else{
        
  //   }
  //   }.bind(this)
  // )
  // .catch(function(error) {
  // setLoader(false)
  // console.log(error);
  // });






  
}







}
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ToastContainer />
      
      <SoftBox py={3}>
      
    <Grid container spacing={3}>
       
          <Grid item xs={12} lg={12}>
          <Card sx={{ overflow: "visible" }}>
            {userAccess=='superadmin' ?
      <SoftBox p={3}>
         <form noValidate onSubmit={handleSubmit}>
        <SoftTypography variant="h5" id="form_heading">Customer Creation</SoftTypography>

        {loaderspinner? <div style={{position:'fixed', width: "100%",height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)',
  zIndex: 200000, display: 'flex', justifyContent: 'center', alignItems: 'center', top:'0px', left:'0px',
  }}>
     <ThreeDots     color="#fff" height={50} width={50}  timeout={1000} visible={loaderspinner} />

    </div>:""}





        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Customer Account Group *
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="customer_account_group"
                  
                  error={formValues.customer_account_group.error}
                  onChange={handleOnChange}
                  options={accountGroup}
                  
                />
                {/* <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                    color="error"
                  >
                    required!
                  </SoftTypography>
                </SoftBox> */}
              </SoftBox>
              
            </Grid>



          </Grid>
        </SoftBox>
        <SoftBox mt={1}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Company Code
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="company_code"
                  value={companyCode}                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Sales Organization *
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                name="sales_organization"
                error={SalesOrganizationValidation}
                value={salesOrganization}                 
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Distribution Channel *
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="distribution_channel"                  
                  options={distributionChannel}
                  onChange={handleChangeValue}
                  error={formValues.distribution_channel.error}
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Division
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="division"
                  onChange={handleChangeDivisionValue}
                  error={formValues.division.error}
                  options={division}
                />
              </SoftBox>
            </Grid>
            
          </Grid>
        </SoftBox>
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Name 1 *
                  </SoftTypography>
                </SoftBox>
                <SoftInput
                type="text"
                
                value={formValues.name1.value}
                error={formValues.name1.error}
                placeholder="Name 1"
                size="medium"
                id="name1"
                name="name1"
                inputProps={{maxLength: "40"}}
                onChange={handleNameChange}
                
                multiline rows={5} />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Name 2
                  </SoftTypography>
                </SoftBox>
                <SoftInput type="text" required={true} placeholder="Name 2" id="name_2" size="medium" inputProps={{maxLength: "40"}} multiline rows={5} />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3} id="name3">
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Name 3 *
                  </SoftTypography>
                </SoftBox>
                <SoftInput
                type="text"
                
                value={formValues.name3.value}
                error={formValues.name3.error}
                placeholder="Name 3"
                id="name_3"
                name="name3"
                size="medium"
                inputProps={{maxLength: "40"}}
                multiline rows={5}
                onChange={handleNameChange3}
                
                 />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3} id="name4">
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Name 4
                  </SoftTypography>
                </SoftBox>
                <SoftInput type="text" required={true} placeholder="Name 4" size="medium" id="name_4" multiline rows={5} inputProps={{maxLength: "40"}} />
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mt={1}>
          <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Search Term 1
                  </SoftTypography>
                </SoftBox>
                <SoftInput type="text" required={true} placeholder="Type here..." id="search_term1" multiline rows={5} inputProps={{maxLength: "20"}}/>
              </SoftBox>
            </Grid>
            

            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Postal Code
                  </SoftTypography>
                </SoftBox>
                <SoftInput type="text" required={true} placeholder="Postal Code" id='postal_code' size="medium" onChange={handlePostalCode} />
                
              </SoftBox>
            </Grid>

            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    City 1
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  options={city1}
                  onChange={handleChangeCity}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    District
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  options={city2}
                  onChange={handleChangeDistrict}
                />
              </SoftBox>
            </Grid>


            
            
           
          </Grid>
        </SoftBox>
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            

          

            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Street
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  onChange={handleStreetOnChange}
                  options={street}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Street 2
                  </SoftTypography>
                </SoftBox>
                <SoftInput type="text" id='street1' required={true} placeholder="Type here..." multiline rows={5} inputProps={{maxLength: "40"}} />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Street 3
                  </SoftTypography>
                </SoftBox>
                <SoftInput type="text" id='street2' required={true} placeholder="Type here..." multiline rows={5} inputProps={{maxLength: "40"}} />
              </SoftBox>
            </Grid>


            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Country
                  </SoftTypography>
                </SoftBox>
                <SoftInput type="text" required={true} placeholder="Name 4" size="medium" value="IN" readOnly />
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Region *
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="region"                                   
                  onChange={handleChangeRegion}
                  error={formValues.region.error}
                  options={[
                    { value: "9", label: "09" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Language
                  </SoftTypography>
                </SoftBox>
                <SoftInput type="text" required={true} placeholder="Name 4" size="medium" value="EN" readOnly />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Tel Number
                  </SoftTypography>
                </SoftBox>
                <SoftInput type="text" id= "telephone" name="telephone" placeholder="Telephone" size="medium" inputProps={{maxLength: "30"}} />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Mobile Number *
                  </SoftTypography>
                </SoftBox>
                <SoftInput 
                 type="text"
                 
                 name="mobile"
                 value={formValues.mobile.value}
                 error={formValues.mobile.error}
                 placeholder="Mobile"
                 size="medium"
                 onChange={handleChangeMobile}
                 inputProps={{maxLength: "30"}}
                  />
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>        
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    FAX Number
                  </SoftTypography>
                </SoftBox>
                <SoftInput type="text" id="fax" placeholder="FAX" inputProps={{maxLength: "30"}} />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={4}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Email *
                  </SoftTypography>
                </SoftBox>
                <SoftInput
                name="email"
                onChange={handleChangeEmail}
                 value={formValues.email.value}
                 error={formValues.email.error} 
                type="email"
                placeholder="Email"
                inputProps={{maxLength: "241"}}
                 />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={4}>
            <SoftBox mb={3} id="comments">
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Comments
                  </SoftTypography>
                </SoftBox>
                <SoftInput type="text" required={true} id="comment" placeholder="Type here..." multiline rows={5} inputProps={{maxLength: "50"}} />
              </SoftBox>

              <SoftBox mb={3} id="lifnr">
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Vendor Code for Customer
                  </SoftTypography>
                </SoftBox>
                
                <SoftInput type="text" required={true} placeholder="Vendor Code for Customer" size="medium" />
              </SoftBox>

            </Grid>
           
          </Grid>
        </SoftBox>
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Attribute 1
                  </SoftTypography>
                </SoftBox>
                <SoftSelect                  
                  name="attribute1"
                  id="attribute1"
                  
                  onChange={handleChangeAttribute1}
                  options={[
                    { value: "1", label: "01" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Attribute 2
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="attribute2"
                  id="attribute2"
                  
                  onChange={handleChangeAttribute2}
                  options={[
                    { value: "A", label: "A" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    PAN Number *
                  </SoftTypography>
                </SoftBox>
                <SoftInput
                 type="text"
                 required
                 name="pan"
                 placeholder="PAN"
                 size="medium"
                 onChange={handlePAN}
                 value={formValues.pan.value}
                 error={formValues.pan.error}
                inputProps={{maxLength: "40"}} />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
              {panValidation?
            <SoftBox mb={3} id="pan_reference">
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    PAN Reference (CIN Details)*
                  </SoftTypography>
                </SoftBox>
                <SoftInput type="text" placeholder="PAN Reference Number" size="medium" multiline rows={5} inputProps={{maxLength: "40"}} />
              </SoftBox> : null}
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    GSTN *
                  </SoftTypography>
                </SoftBox>
                <SoftInput
                 type="text"
                  name="gstn"
                  required
                  value={formValues.gstn.value}
                  error={formValues.gstn.error}
                  onChange={handleChangeGSTN}
                  placeholder="GSTN"
                  size="medium"
                     inputProps={{maxLength: "18"}}
                      />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Industry Key
                  </SoftTypography>
                </SoftBox>
                <SoftInput
                type="text"
                name="industry_key"
                id="industry_key"
                placeholder="Industry Key"
                size="medium"
                inputProps={{maxLength: "4"}} />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Industry Code 1 *
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="industry_code1"
                  error={formValues.industry_code1.error}
                  onChange={handleChangeIndustryCode1}
                  options={industryCode}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                  Reconciliation Account in General Ledger *
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="general_ledger"
                  error={formValues.general_ledger.error}
                  onChange={handleChangeGeneralLedger}
                  options={[
                    { value: "230040", label: "230040" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Sales District
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="sales_district"
                  id="sales_district"
                  
                  onChange={handleChangeSalesDistrict}
                  options={[
                    { value: "NORTH", label: "NORTH" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Sales Office
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="sales_office"
                  id="sales_office"
                  
                  onChange={handleChangeSalesOffice}
                  options={[
                    { value: "JK01", label: "JK01" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Sales Group *
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="sales_group"
                  error={formValues.sales_group.error}
                  onChange={handleChangeSalesGroup}
                  options={[
                    { value: "JK", label: "JK" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                  Curreny *
                  </SoftTypography>
                </SoftBox>
                <SoftInput required type="text" placeholder="PAN" size="medium" value="INR" readOnly />
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Pricing procedure assigned to this customer
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="pricing_procedure"
                  id="pricing_procedure"
                  
                  onChange={handleChangePricingProcedure}
                  options={[
                    { value: "1", label: "1" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Customer Statistics Group *
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="customer_statistic_group"
                  error={formValues.customer_statistic_group.error}
                  onChange={handleChangeStatisticGroup}
                  options={[
                    { value: "1", label: "1" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Shipping Conditions *
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="shipping_condition"
                  error={formValues.shipping_condition.error}
                  onChange={handleChangeShippingCondition}
                  options={[
                    { value: "1", label: "1" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3} id="indicator">
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                  Indicator *
                  </SoftTypography>
                </SoftBox>
                <SoftInput
                 type="text"
                 name="indicator"
                 required
                 value={formValues.indicator.value}
                 error={formValues.indicator.error}
                 onChange={handleChangeIndicator}                
                 placeholder="Indicator"
                 size="medium"
                  />
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Incoterms (Part 1) *
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="incoterms1"
                  error={formValues.incoterms1.error}
                  onChange={handleChangeIncoterms1}
                  
                  options={[
                    { value: "EXW", label: "EXW" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Incoterms (Part 2) *
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="incoterms2"
                  error={formValues.incoterms2.error}
                  onChange={handleChangeIncoterms2}
                  options={[
                    { value: "EX WORKS", label: "EX WORKS" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Terms of Payment Key *
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="payment_key"
                  error={formValues.payment_key.error}
                  onChange={handleChangePaymentKey}
                  options={[
                    { value: "H000", label: "H000" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                  Credit Control Area *
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="credit_control_area"
                  error={formValues.credit_control_area.error}
                  onChange={handleChangeCreditControl}
                  options={[
                    { value: "1000", label: "1000" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Customer Account assignment group *
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="account_assignment_group"
                  error={formValues.account_assignment_group.error}
                  onChange={handleChangeAssignment}
                  options={accountAssignmentGroup}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Tax classification 1 *
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="tax_classification1"
                  error={formValues.tax_classification1.error}
                  onChange={handleChangeTAXClassification1}
                  
                  options={[
                    { value: "0", label: "0" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Tax classification 2 *
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  name="tax_classification2"
                  error={formValues.tax_classification2.error}
                  onChange={handleChangeTAXClassification2}
                  options={[
                    { value: "0", label: "0" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                  Tax classification 3
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  onChange={handleChangeTAXClassification3}
                  options={[
                    { value: "0", label: "0" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Tax classification 4
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  onChange={handleChangeTAXClassification4}
                  options={[
                    { value: "0", label: "0" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Tax classification 5
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                onChange={handleChangeTAXClassification5}
                  options={[
                    { value: "0", label: "0" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={3}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Tax classification 6
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  onChange={handleChangeTAXClassification6}
                  options={[
                    { value: "0", label: "0" }
                  ]}
                  
                />
              </SoftBox>
            </Grid>
            
          </Grid>
        </SoftBox>        
        <SoftBox mt={1} id="marketing_rows">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Partner Function
                  </SoftTypography>
                </SoftBox>
                <SoftInput 
                type="text"
                name="partner_function"
                id="partner_function"
                placeholder="Partner Function"
                size="medium"
                onChange={handleChangePF}
                required
                error={formValues.partner_function.error}
                value={formValues.partner_function.value}
                inputProps={{maxLength: "2"}} />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={6}>
            <SoftBox mb={3}>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Number of an SD business partner
                  </SoftTypography>
                </SoftBox>
                <SoftInput 
                type="text"
                name="business_partner"
                id="business_partner"
                placeholder="Number of an SD business partner"
                size="medium"
                inputProps={{maxLength: "10"}}
                onChange={handleChangeBP}
                error={formValues.business_partner.error}
                value={formValues.business_partner.value} />
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
        <Grid item xs={12} lg={12}>
        <SoftBox display="flex" justifyContent="flex-end">
        <Bars
                height="40"
                width="40"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={loader}
                />
              </SoftBox>
       
              <SoftBox display="flex" justifyContent="flex-end">
                <SoftButton variant="gradient" color="info" type="submit">
                  save
                </SoftButton>
              </SoftBox>
              
        </Grid>
        </form>
      </SoftBox>
      : 'You do not have the access of this module!' }
          </Card>
          </Grid>      

    </Grid>


      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
