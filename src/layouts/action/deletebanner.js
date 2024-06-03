/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState,useRef,useEffect } from "react";

// react-router-dom components
import { Link,useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";
// import {addAccount} from  "assets/globalAPI";
import { ToastContainer, toast } from "react-toastify";
import Swal from 'sweetalert2';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import axios from 'axios';
import Table from "react-bootstrap/Table";
import {IconButton} from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';


// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     TablePagination,
//     Paper,
//     IconButton,
//     TextField,
//     Button,
//   } from '@mui/material';
  import DeleteIcon from '@mui/icons-material/Delete';
  // import TextField from '@mui/material/TextField';
  import Autocomplete from '@mui/material/Autocomplete';


// Images
import curved6 from "assets/images/curved-images/curved-6.jpg";
import { fetchbanner,deleteBanner} from "assets/globalAPI";
import { Mp } from "@mui/icons-material";

function DeleteBanner() {
 
  const [agreement, setAgremment] = useState(true);
  const toastId = useRef(null);
  const basepathlocal="http://localhost:3005/";
  const basepathglobal="https://app-backend-dscp.onrender.com/";
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [data,setData]=useState([]);
  const handleSetAgremment = () => setAgremment(!agreement);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log("data fetched");
      const response = await fetchbanner();
      console.log("data fetched111111111111111",response.data);

      setData(response.data.result);
    } catch (error) {
      console.log("data fetched2222222222222222",error);
      console.error('Error fetching data', error);
    }
  };
  const handleDelete = async (id) => {
    const data={
      appId:id
    }
    console.log("khgvfc",data);
    try {
      const respo=await deleteBanner(data)
      console.log("data fetched111111111111111",respo.data);
      if (respo.status == 200) {
        Swal.fire({
          icon: 'success',
          title: " succesfully Deleted",
          // text: res.message,
          showConfirmButton: false,
          timer: 1500
        });
      }
      fetchData(); // Refresh data after deletion
    } catch (error) {
      console.error('Error deleting data', error);
    }
  };
 

  return (
  
    <DashboardLayout>
    <DashboardNavbar />
      <Card>
      <Table striped bordered responsive style={{ fontSize: "15px" }}>
        <thead>
          <tr>
            {/* <TableCell>ID</TableCell> */}
            <th >Name</th>
            <th >Event</th>
            <th >Offer</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              {/* <TableCell>{item._id}</TableCell> */}
              <td>{item.appName}</td>
              <td>{item.event}</td>
              <td>{item.offers}</td>

              <td >
                <img src={`${basepathglobal}${item.filesPath}`} alt={item.appName} style={{ width: 220, height: 70 }} />
              </td>
              <td align="right">
                <IconButton onClick={() => handleDelete(item._id)}>
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    
      </Card>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}



export default DeleteBanner;
