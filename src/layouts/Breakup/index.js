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
import { breupload } from "assets/globalAPI/GlobalApi";
import LoadingScreen from "layouts/loading/loading";
import SoftDatePicker from "components/SoftDatePicker";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

function Breakup() {
  var cryptojs = require("crypto-js");
  const today = new Date();
  const newdata = today.toString().slice(4, 15);
  var ageobj1 = {
    // ageing array for  Breakup
    "0-75 Days": 0,
    "76-90 Days": 0,
    "91-100 Days": 0,
    "101-110 Days": 0,
    "111-120 Days": 0,
    "121-150 Days": 0,
    "Beyond 150 Days": 0,
    Remark: "",
  };
  const ageingarr = Object.keys(ageobj1);
  var value = {};
  const partarr = ["Marketing", "Service"];
  for (let i = 0; i < partarr.length; i++) {
    value[partarr[i]] = ageobj1;
  }
  const [isLoading, setIsLoading] = useState(true);
  const [module, setModule] = useState([]);
  const resultObject = {};
  const [arrayval, setArrayval1] = useState(ageingarr);
  const [marray, setMarray1] = useState(partarr);
  const [val, setVal] = useState([value]);
  const [update, setUpdate] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [softDate, setSoftDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("avfd==>>>", selectedDate);
  };

  const handleCellChange = (rowIndex, colName, value) => {
    if (update == true) {
      const updatedValues = [...val];
      updatedValues[rowIndex][colName] = parseInt(value);
      setVal(updatedValues);
    } else {
      // const updatedValues = JSON.parse(JSON.stringify(val));
      // const updatedValues = JSON.parse(JSON.stringify(val));
      const updatedValues = val;
      console.log("fvfvhtcf", JSON.parse(JSON.stringify(val)), val);
      if (colName != "Remark") {
        updatedValues[0][rowIndex][colName] = parseInt(value);
      } else {
        updatedValues[0][rowIndex][colName] = value;
      }
      console.log("fvfvhtcf", updatedValues);
      setVal(updatedValues);
    }
  };

  const handlePost = async () => {
    var data = {};
    var pdate = softDate.toString().slice(4, 15);
    if (update == true) {
      data = {
        input_data: { particular: val[0], aging: arrayval },
      };
    } else {
      data = {
        input_data: { particular: val[0], aging: arrayval },
      };
    }
    //  data = {
    //   input_data: val1[0],
    // };
    try {
      console.log("hiiii------------>>>", data);
      const resp = await breupload(data);
      const res = resp.data;
      if (resp.status == 200) {
        toast.success("Data posted", res.message);
        console.log("Data posted successfully===>>>>", data);
      } else {
        toast.error("error to post data", res.message);
      }
    } catch (err) {
      toast.error("error to post data");
    }
    console.log("resultant array===>>>>", data);
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
    console.log("datas>>>", arr);
  }, []);
  return (
    <>
      <ToastContainer />
      {module.includes("Retrodata") ? (
        <SoftBox>
          <Card bordered style={{ padding: "5px 5px", boxShadow: "0px 2px 5px #c9c9c9" }}>
            <SoftBox display="flex">
              <SoftTypography variant="h4" fontWeight="bold" color="success">
                Creditors Outstanding as on {newdata}
              </SoftTypography>
              <SoftBox width={200} ml={42}>
                <SoftDatePicker
                  value={softDate}
                  placeholder="Select Date"
                  onChange={(e) => {
                    setSoftDate(e[0]);
                    // handleDateChange1(e);
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
                  {arrayval.map((es, indexs) => {
                    return <th key={indexs}>{es}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {update === true
                  ? marray.map((e1, index1) => {
                      return (
                        <tr key={index1}>
                          <td>{e1}</td>
                          {arrayval.map((e2, index2) => {
                            if (update === true && val !== undefined && val !== null && val != {}) {
                              var newval = val[0][e1][e2];
                              if (e2 != "Remark") {
                                return (
                                  <td key={index2}>
                                    <FormField
                                      type="number"
                                      value={val[0][e1][e2]}
                                      onChange={(e) => {
                                        handleCellChange(e1, e2, e.target.value);
                                      }}
                                    />
                                  </td>
                                );
                              } else {
                                return (
                                  <td key={index2}>
                                    <FormField
                                      type="textarea"
                                      value={val[0][e1][e2]}
                                      onChange={(e) => {
                                        handleCellChange(e1, e2, e.target.value);
                                      }}
                                    />
                                  </td>
                                );
                              }
                            }
                          })}
                        </tr>
                      );
                    })
                  : marray.map((e1, index1) => {
                      return (
                        <tr key={index1}>
                          <td>{e1}</td>
                          {arrayval.map((e2, index2) => {
                            var newval = val[0][e1][e2];
                            if (e2 !== "Remark") {
                              return (
                                <td key={index2}>
                                  <FormField
                                    type="number"
                                    defaultValue={val[0][e1][e2]}
                                    onChange={(e) => {
                                      // console.log("the changes", e1, e2);
                                      handleCellChange(e1, e2, e.target.value);
                                    }}
                                  />
                                </td>
                              );
                            } else {
                              return (
                                <td
                                  key={index2}
                                  style={{
                                    paddingTop: "20px",
                                  }}
                                >
                                  <textarea
                                    type="textarea"
                                    defaultValue={val[0][e1][e2]}
                                    onChange={(e) => {
                                      // console.log("newval>>>",e1,newval)
                                      handleCellChange(e1, e2, e.target.value);
                                    }}
                                    style={{
                                      borderRadius: "6px",
                                      border: "1px solid #d7d7d7 ",
                                      outline: "none",
                                      height: "40px",
                                    }}
                                  />
                                </td>
                              );
                            }
                          })}
                        </tr>
                      );
                    })}
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

export default Breakup;
