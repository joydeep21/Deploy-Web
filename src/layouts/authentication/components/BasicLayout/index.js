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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";


function BasicLayout({ title, description, image, children, loginImage }) {
  console.log(loginImage);
  return (
    <PageLayout>
      <SoftBox
        width="100%"
        height="100vh"
        borderRadius="0"
        position="fixed"
        // mx={2}
        // my={2}
        // pt={6}
        // pb={28}
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={10} lg={4}>
            <SoftBox mt={6} mb={1}>
              <SoftTypography variant="h1" color="white" fontWeight="bold">
                {title}
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={2}>
              <SoftTypography variant="body2" color="white" fontWeight="regular">
                {description}
              </SoftTypography>
            </SoftBox>
          </Grid>
        </Grid>
        <Grid container spacing={1} justifyContent="center" style={{display:"flex"}}>
          <Grid
            item
            xs={11}
            sm={9}
            md={8}
            lg={7}
            style={{
              backgroundColor: "#fff",
              overflow: "hidden",
              borderRadius: 0,
              padding: 0,
              boxShadow: "0rem 1.25rem 1.6875rem 0rem rgba(0, 0, 0, 0.4)",
              display:"flex"
            }}
            className="backbox"
          >
            <Grid container className="" >
              <Grid item xs={12} lg={8}>
                {/* <img src={loginIMG} style={{ width: "100%" }} /> */}
              </Grid>
              <Grid item xs={12} lg={4}>
                {children}
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </SoftBox>
      {/* <SoftBox mt={{ xs: -26, lg: -24 }} px={1} width="calc(100% - 2rem)" mx="auto">
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </SoftBox>
      <Footer /> */}
    </PageLayout>
  );
}

// Setting default values for the props of BasicLayout
BasicLayout.defaultProps = {
  title: "",
  description: "",
  loginImage: "",
};

// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
  loginImage: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
