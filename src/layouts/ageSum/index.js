import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState, useRef } from "react";
import { Card } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftSelect from "components/SoftSelect";
const Index = () => {
  const [type, setType] = useState("");
  const regbtn = ["EAST", "GOA FACTROY", "NORTH1", "NORTH2", "SOUTH", "WEST"];
  const allState = [
    "Bihar",
    "Jharkhand",
    "North East",
    "Orissa",
    "West Bengal",
    "Allcargo",
    "CHENNAI HUB",
    "GURGAON HUB",
    "IFB Goa AC Factory",
    "IFB Washer Factory",
    "NAGPUR HUB",
    "Delhi",
    "Rajasthan",
    "Uttar Pradesh",
    "Uttarakhand",
    "Chandigarh",
    "Haryana",
    "Jammu & Kashmir",
    "Punjab",
    "Andhra Pradesh",
    "Karnataka",
    "Kerala",
    "Tamil Nadu",
    "Telangana",
    "Chhattisgarh",
    "Goa",
    "Gujrat",
    "Madhya Pradesh",
    "Maharashtra",
  ];
  const east = ["Bihar", "Jharkhand", "North East", "Orissa", "West Bengal"];
  const goa = [
    "Allcargo",
    "CHENNAI HUB",
    "GURGAON HUB",
    "IFB Goa AC Factory",
    "IFB Washer Factory",
    "NAGPUR HUB",
  ];
  const north1 = ["Delhi", "Rajasthan", "Uttar Pradesh", "Uttarakhand"];
  const north2 = ["Chandigarh", "Haryana", "Jammu & Kashmir", "Punjab"];
  const south = ["Andhra Pradesh", "Karnataka", "Kerala", "Tamil Nadu", "Telangana"];
  const west = ["Chhattisgarh", "Goa", "Gujrat", "Madhya Pradesh", "Maharashtra"];
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftTypography fontWeight="bold" variant="h2">
        Fg age sum brunchwise
      </SoftTypography>
      <Card
        style={{
          padding: "10px 10px 10px 10px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <SoftBox
          style={{
            width: "50%",
            backgroundColor: "#e9e7e7",
            padding: "5px 5px 5px 5px",
            borderRadius: "10px",
          }}
        >
          <Row>
            <Col lg={12}>
              <SoftTypography
                verticalAlign="middle"
                gutterBottom
                fontWeight="bold"
                component="label"
                variant="h5"
                style={{
                  textAlign: "center",
                }}
              >
                Filter by region
              </SoftTypography>
            </Col>
            {regbtn.map((val, index) => {
              console.log("val", val);
              return (
                <Col lg={6} key={index}>
                  <button
                    className="regbtn"
                    onClick={(e) => {
                      setType(val);
                    }}
                  >
                    {val}
                  </button>
                </Col>
              );
            })}
          </Row>
        </SoftBox>

        <SoftBox
          style={{
            width: "100%",
            backgroundColor: "#e9e7e7",
            padding: "5px 5px 5px 5px",
            borderRadius: "10px",
            marginLeft: "1rem",
          }}
        >
          <Row>
            <Col lg={12}>
              <SoftTypography
                verticalAlign="middle"
                gutterBottom
                fontWeight="bold"
                component="label"
                variant="h5"
                style={{
                  textAlign: "center",
                }}
              >
                Filter by State
              </SoftTypography>
            </Col>
            {type === "EAST"
              ? east.map((val, index) => {
                  console.log(val);
                  return (
                    <Col key={index} lg={3}>
                      <button className="stbtn">{val}</button>
                    </Col>
                  );
                })
              : type === "GOA FACTROY"
              ? goa.map((val, index) => {
                  console.log(val);

                  return (
                    <Col key={index} lg={3}>
                      <button className="stbtn">{val}</button>
                    </Col>
                  );
                })
              : type === "NORTH1"
              ? north1.map((val, index) => {
                  console.log(val);

                  return (
                    <Col key={index} lg={3}>
                      <button className="stbtn">{val}</button>
                    </Col>
                  );
                })
              : type === "NORTH2"
              ? north2.map((val, index) => {
                  console.log(val);

                  return (
                    <Col key={index} lg={3}>
                      <button className="stbtn">{val}</button>
                    </Col>
                  );
                })
              : type === "SOUTH"
              ? south.map((val, index) => {
                  console.log(val);

                  return (
                    <Col key={index} lg={3}>
                      <button className="stbtn">{val}</button>
                    </Col>
                  );
                })
              : type === "WEST"
              ? west.map((val, index) => {
                  console.log(val);

                  return (
                    <Col key={index} lg={3}>
                      <button className="stbtn">{val}</button>
                    </Col>
                  );
                })
              : allState.map((val, index) => {
                  console.log(val);

                  return (
                    <Col key={index} lg={3}>
                      <button className="stbtn">{val}</button>
                    </Col>
                  );
                })}
          </Row>
        </SoftBox>
      </Card>
    </DashboardLayout>
  );
};

export default Index;
