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
import { onePagerdebt } from "assets/globalAPI/GlobalApi";
import { onePagerdebtfetch } from "assets/globalAPI/GlobalApi";
import SoftDatePicker from "components/SoftDatePicker";
import { logDOM } from "@testing-library/react";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

function Debt() {
  var cryptojs = require("crypto-js");
  var agingarray = [
    "0-75 Days",
    "76-80 Days",
    "81-85 Days",
    "86-90 Days",
    "91-100 Days",
    "101-110 Days",
    "111-120 Days",
    "Beyond 120 Days",
  ];
  var partarray = ["WM FACTORY", "AC FACTORY", "TRADED FG"];
  var nvalue = [
    {
      "WM FACTORY": {
        "0-75 Days": 21,
        "76-80 Days": 0,
        "81-85 Days": 0,
        "86-90 Days": 0,
        "91-100 Days": 0,
        "101-110 Days": 0,
        "111-120 Days": 0,
        "Beyond 120 Days": 0,
      },
      "AC FACTORY": {
        "0-75 Days": 11,
        "76-80 Days": 0,
        "81-85 Days": 0,
        "86-90 Days": 0,
        "91-100 Days": 0,
        "101-110 Days": 0,
        "111-120 Days": 0,
        "Beyond 120 Days": 0,
      },
      "TRADED FG": {
        "0-75 Days": 31,
        "76-80 Days": 0,
        "81-85 Days": 0,
        "86-90 Days": 0,
        "91-100 Days": 0,
        "101-110 Days": 0,
        "111-120 Days": 0,
        "Beyond 120 Days": 0,
      },
    },
  ];

  const today = new Date();
  const showToday = today.toString().slice(4, 15);
  const [module, setModule] = useState([]);
  const [arryval, setArryval] = useState(agingarray);
  const [isLoading, setIsLoading] = useState(true);
  const [marray, setMarray] = useState(partarray);
  const [val, setVal] = useState(nvalue);
  const [newdate, setNewdate] = useState(showToday);
  const [softDate, setSoftDate] = useState(new Date());
  const [update, setUpdate] = useState(false);
  const resultObject = {};

  const handleDateChange = async (e) => {
    setSoftDate(e);
    var newdate1 = await e[0].toString().slice(4, 15);
    setNewdate(newdate1);
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
        toast.error("No Data uploaded for this Date2");
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
      setVal(updatedValues);
    } else {
      const updatedValues = [...val];
      updatedValues[0][rowIndex][colName] = parseInt(value);
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
      var res = val.slice(0, marray.length);
      for (let i = 0; i < marray.length; i++) {
        resultObject[marray[i]] = res[i];
      }
      data = {
        input_data: { particular: val[0], input_date: pdate, aging: arryval },
      };
    }
    // console.log("data to be posted", data);
    try {
      console.log("data for api",data);
      const resp = await onePagerdebt(data);
      const res = resp.data;
      if (res.status === "200") {
        toast.success("Data posted sucessfully", res.message);
        // console.log("resultant array posted successfully===>>>>", data, "sgchxghhcvf", newdate);
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
  // var abvc =nvalue[0]["WM FACTORY"]["86-90 Days"];
  // console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii===================...",arryval);

  return (
    <>
      <ToastContainer />
      {module.includes("Retrodata") ? (
        <SoftBox>
          <Card bordered style={{ padding: "5px 5px", boxShadow: "0px 2px 5px #c9c9c9" }}>
            <SoftBox display="flex">
              <SoftTypography variant="h4" fontWeight="bold" color="success">
                Creditors of Factory as on {newdate}
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
                {update === true
                  ? marray.map((e1, index1) => {
                      return (
                        <tr key={index1}>
                          <td>{e1}</td>
                          {arryval.map((e2, index2) => {
                            if (update === true && val !== undefined && val !== null && val != {}) {
                              var newval = val[0][e1][e2];
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
                            console.log("jhjhhj>>>", newval);
                            // console.log("errorrs===>>>", val[0][e1]);
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

export default Debt;
