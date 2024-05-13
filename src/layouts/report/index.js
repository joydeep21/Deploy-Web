import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// import Button from "react-bootstrap/Button";
// import XL from "../report/XLfile.docx";
// import fileDownload from "js-file-download";

// import Container from "react-bootstrap/Container";
import Debt from "../onePager/Debt";
import DebitorCol from "layouts/onePager/DebitorCol";
import Creditor from "layouts/onePager/Creditor";
import CreditorCol from "layouts/onePager/CreditorCol";

import { Card } from "@mui/material";
import LoadingScreen from "layouts/loading/loading";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState, useEffect } from "react";
import SoftDatePicker from "components/SoftDatePicker";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// import FormField from "components/formField";
import SoftBox from "components/SoftBox";
import Breakup from "layouts/Breakup";
const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  var cryptojs = require("crypto-js");
  const [module, setModule] = useState([]);
  const [key, setKey] = useState("Weekly Target");

  

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
    console.log("datas>>>", arr);
  }, [key]);
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);

  const XL = "http://192.168.52.132/hadapi/download/excel";
  // const handleDownload = (url, filename) => {
  //   fileDownload(url, filename);
  // };

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : module.includes("Weeklyupload") ? (
        <DashboardLayout>
          <DashboardNavbar />
          <div
            style={{
              height: "100%",
              borderRadius: "5px",
              backgroundColor: "white",
              boxShadow: "0px 2px 6px #767676",
            }}
          >
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => {
                setKey(k);
                console.log("imm clicked>>", k);
              }}
              className="mb-2"
              style={{
                paddingTop: "10px",
                paddingLeft: "10px",
                fontSize: "15px",
              }}
            >
              <Tab eventKey="Weekly Target" title="Weekly Target" style={{ padding: "20px 20px" }}>
                <Breakup />
              </Tab>
              <Tab
                eventKey="Debtor"
                title="Debtor"
                style={{ padding: "20px 20px" }}
              >
                <Debt />
              </Tab>
              <Tab
                eventKey="Debtor Collection"
                title="Debtor Collection"
                style={{ padding: "20px 20px" }}
              >
                 <DebitorCol />
              </Tab>
              <Tab eventKey="Creditor" title="Creditor" style={{ padding: "20px 20px" }}>
                <Creditor />
              </Tab>
              <Tab
                eventKey="Creditor Collection"
                title="Creditor Collection"
                style={{ padding: "20px 20px" }}
              >
                <CreditorCol />
              </Tab>
              <Tab eventKey="Report" title="Report" style={{ padding: "20px 20px" }}>
                <div
                  style={{
                    boxShadow: "0px 0px 6px rgb(211 211 211)",
                    height: "100%",
                    borderRadius: "5px",
                    padding: "10px 10px",
                    backgroundColor: "white",
                  }}
                >
                  {/* <img src={require()} alt="" /> */}
                  <Row>
                    <Col lg={4} style={{ paddingTop: "1rem", paddingLeft: "2rem" }}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Daily Report
                      </SoftTypography>
                      <SoftDatePicker />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4} style={{ paddingTop: "1rem", paddingLeft: "2rem" }}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Weekly Report
                      </SoftTypography>
                      <SoftDatePicker />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4} style={{ paddingTop: "1rem", paddingLeft: "2rem" }}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Monthly Report
                      </SoftTypography>
                      <SoftDatePicker label="Monthly Report" />
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col lg={3} style={{ paddingLeft: "2rem" }}>
                      <SoftButton
                        className="butpos"
                        style={{ width: "100px" }}
                        size="small"
                        color="info"
                      >
                        <a href={XL} target="blank" style={{ color: "white" }}>
                          {" "}
                          Download
                        </a>
                      </SoftButton>

                      {/* <Button
                    size="sm"
                    variant="success"
                    // onClick={(h) => {
                    //   handleDownload;
                    // }}
                    style={{
                      background: "linear-gradient(to right, #009933 0%, #33cc33 100%)",
                      border: "0px",
                    }}
                  >
                   <a href={XL} target="blank"> Download</a>
                  </Button> */}
                    </Col>
                  </Row>
                </div>
              </Tab>
            </Tabs>
          </div>
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
};

export default Index;
