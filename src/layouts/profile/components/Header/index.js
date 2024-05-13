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

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// @mui material components
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import Switch from "@mui/material/Switch";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftSelect from "components/SoftSelect";

import SoftButton from "components/SoftButton";
// Soft UI Dashboard React examples
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Soft UI Dashboard React icons
import Cube from "examples/Icons/Cube";
import Document from "examples/Icons/Document";
import Settings from "examples/Icons/Settings";

// Soft UI Dashboard React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import burceMars from "assets/images/bruce-mars.jpg";
import curved0 from "assets/images/curved-images/curved0.jpg";
import {
  settingGSTNvalidation,
  authDistributionChannel,
  authAccountGroup,
  getGSTValidationStatus,
} from "../../../../assets/globalAPI/GlobalApi";
function Header() {
  const [loader, setLoader] = useState(false);
  const MySwal = withReactContent(Swal);
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();
  const [userid, setUserId] = useState("");
  const [username, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [lgShow, setLgShow] = useState(false);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [checked, setChecked] = useState(false);
  const [distributionChannel, setDistributionChannel] = useState({});
  const [validationData, setValidationData] = useState([]);
  const [accountGroup, setAccountGroup] = useState({});
  const [selectedAccountGroup, setSelectedAccountGroup] = useState("");
  const [dcValue, setdcValue] = useState("");
  const [validationStatus, setValidationStatus] = useState("");
  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    if (localStorage.getItem("userid_details")) {
      let session = localStorage.getItem("userid_details");
      let userid_array = JSON.parse(session);
      let userid = userid_array.userid;
      let username = userid_array.name;
      let user_type = userid_array.user_type;
      let user_email = userid_array.email;
      setUserId(userid);
      setUserName(username);
      setUserEmail(user_email);
    } else {
      navigate("/");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);
  const handleSettings = () => (event) => {
    setLgShow(true);

    const group_data = {
      action: "account_group",
    };
    authAccountGroup(JSON.stringify(group_data))
      .then(
        function (response) {
          var res = response.data;
          if (res.status == "true" && res.code == "200") {
            setAccountGroup(res.array);
          } else {
            setAccountGroup(res.array);
          }
        }.bind(this)
      )
      .catch(function (error) {
        setLoader(false);
        console.log(error);
      });
    const data = {
      action: "distributionChannel",
    };

    authDistributionChannel(JSON.stringify(data))
      .then(
        function (response) {
          var res = response.data;
          if (res.status == "true" && res.code == "200") {
            setDistributionChannel(res.array);
          } else {
            setDistributionChannel(res.array);
          }
        }.bind(this)
      )
      .catch(function (error) {
        setLoader(false);
        console.log(error);
      });

    const data2 = {
      action: "getGSTNvalidation",
    };
    getGSTValidationStatus(JSON.stringify(data2))
      .then(
        function (response) {
          var res = response.data;
          console.log(res);
          if (res.status == "true" && res.code == "200") {
            setValidationData(res.array);
          } else {
            setValidationData(res.array);
          }
        }.bind(this)
      )
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleOnChange = async (event) => {
    setSelectedAccountGroup(event.value);
  };
  const handleDCOnChange = async (event) => {
    setdcValue(event.value);
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
    setValidationStatus(event.target.checked);
  };
  const handleSubmit = (event) => {
    let account_group = selectedAccountGroup;
    let dc = dcValue;
    let status = validationStatus;
    if (account_group != "" && dc != "") {
      const data = {
        action: "settings_gstn_validation",
        account_group: account_group,
        dc: dc,
        status: status,
      };
      settingGSTNvalidation(JSON.stringify(data))
        .then(
          function (response) {
            var res = response.data;
            console.log(res);
            if (res.status == "true" && res.code == "200") {
              MySwal.fire({
                title: <strong>Success</strong>,
                html: <i>{res.message}</i>,
                icon: "success",
              }).then(() => {
                window.location.reload();
              });
            } else {
            }
          }.bind(this)
        )
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <SoftBox position="relative">
      <ToastContainer />
      <DashboardNavbar absolute light />
      <SoftBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.6),
              rgba(gradients.info.state, 0.6)
            )}, url(${curved0})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          backdropFilter: `saturate(200%) blur(30px)`,
          backgroundColor: ({ functions: { rgba }, palette: { white } }) => rgba(white.main, 0.8),
          boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
          position: "relative",
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <SoftAvatar
              src={burceMars}
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item>
            <SoftBox height="100%" mt={0.5} lineHeight={1}>
              <SoftTypography variant="h5" fontWeight="medium">
                {username}
              </SoftTypography>
              <SoftTypography variant="button" color="text" fontWeight="medium">
                {userid}
              </SoftTypography>
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs
                orientation={tabsOrientation}
                value={tabValue}
                onChange={handleSetTabValue}
                sx={{ background: "transparent" }}
              >
                <Tab label="App" icon={<Cube />} />
                <Tab label="Message" icon={<Document />} />
                <Tab label="Settings" icon={<Settings />} onClick={handleSettings()} />
                <Modal
                  size=""
                  show={lgShow}
                  onHide={() => setLgShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      Set GSTN Validation Status
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Table bordered hover style={{ fontSize: 13 }}>
                      <tbody>
                        <tr>
                          <td>
                            <SoftBox>
                              <SoftSelect
                                name="customer_account_group"
                                options={accountGroup}
                                onChange={handleOnChange}
                              />
                            </SoftBox>
                          </td>
                          <td>
                            <SoftBox>
                              <SoftSelect
                                name="dc"
                                options={distributionChannel}
                                onChange={handleDCOnChange}
                              />
                            </SoftBox>
                          </td>
                          <td>
                            <Switch
                              checked={checked}
                              onChange={handleChange}
                              inputProps={{ "aria-label": "controlled" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="3">
                            <SoftButton variant="gradient" color="info" onClick={handleSubmit}>
                              save
                            </SoftButton>
                          </td>
                        </tr>
                        <tr style={{ fontSize: 12 }}>
                          <td>
                            <strong>Account Group</strong>
                          </td>
                          <td>
                            <strong>Distribution Channel</strong>
                          </td>
                          <td>
                            <strong>GSTN Validation</strong>
                          </td>
                        </tr>
                        {validationData.map((item, idx) => {
                          return (
                            <tr key={idx}>
                              <td>{item.account_group}</td>
                              <td>{item.distribution_channel}</td>
                              <td>{item.gstn_validation == 1 ? <DoneIcon /> : <CloseIcon />}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </Modal.Body>
                </Modal>
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </Card>
    </SoftBox>
  );
}

export default Header;
