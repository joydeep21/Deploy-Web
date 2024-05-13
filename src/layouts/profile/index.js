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
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
//import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import {login} from '../../assets/globalAPI/GlobalApi';
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
function Overview() {
  var CryptoJS = require("crypto-js");
  const [userid, setUserId] = useState('');
  const [username, setUserName] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [usertype, setUserType] = useState('');
  const [profilesListData, setProfilesListData] = useState([]);
  // const profilesListData = [
  //   {
      
  //     name: "Sophie B.",
  //     description: "Hi! I need more information..",
  //     action: {},
  //   },
  //   {
      
  //     name: "Anne Marie",
  //     description: "Awesome work, can you..",
  //     action: {},
  //   },
  //   {
      
  //     name: "Ivanna",
  //     description: "About files I can..",
  //     action: {},
  //   },
  //   {
      
  //     name: "Peterson",
  //     description: "Have a great afternoon..",
  //     action: {},
  //   },
  //   {

  //     name: "Nick Daniel",
  //     description: "Hi! I need more information..",
  //     action: {},
  //   },
  // ];
  // useEffect(() => { 
  //   if (localStorage.getItem('userDetails')) { 
  //     let session = localStorage.getItem('userDetails');

  //     // var userDetails = JSON.stringify(res.userdata);
  //     var encryptdetails = CryptoJS.AES.decrypt(session, "ifbHad");
  //     // console.log("encryptdetails>>",encryptdetails)
  //     const str = encryptdetails.toString(CryptoJS.enc.Utf8);
  //     //  localStorage.setItem("userDetails", str);
  //     // toastId.current = toast".success(res.message);
  //     console.log("strstr====>>>",str)

  //       let userid_array =JSON.parse(str);
  //       console.log("userid>>",userid_array)
  //       let userid = userid_array.id;
  //       // let username = userid_array.name;
  //       // let user_type = userid_array.user_type;
  //       // let password =  userid_array.password
  //       // let user_email = userid_array.email;
  //       setUserId(userid);
  //       // setUserName(username);
  //       // setUserEmail(user_email);
  //       // setUserType(user_type);

  //       const data = {
  //       email:"Pritam.manna@arodek.com",
  //       password:"12345",
  //       device_id:"ifnhad" 
  //       };
  //       console.log("data>>",data)
  //       login(JSON.stringify(data)).then(function(response) {
  //         var res = response.data;
  //           if(res.status=='true' && res.code=='200')
  //           {
  //             setProfilesListData(res.user_array);
  //           }else{
  //             setProfilesListData(res.user_array);
  //         }
  //         }.bind(this)
  //     )
  //     .catch(function(error) {
  //       setLoader(false)
  //       console.log(error);
      
  //     });

  //     }else{
      
  //     }
  // }, [userid]);




  return (

    <DashboardLayout>
      <DashboardNavbar/>
      {/* <Header /> */}
      <h1>fddcxyhjvv ftttty</h1>
      {/* <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
        <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
              title="profile information"
              description=""
              info={{
                fullName: username,
                email: useremail,
                userid: userid,
                type: usertype,
              }}
              social={[]}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
          
          {usertype=='superadmin'?
          <Grid item xs={12} xl={8}>
            <ProfilesList title="users" profiles={profilesListData} />
          </Grid>
          : null}
        </Grid>
        
      </SoftBox>
      

      <Footer /> */}
    </DashboardLayout>
  );
}

export default Overview;
