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
import { onePagerdebt } from "assets/globalAPI/GlobalApi";
import { getDebtor } from "assets/globalAPI/GlobalApi";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

function DebitorCol() {
  var cryptojs = require("crypto-js");
  const today = new Date();
  var yea = today.getFullYear();
  var nexty = yea + 1;
  var startDate = new Date(`${yea}-04-01`);
  var endDate = new Date(`${nexty}-04-01`);
  var dateadd = today.getDate().toString().padStart(2, "0");
  var hghgh = today.getMonth() + 1;
  var monthadd = hghgh.toString().padStart(2, "0");
  var monthaddsh = today.toLocaleString("default", { month: "short" });
  var yearadd = today.getFullYear().toString().slice(-2);
  var tocomapre = `${monthaddsh} ${yearadd}`;
  var toadd = `${tocomapre} till ${dateadd}.${monthadd}`;
  var ageingarray = [];
  const newdata = today.toString().slice(4, 15);
  while (startDate <= endDate - 2) {
    const month = startDate.toLocaleString("default", { month: "short" });
    const year = startDate.getFullYear().toString().slice(-2);
    ageingarray.push(`${month} ${year}`);
    startDate.setMonth(startDate.getMonth() + 1);
  }
var ageobj={};
for (let i = 0; i < ageingarray.length; i++) {
  ageobj[ageingarray[i]] = 0;
}
  const particulararray = [
    "WM Factory-Marketing",
    "WM Factory-Service",
    "AC Factory",
    "AC Factory (OEM)",
  ];
  var value={};
  for (let i = 0; i < particulararray.length; i++) {
    value[particulararray[i]] = ageobj;
  }
  const [isLoading, setIsLoading] = useState(true);
  const [module, setModule] = useState([]);
  const [arryval, setArryval] = useState(ageingarray);
  const [marray, setMarray] = useState(particulararray);
  const [val, setVal] = useState([value]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [update, setUpdate] = useState(false);
  const [newdate, setNewdate] = useState(newdata);
  const [softDate, setSoftDate] = useState(new Date());
  const particular = {};


  const handleDateChange = async (date) => {
    setSelectedDate(date);
    var newdate1 = await date[0].toString().slice(4, 15);
    setNewdate(newdate1);
    var pData = {
      date: newdate1,
    };
    try {
      const resp = await getDebtor(pData);
      const res = resp.data;
      console.log("fetched data", res);
      var agearray = res.userdata.ageing;
      setArryval(agearray);
      var objkeys = Object.keys(res.userdata.particular);
      setMarray(objkeys);
      if (
        objkeys != undefined &&
        objkeys != null &&
        objkeys != {} &&
        agearray != undefined &&
        agearray != null &&
        agearray.length != 0
      ) {
        setVal([res.userdata.particular]);
        setUpdate(true);
      } else {
        setUpdate(false);
      }
      if (res.status == "200") {
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
      const updatedValues = [...val];
      updatedValues[0][rowIndex][colName] = parseInt(value);
      console.log("handelChange Data", updatedValues);
      setVal(updatedValues);
    } else {
      console.log("datas", rowIndex, colName, value);
      const updatedValues = [...val];
      updatedValues[0][rowIndex][colName] = parseInt(value);
      console.log("handelChange Data", updatedValues);
      // updatedValues[0][rowIndex][colName] = parseInt(value);
      setVal(updatedValues);
    }
  };
  const handlePost = async () => {
    var data = {};
    var pdate = new Date().toString().slice(4, 15);
    if (update == true) {
      data = {
        input_data: { particular: val[0], input_date: pdate, aging: arryval },
      };
    } else {
      data = {
        input_data: { particular: val[0], input_date: pdate, aging: arryval },
      };
    }
    try {
      console.log("Data to be posted", data);
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
                {/* <text onClick={()=>alert("joydeep hear")}>fhffhg ghf</text> */}
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
                  {arryval.map((es, indexs) => {
                    if (es == tocomapre) {
                      return <th key={indexs}>{toadd}</th>;
                    } else {
                      return <th key={indexs}>{es}</th>;
                    }
                  })}
                </tr>
              </thead>
              <tbody>
                {update === true
                  ? marray.map((e1, index1) => {
                      return (
                        <tr key={index1}>
                          <td>{e1}</td>
                          {arryval.map((e2, index2) => {
                            if (
                              update === true &&
                              val !== undefined &&
                              val !== null &&
                              val != {}
                            ) {
                              var newval = val[0][e1][e2];
                              return (
                                <td key={index2}>
                                  <FormField
                                    type="number"
                                    defaultValue={newval}
                                    onChange={(e) => handleCellChange(e1, e2, e.target.value)}
                                  />
                                </td>
                              );
                            }
                          })}
                        </tr>
                      );
                    })
                  : marray.map((e1, index1) => {
                      return (
                        <tr key={index1}>
                          <td>{e1}</td>
                          {arryval.map((e2, index2) => {
                            var newval = val[0][e1][e2];
                            return (
                              <td key={index2}>
                                <FormField
                                  type="number"
                                  defaultValue={newval}
                                  onChange={(e) => {
                                    console.log("datas1223", e1, e2, e.target.value);
                                    handleCellChange(e1, e2, e.target.value);
                                  }}
                                />
                              </td>
                            );
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

export default DebitorCol;