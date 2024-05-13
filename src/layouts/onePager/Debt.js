import { Typography } from "@mui/material";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { Card, CardGroup } from "react-bootstrap";
import FormField from "components/formField";
import { Form } from "react-bootstrap";
// import "./abc.css";
import SoftButton from "components/SoftButton";
import { useEffect } from "react";
import SoftBox from "components/SoftBox";
import { ToastContainer, toast } from "react-toastify";
import { onePagerdebt } from "assets/globalAPI/GlobalApi";
import { onePagerdebtfetch } from "assets/globalAPI/GlobalApi";
import LoadingScreen from "layouts/loading/loading";
import SoftDatePicker from "components/SoftDatePicker";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

function Debt() {
  var nvalue=[
  {
     "WM Factory-Marketing": {
        "0-09 Days": 0,
        "10-13 Days": 0,
        "14-16 Days": 0,
        "17-20 Days": 0,
        "21-30 Days": 0,
        "31-40 Days": 0,
        "41-60Days": 0,
        "61-90 Days": 0,
        "Beyond 90 Days": 0
    },
    "WM Factory-Service": {
        "0-09 Days": 0,
        "10-13 Days": 0,
        "14-16 Days": 0,
        "17-20 Days": 0,
        "21-30 Days": 0,
        "31-40 Days": 0,
        "41-60Days": 0,
        "61-90 Days": 0,
        "Beyond 90 Days": 0
    },
    "AC Factory": {
        "0-09 Days": 0,
        "10-13 Days": 0,
        "14-16 Days": 0,
        "17-20 Days": 0,
        "21-30 Days": 0,
        "31-40 Days": 0,
        "41-60Days": 0,
        "61-90 Days": 0,
        "Beyond 90 Days": 0
    },
    "AC Factory (OEM)": {
        "0-09 Days": 0,
        "10-13 Days": 0,
        "14-16 Days": 0,
        "17-20 Days": 0,
        "21-30 Days": 0,
        "31-40 Days": 0,
        "41-60Days": 0,
        "61-90 Days": 0,
        "Beyond 90 Days": 0
    }
  }];
  var ageingarray = [
    "0-09 Days",
    "10-13 Days",
    "14-16 Days",
    "17-20 Days",
    "21-30 Days",
    "31-40 Days",
    "41-60Days",
    "61-90 Days",
    "Beyond 90 Days",
  ];
  var particulararray = [
    "WM Factory-Marketing",
    "WM Factory-Service",
    "AC Factory",
    "AC Factory (OEM)",
  ];
  var cryptojs = require("crypto-js");
  const [isLoading, setIsLoading] = useState(true);
  const [module, setModule] = useState([]);
  const [arryval, setArryval] = useState(ageingarray);
  const [marray, setMarray] = useState(particulararray);
  const [val, setVal] = useState(nvalue);
  const today = new Date();
  const showToday = today.toString().slice(4, 15);
  const [newdate, setNewdate] = useState(showToday);
  const [softDate, setSoftDate] = useState(new Date());
  const [update, setUpdate] = useState(false);
  const particular = {};


  const handleDateChange = async (e) => {
    setSoftDate(e);
    var newdate1 = await e[0].toString().slice(4, 15);
    setNewdate(newdate1);
    console.log("bgjfgdcfdx",newdate);
    var pData = {
      date: newdate1,
    };
    try {
      const resp = await onePagerdebtfetch(pData);
      const res = resp.data;
      var objkeysage = Object.keys(res.userdata.ageing);
      var retarray = objkeysage.map((e1) => {
        return res.userdata.ageing[e1];
      });
      setArryval(retarray);
      var objkeys = Object.keys(res.userdata.particular);
      setMarray(objkeys);
      if (
        objkeys != undefined &&
        objkeys != null &&
        objkeys != {} &&
        retarray != undefined &&
        retarray != null &&
        retarray != {}
      ) {
        setVal([res.userdata.particular]);
        setUpdate(true);
      } else {
        setUpdate(false);
      }
      if (res.status === "200") {
        toast.success("Data Fetched", res.message);
      } else {
        toast.error("No Data found  for this Date");
      }
    } catch (err) {
      setUpdate(false);
      toast.error("error to fetch data or network error");
    }
  };
  const handleCellChange = (rowIndex, colName, value) => {
    if (update == true) {
      if(rowIndex!= "AC Factory" && rowIndex!="AC Factory (OEM)")
      {
      const updatedValues = [...val];
      updatedValues[0][rowIndex][colName] = parseInt(value);
      setVal(updatedValues);
    }
  }

    else{
      if(rowIndex!= "AC Factory" && rowIndex!="AC Factory (OEM)")
      {
      const updatedValues = [...val];
      updatedValues[0][rowIndex][colName] = parseInt(value);
      setVal(updatedValues);

    }
  }
  };
  const handlePost = async () => {
    var data = {};
    var pdate = new Date().toString().slice(4, 15);
    if (update == true) {
      data = {
        input_data: { particular: val[0], input_date: pdate, aging: arryval },
      };
    }
     else {
      var resn = val.slice(0, marray.length);
      var res1=resn[0];
      for (let i = 0; i < marray.length; i++) {
        if(marray[i]!= "AC Factory" && marray[i]!="AC Factory (OEM)")
      {
        particular[marray[i]] = res1[marray[i]];
      }
      }
      data = {
        input_data: { particular:particular, input_date: pdate, aging: arryval },
      };
    }
    try {
      const resp = await onePagerdebt(data);
      const res = resp.data;
      if (res.status === "200") {
        toast.success("Data posted sucessfully", res.message);
      } else {
        toast.error("error to post data", res.message);
      }
    } catch (err) {
      toast.error("error to create user or network error");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
    var getUserData = localStorage.getItem("userDetails");
    var userData = cryptojs.AES.decrypt(getUserData, "ifbHad").toString(cryptojs.enc.Utf8);
    var jsonData = JSON.parse(userData);
    var moduleAccess = jsonData.module_access;
    var arr = moduleAccess.split(",");
    setModule(arr);
    setUpdate(false);
  }, []);

  return (
    <>
      <ToastContainer />
      {module.includes("Retrodata") ? (
        <SoftBox>
          <Card bordered style={{ padding: "5px 5px", boxShadow: "0px 2px 5px #c9c9c9" }}>
            <SoftBox display="flex">
              <SoftTypography variant="h4" fontWeight="bold" color="success">
                Debtors of Factory as on {newdate}
              </SoftTypography>
              <SoftBox width={200} ml={42}>
                <SoftDatePicker
                  value={softDate}
                  placeholder="Select Date"
                  onChange={(e) => {
                    handleDateChange(e);
                  }}
                />
              </SoftBox>
            </SoftBox>
            <Table
              bordered
              responsive="sm"
              striped
              hover
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              <thead>
                <tr>
                  <th>Data For</th>
                  {arryval.map((p, index) => {
                    return <th key={index}>{p}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {update===true?marray.map((e1, index1) => {
                  return (
                    <tr key={index1}>
                      <td>{e1}</td>
                      {arryval.map((e2, index2) => {
                        if (update === true && val !== undefined && val !== null && val != {}) {
                          var newval = val[0][e1][e2];
                          if(e1!= "AC Factory" && e1!="AC Factory (OEM)")
                          {
                          return (
                            <td key={index2}>
                              <FormField
                                type="number"
                                defaultValue={newval}
                                onChange={(e) => {
                                  handleCellChange(e1, e2, e.target.value);
                                }}
                              />
                            </td>
                          );
                              }
                              else{
                                return (
                                  <td key={index2}>
                                    <FormField
                                      type="number"
                                      defaultValue={newval}
                                      disabled
                                      // onChange={(e) => {
                                      //   handleCellChange(e1, e2, e.target.value);
                                      // }}
                                    />
                                  </td>
                                );
                              }
                        }
                      })}
                    </tr>
                  );
                }):
                marray.map((e1, index1) => {
                  return (
                    <tr key={index1}>
                      <td>{e1}</td>
                      {arryval.map((e2, index2) => {
                          var newval = val[0][e1][e2];
                          if(e1!= "AC Factory" && e1!="AC Factory (OEM)")
                          {
                          return (
                            <td key={index2}>
                              <FormField
                                type="number"
                                defaultValue={newval}
                                
                                onChange={(e) => {
                                  handleCellChange(e1, e2, e.target.value);
                                }}
                              />
                            </td>
                          );
                              }
                              else{
                                return (
                                  <td key={index2}>
                                    <FormField
                                      type="number"
                                      defaultValue={newval}
                                      disabled
                                      // onChange={(e) => {
                                      //   handleCellChange(e1, e2, e.target.value);
                                      // }}
                                    />
                                  </td>
                                );
                              }
                      })}
                    </tr>
                  );
                })
                }
              </tbody>
            </Table>
            <SoftButton
              className="butpos"
              style={{ width: "100px" }}
              size="small"
              color="info"
              onClick={handlePost}
            >
              Upload
            </SoftButton>
          </Card>
        </SoftBox>
      ) : (
        <SoftBox>
          <p>You dont have access to upload retro data</p>
        </SoftBox>
      )}
    </>
  );
}

export default Debt;
