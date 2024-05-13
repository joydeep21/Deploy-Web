import { Typography } from "@mui/material";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from "react-toastify";
import SoftDatePicker from "components/SoftDatePicker";
import { Card, CardGroup } from "react-bootstrap";
import FormField from "components/formField";
import SoftButton from "components/SoftButton";
import { useEffect } from "react";
import SoftBox from "components/SoftBox";
import { credOut, debOut, invFg, invRm } from "assets/globalAPI/GlobalApi";
import LoadingScreen from "layouts/loading/loading";

function Index() {
  var cryptojs = require("crypto-js");
  const today = new Date();
  function changeDateFortmat(date)
  {
    const year1 = date.getFullYear();
    const month1 = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-indexed
    const day1 = String(date.getDate()).padStart(2, '0');
    return(`${year1}-${month1}-${day1}`);
  }
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDayOfCurrentMonth = new Date(year, month, 1);
  const lastDayOfPreviousMonth = new Date(firstDayOfCurrentMonth);
  lastDayOfPreviousMonth.setDate(0);
  const mstring = lastDayOfPreviousMonth.toString();
  const mdata = changeDateFortmat(lastDayOfPreviousMonth);
  function getLastSaturdays() {
    const currentDate = new Date();
    const currentDayOfWeek = currentDate.getDay();
    const daysToLastSaturday = (currentDayOfWeek + 1) % 7;
    const lastSaturdays = [];
    for (let i = 0; i < 4; i++) {
      const lastSaturday = new Date(currentDate);
      lastSaturday.setDate(currentDate.getDate() - daysToLastSaturday - 7 * i);
      var lastSaturdayf = changeDateFortmat(lastSaturday);
      if (lastSaturdayf != mdata) {
        lastSaturdays.push(lastSaturdayf);
      }
    }
    return lastSaturdays;
  }
  const particulararray = getLastSaturdays();
  particulararray.unshift(mdata);

  var ageobj1 = {
    // ageing array for  creditors
    "0-75 Days": 0,
    "76-90 Days": 0,
    "91-100 Days": 0,
    "101-110 Days": 0,
    "111-120 Days": 0,
    "121-150 Days": 0,
    "Beyond 150 Days": 0,
    // Total: 0,
  };
  var ageobj2 = {
    // ageing array for Debtors
    "0-09 Days": 0,
    "10-13 Days": 0,
    "14-16 Days": 0,
    "17-20 Days": 0,
    "21-30 Days": 0,
    "31-40 Days": 0,
    "41-60 Days": 0,
    "61-90 Days": 0,
    "Beyond 90 Days": 0,
    // Total: 0,
  };
  var ageobj3 = {
    // ageing array for Inventory Finish and Raw Goods
    "0-30 Days": 0,
    "31-45 Days": 0,
    "46-60 Days": 0,
    "61-75 Days": 0,
    "76-90 Days": 0,
    "Beyond 90 Days": 0,
    // Total: 0,
  };
  const agingarray1 = Object.keys(ageobj1);
  var agingarray2 = Object.keys(ageobj2);
  var agingarray3 = Object.keys(ageobj3);
  var agingarray4 = Object.keys(ageobj3);
  var value1 = {};
  var value2 = {};
  var value3 = {};
  var value4 = {};

  for (let i = 0; i < particulararray.length; i++) {
    value1[particulararray[i]] = ageobj1;
  }
  for (let i = 0; i < particulararray.length; i++) {
    value2[particulararray[i]] = ageobj2;
  }
  for (let i = 0; i < particulararray.length; i++) {
    value3[particulararray[i]] = ageobj3;
  }
  for (let i = 0; i < particulararray.length; i++) {
    value4[particulararray[i]] = ageobj3;
  }
  const particular1 = {};
  const resultObject2 = {};
  const resultObject3 = {};
  const resultObject4 = {};
  const showToday = today.toString().slice(4, 15);
  const [isLoading, setIsLoading] = useState(true);
  const [module, setModule] = useState([]);
  // for 1st
  const [arrayval1, setArrayval1] = useState(agingarray1);
  const [marray1, setMarray1] = useState(particulararray);
  const [val1, setVal1] = useState([value1]);
  const [newdate1, setNewdate1] = useState(showToday);
  const [update1, setUpdate1] = useState(false);
  const [softDate1, setSoftDate1] = useState(new Date());

  // For 2nd
  const [arrayval2, setArrayval2] = useState(agingarray2);
  const [marray2, setMarray2] = useState(particulararray);
  const [val2, setVal2] = useState([value2]);
  const [newdate2, setNewdate2] = useState(showToday);
  const [update2, setUpdate2] = useState(false);
  const [softDate2, setSoftDate2] = useState(new Date());

  // For 3rd
  const [arrayval3, setArrayval3] = useState(agingarray3);
  const [marray3, setMarray3] = useState(particulararray);
  const [val3, setVal3] = useState([value3]);
  const [newdate3, setNewdate3] = useState(showToday);
  const [update3, setUpdate3] = useState(false);
  const [softDate3, setSoftDate3] = useState(new Date());

  //For 4th
  const [arrayval4, setArrayval4] = useState(agingarray4);
  const [marray4, setMarray4] = useState(particulararray);
  const [val4, setVal4] = useState([value4]);
  const [newdate4, setNewdate4] = useState(showToday);
  const [update4, setUpdate4] = useState(false);
  const [softDate4, setSoftDate4] = useState(new Date());

  //.......................

  const handleCellChange1 = (rowIndex, colName, value) => {
    if (update1 == true) {
      const updatedValues = JSON.parse(JSON.stringify(val1));
      updatedValues[0][rowIndex][colName] = parseInt(value);
      // var totalkeys = arrayval1.map((e) => e);
      // totalkeys.pop();
      // for (const key of totalkeys) {
      //   total += updatedValues[0][rowIndex][key];
      // }
      // updatedValues[0][rowIndex].Total = total;
      setVal1(updatedValues);
    } else {
      const updatedValues = JSON.parse(JSON.stringify(val1));
      var total = 0;
      updatedValues[0][rowIndex][colName] = parseInt(value);
      // var totalkeys = arrayval1.map((e) => e);
      // totalkeys.pop();
      // for (const key of totalkeys) {
      //   total += updatedValues[0][rowIndex][key];
      // }
      // updatedValues[0][rowIndex].Total = total;
      setVal1(updatedValues);
    }
  };
  const handlePost1 = async () => {
    var data = {};
    var pdate = softDate1.toString().slice(4, 15);
    if (update1 == true) {
      data = {
        input_data: { particular: val1[0], aging: arrayval1 },
      };
    } else {
      data = {
        input_data: { particular: val1[0], aging: arrayval1 },
      };
    }
    //  data = {
    //   input_data: val1[0],
    // };
    try {
      console.log("hiiii------------>>>", data);
      const resp = await credOut(data);
      const res = resp.data;
      console.log("hello------------>>>", resp);

      if (resp.status == 200) {
        toast.success("Data posted", res.message);
        console.log("Data posted successfully===>>>>", data);
      } else {
        toast.error("error to post data", res.message);
      }
    } catch (err) {
      toast.error("error to post data");
    }
  };
  const handleCellChange2 = (rowIndex, colName, value) => {
    if (update2 == true) {
      const updatedValues = JSON.parse(JSON.stringify(val2));
      updatedValues[0][rowIndex][colName] = parseInt(value);
      // var totalkeys = arrayval2.map((e) => e);
      // totalkeys.pop();
      // for (const key of totalkeys) {
      //   total += updatedValues[0][rowIndex][key];
      // }
      // updatedValues[0][rowIndex].Total = total;
      setVal2(updatedValues);
    } else {
      const updatedValues = JSON.parse(JSON.stringify(val2));
      // var total = 0;
      updatedValues[0][rowIndex][colName] = parseInt(value);
      // var totalkeys = arrayval2.map((e) => e);
      // totalkeys.pop();
      // for (const key of totalkeys) {
      //   total += updatedValues[0][rowIndex][key];
      // }
      // updatedValues[0][rowIndex].Total = total;
      setVal2(updatedValues);
    }
  };
  const handlePost2 = async () => {
    var data = {};
    var pdate = softDate2.toString().slice(4, 15);
    if (update1 == true) {
      data = {
        input_data: { particular: val2[0],  aging: arrayval2 },
      };
    } else {
      data = {
        input_data: { particular: val2[0],  aging: arrayval2 },
      };
    }
    try {
      console.log("hiiii------------>>>", data);
      const resp = await debOut(data)
      console.log("hello===>",resp);
      const res = resp.data;
      if (resp.status == 200) {
        toast.success("Data posted", res.message);
        console.log("Data posted successfully===>>>>", data);
      } else {
        toast.error("error to post data111", res.message);
      }
    } catch (err) {
      console.log("hii hello",err)
      toast.error("error to post data");
    }
  };
  const handleCellChange3 = (rowIndex, colName, value) => {
    if (update3 == true) {
      const updatedValues = JSON.parse(JSON.stringify(val3));
      updatedValues[0][rowIndex][colName] = parseInt(value);
      // var totalkeys = arrayval3.map((e) => e);
      // totalkeys.pop();
      // for (const key of totalkeys) {
      //   total += updatedValues[0][rowIndex][key];
      // }
      // updatedValues[0][rowIndex].Total = total;
      setVal3(updatedValues);
    } else {
      const updatedValues = JSON.parse(JSON.stringify(val3));
      // var total = 0;
      updatedValues[0][rowIndex][colName] = parseInt(value);
      // var totalkeys = arrayval3.map((e) => e);
      // totalkeys.pop();
      // for (const key of totalkeys) {
      //   total += updatedValues[0][rowIndex][key];
      // }
      // updatedValues[0][rowIndex].Total = total;
      setVal3(updatedValues);
    }
  };
  const handlePost3 = async () => {
    var data = {};
    var pdate = softDate3.toString().slice(4, 15);
    if (update1 == true) {
      data = {
        input_data: { particular: val3[0],  aging: arrayval3 },
      };
    } else {
      data = {
        input_data: { particular: val3[0], aging: arrayval3 },
      };
    }
    //  data = {
    //   input_data: val1[0],
    // };
    try {
      console.log("hiiii------------>>>", data);
      const resp = await invFg(data)
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
  };
  const handleCellChange4 = (rowIndex, colName, value) => {
    if (update4 == true) {
      const updatedValues = JSON.parse(JSON.stringify(val4));
      updatedValues[0][rowIndex][colName] = parseInt(value);
      var totalkeys = arrayval4.map((e) => e);
      // totalkeys.pop();
      // for (const key of totalkeys) {
      //   total += updatedValues[0][rowIndex][key];
      // }
      // updatedValues[0][rowIndex].Total = total;
      setVal4(updatedValues);
    } else {
      const updatedValues = JSON.parse(JSON.stringify(val4));
      // var total = 0;
      updatedValues[0][rowIndex][colName] = parseInt(value);
      // var totalkeys = arrayval4.map((e) => e);
      // totalkeys.pop();
      // for (const key of totalkeys) {
      //   total += updatedValues[0][rowIndex][key];
      // }
      // updatedValues[0][rowIndex].Total = total;
      console.log("hii===",updatedValues);
      setVal4(updatedValues);
    }
  };
  const handlePost4 = async () => {
    var data = {};
    var pdate = softDate4.toString().slice(4, 15);
    if (update1 == true) {
      data = {
        input_data: { particular: val4[0], aging: arrayval4 },
      };
    } else {
      data = {
        input_data: { particular: val4[0], aging: arrayval4 },
      };
    }
    //  data = {
    //   input_data: val1[0],
    // };
    try {
      console.log("hiiii------------>>>", data);
      const resp = await invRm(data);
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
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    var getUserData = localStorage.getItem("userDetails");
    var userData = cryptojs.AES.decrypt(getUserData, "ifbHad").toString(cryptojs.enc.Utf8);
    var jsonData = JSON.parse(userData);
    var moduleAccess = jsonData.module_access;
    var arr = moduleAccess.split(",");
    setModule(arr);
    // console.log("datas>>>", arr);
  }, []);
  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <LoadingScreen />
      ) : module.includes("Retrodata") ? (
        <DashboardLayout>
          <DashboardNavbar />
          <SoftBox>
            <SoftTypography variant="h1" component="label" fontWeight="Bold">
              Retrodata Update
            </SoftTypography>
            <Card style={{ display: "flex" }}>
              <Card
                bordered
                style={{ padding: "5px", marginBottom: "20px", boxShadow: "0px 2px 5px #c9c9c9" }}
              >
                <SoftBox display="flex">
                  <SoftTypography variant="h3" fontWeight="bold" color="success">
                    {" "}
                    Creditors Outstanding
                  </SoftTypography>
                  <SoftBox width={200} style={{ marginLeft: "533px" }}>
                    <SoftDatePicker
                      value={softDate1}
                      placeholder="Select Date"
                      onChange={(e) => {
                        setSoftDate1(e[0]);
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
                  style={{ fontSize: "14px", fontWeight: "bold", textAlign: "center" }}
                >
                  <thead>
                    <tr>
                      <th>Date</th>
                      {arrayval1.map((p, index) => {
                        return <th key={index}>{p}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {update1 === true
                      ? marray1.map((e1, index1) => {
                          return (
                            <tr key={index1}>
                              <td>{e1}</td>
                              {arrayval1.map((e2, index2) => {
                                if (
                                  update1 === true &&
                                  val1 !== undefined &&
                                  val1 !== null &&
                                  val1 != {}
                                ) {
                                  var newval1 = val1[0][e1][e2];
                                  if (e2 != "Total") {
                                    return (
                                      <td key={index2}>
                                        <FormField
                                          type="number"
                                          defaultValue={newval1}
                                          onChange={(e) => {
                                            handleCellChange1(e1, e2, e.target.value);
                                          }}
                                        />
                                      </td>
                                    );
                                  } else {
                                    return (
                                      <td key={index2}>
                                        <FormField type="number" value={newval1} disabled />
                                      </td>
                                    );
                                  }
                                }
                              })}
                            </tr>
                          );
                        })
                      : marray1.map((e1, index1) => {
                          return (
                            <tr key={index1}>
                              <td>{e1}</td>
                              {arrayval1.map((e2, index2) => {
                                var newval1 = val1[0][e1][e2];
                                if (e2 != "Total") {
                                  return (
                                    <td key={index2}>
                                      <FormField
                                        type="number"
                                        defaultValue={newval1}
                                        onChange={(e) => {
                                          console.log("the changes", e1, e2);
                                          handleCellChange1(e1, e2, e.target.value);
                                        }}
                                      />
                                    </td>
                                  );
                                } else {
                                  return (
                                    <td key={index2}>
                                      <FormField type="number" value={newval1} disabled />
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
                  onClick={handlePost1}
                >
                  Upload
                </SoftButton>
              </Card>
               <Card bordered style={{ padding: "5px", marginBottom: "20px" }}>
                <SoftBox display="flex">
                  <SoftTypography variant="h3" fontWeight="bold" color="success">
                    {" "}
                    Debtors Outstanding
                  </SoftTypography>
                  <SoftBox width={200} style={{ marginLeft: "552px" }}>
                  <SoftDatePicker
                      value={softDate1}
                      placeholder="Select Date"
                      onChange={(e) => {
                        setSoftDate2(e[0]);
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
                  style={{ fontSize: "14px", fontWeight: "bold", textAlign: "center" }}
                >
                  <thead>
                    <tr>
                      <th>Date</th>
                      {arrayval2.map((p, index) => {
                        return <th key={index}>{p}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                  {update2 === true
                      ? marray2.map((e1, index1) => {
                          return (
                            <tr key={index1}>
                              <td>{e1}</td>
                              {arrayval2.map((e2, index2) => {
                                if (
                                  update2 === true &&
                                  val2 !== undefined &&
                                  val2 !== null &&
                                  val2 != {}
                                ) {
                                  var newval1 = val2[0][e1][e2];
                                  if (e2 != "Total") {
                                    return (
                                      <td key={index2}>
                                        <FormField
                                          type="number"
                                          defaultValue={newval1}
                                          onChange={(e) => {
                                            handleCellChange2(e1, e2, e.target.value);
                                          }}
                                        />
                                      </td>
                                    );
                                  } else {
                                    return (
                                      <td key={index2}>
                                        <FormField type="number" value={newval1} disabled />
                                      </td>
                                    );
                                  }
                                }
                              })}
                            </tr>
                          );
                        })
                      : marray2.map((e1, index1) => {
                          return (
                            <tr key={index1}>
                              <td>{e1}</td>
                              {arrayval2.map((e2, index2) => {
                                var newval1 = val2[0][e1][e2];
                                if (e2 != "Total") {
                                  return (
                                    <td key={index2}>
                                      <FormField
                                        type="number"
                                        defaultValue={newval1}
                                        onChange={(e) => {
                                          console.log("the changes", e1, e2);
                                          handleCellChange2(e1, e2, e.target.value);
                                        }}
                                      />
                                    </td>
                                  );
                                } else {
                                  return (
                                    <td key={index2}>
                                      <FormField type="number" value={newval1} disabled />
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
                  onClick={handlePost2}
                >
                  Upload
                </SoftButton>
              </Card>
             <Card bordered style={{ padding: "5px", marginBottom: "20px" }}>
                <SoftBox display="flex">
                  <SoftTypography variant="h3" fontWeight="bold" color="success">
                    {" "}
                    Inventory Finished Goods
                  </SoftTypography>
                  <SoftBox width={200} style={{ marginLeft: "487px" }}>
                      <SoftDatePicker
                      value={softDate3}
                      placeholder="Select Date"
                      onChange={(e) => {
                        setSoftDate3(e[0]);
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
                  style={{ fontSize: "14px", fontWeight: "bold", textAlign: "center" }}
                >
                  <thead>
                    <tr>
                      <th>Date</th>
                       {arrayval3.map((p, index) => {
                        return <th key={index}>{p}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                      {update3 === true
                      ? marray3.map((e1, index1) => {
                          return (
                            <tr key={index1}>
                              <td>{e1}</td>
                              {arrayval3.map((e2, index2) => {
                                if (
                                  update3 === true &&
                                  val3 !== undefined &&
                                  val3 !== null &&
                                  val3 != {}
                                ) {
                                  var newval1 = val3[0][e1][e2];
                                  if (e2 != "Total") {
                                    return (
                                      <td key={index2}>
                                        <FormField
                                          type="number"
                                          defaultValue={newval1}
                                          onChange={(e) => {
                                            handleCellChange3(e1, e2, e.target.value);
                                          }}
                                        />
                                      </td>
                                    );
                                  } else {
                                    return (
                                      <td key={index2}>
                                        <FormField type="number" value={newval1} disabled />
                                      </td>
                                    );
                                  }
                                }
                              })}
                            </tr>
                          );
                        })
                      : marray3.map((e1, index1) => {
                          return (
                            <tr key={index1}>
                              <td>{e1}</td>
                              {arrayval3.map((e2, index2) => {
                                var newval1 = val3[0][e1][e2];
                                if (e2 != "Total") {
                                  return (
                                    <td key={index2}>
                                      <FormField
                                        type="number"
                                        defaultValue={newval1}
                                        onChange={(e) => {
                                          console.log("the changes", e1, e2);
                                          handleCellChange3(e1, e2, e.target.value);
                                        }}
                                      />
                                    </td>
                                  );
                                } else {
                                  return (
                                    <td key={index2}>
                                      <FormField type="number" value={newval1} disabled />
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
                  onClick={handlePost3}
                >
                  Upload
                </SoftButton>
              </Card>
              <Card bordered style={{ padding: "5px", marginBottom: "20px" }}>
                <SoftBox display="flex">
                  <SoftTypography variant="h3" fontWeight="bold" color="success">
                    {" "}
                    Inventory Raw Material
                  </SoftTypography>
                  <SoftBox width={200} style={{ marginLeft: "519px" }}>
                     <SoftDatePicker
                      value={softDate4}
                      placeholder="Select Date"
                      onChange={(e) => {
                        setSoftDate4(e[0]);
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
                  style={{ fontSize: "14px", fontWeight: "bold", textAlign: "center" }}
                >
                  <thead>
                    <tr>
                      <th>Date</th>
                       {arrayval4.map((p, index) => {
                        return <th key={index}>{p}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                        {update4 === true
                      ? marray4.map((e1, index1) => {
                          return (
                            <tr key={index1}>
                              <td>{e1}</td>
                              {arrayval4.map((e2, index2) => {
                                if (
                                  update4 === true &&
                                  val4 !== undefined &&
                                  val4 !== null &&
                                  val4 != {}
                                ) {
                                  var newval1 = val4[0][e1][e2];
                                  if (e2 != "Total") {
                                    return (
                                      <td key={index2}>
                                        <FormField
                                          type="number"
                                          defaultValue={newval1}
                                          onChange={(e) => {
                                            handleCellChange4(e1, e2, e.target.value);
                                          }}
                                        />
                                      </td>
                                    );
                                  } else {
                                    return (
                                      <td key={index2}>
                                        <FormField type="number" value={newval1} disabled />
                                      </td>
                                    );
                                  }
                                }
                              })}
                            </tr>
                          );
                        })
                      : marray4.map((e1, index1) => {
                          return (
                            <tr key={index1}>
                              <td>{e1}</td>
                              {arrayval4.map((e2, index2) => {
                                var newval1 = val4[0][e1][e2];
                                if (e2 != "Total") {
                                  return (
                                    <td key={index2}>
                                      <FormField
                                        type="number"
                                        defaultValue={newval1}
                                        onChange={(e) => {
                                          console.log("the changes", e1, e2);
                                          handleCellChange4(e1, e2, e.target.value);
                                        }}
                                      />
                                    </td>
                                  );
                                } else {
                                  return (
                                    <td key={index2}>
                                      <FormField type="number" value={newval1} disabled />
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
                  onClick={handlePost4}
                >
                  Upload
                </SoftButton>
              </Card>
            </Card>
          </SoftBox>
        </DashboardLayout>
      ) : (
        <DashboardLayout>
          <DashboardNavbar />
          <SoftBox>
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "80vh",
              }}
            >
              <p>You dont have access of this module</p>
            </Card>
          </SoftBox>
        </DashboardLayout>
      )}
    </>
  );
}

export default Index;
