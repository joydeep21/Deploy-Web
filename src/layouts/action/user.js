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

// import { useState,useRef,useEffect } from "react";

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

// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Paper,
//     IconButton,
//     Button,
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogContentText,
//     DialogTitle,
//     TextField,
//   } from '@mui/material';
//   import DeleteIcon from '@mui/icons-material/Delete';
  // import TextField from '@mui/material/TextField';
  import { Edit, Delete } from '@mui/icons-material'; 
  import React from "react";
  import { useState, useEffect } from "react";
  import Table from "react-bootstrap/Table";
  import TextField from "@mui/material/TextField";
  import Autocomplete from "@mui/material/Autocomplete";
  import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
  import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

  

// Images
import curved6 from "assets/images/curved-images/curved-6.jpg";
import { fetchUser,deleteUser} from "assets/globalAPI";
import { Mp } from "@mui/icons-material";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


// function User() {
 
//   const [agreement, setAgremment] = useState(true);
//   const toastId = useRef(null);
//   const basepathlocal="http://localhost:3005/";
//   const basepathglobal="https://app-backend-dscp.onrender.com/";
//   const MySwal = withReactContent(Swal);
//   const navigate = useNavigate();
//   const [loader, setLoader] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [form, setForm] = useState();

//   const handleSetAgremment = () => setAgremment(!agreement);
  
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('/api/users'); // Replace with your API endpoint
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users', error);
//     }
//   };

//   const deleteUser = async (userId) => {
//     try {
//       await axios.delete(`/api/users/${userId}`); // Replace with your API endpoint
//       setUsers(users.filter(user => user.id !== userId));
//     } catch (error) {
//       console.error('Error deleting user', error);
//     }
//   };

//   const openEditModal = (user) => {
//     setCurrentUser(user);
//     setForm({ name: user.name, email: user.email });
//     setIsModalOpen(true);
//   };

//   const closeEditModal = () => {
//     setIsModalOpen(false);
//     setCurrentUser(null);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const saveUser = async () => {
//     try {
//       await axios.put(`/api/users/${currentUser.id}`, form); // Replace with your API endpoint
//       setUsers(users.map(user => (user.id === currentUser.id ? { ...user, ...form } : user)));
//       closeEditModal();
//     } catch (error) {
//       console.error('Error updating user', error);
//     }
//   };
 

//   return (
  
//     <DashboardLayout>
//     <DashboardNavbar />
//       <Card>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map(user => (
//               <TableRow key={user.id}>
//                 <TableCell>{user.id}</TableCell>
//                 <TableCell>{user.name}</TableCell>
//                 <TableCell>{user.email}</TableCell>
//                 <TableCell>
//                   <IconButton onClick={() => openEditModal(user)}><Edit /></IconButton>
//                   <IconButton onClick={() => deleteUser(user.id)}><Delete /></IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Dialog open={isModalOpen} onClose={closeEditModal}>
//         <DialogTitle>Edit User</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To edit user details, please update the fields below and click save.
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             name="name"
//             label="Name"
//             type="text"
//             fullWidth
//             value="hii"
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="email"
//             label="Email"
//             type="email"
//             fullWidth
//             value="hii"
//             onChange={handleInputChange}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={closeEditModal} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={saveUser} color="primary">
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//       </Card>
//       {/* <Footer /> */}
//     </DashboardLayout>
//   );
// }

const User = () => {
    const optionsmodule = ["Retrodata", "Weeklyupload", "One Pager", "Breakup sheet", "userCreation"];
    const [data, setData] = useState([]);
    // var moduleAccess1 = [];
    const fetchData = async () => {
      const response = await fetchUser();
      const res = response.data;
      console.log("ggcdcfdgxsdx11111111111111",res);
      try {
        if (res.status == true) {
          var resData = res.result;
          console.log("ggcdcfdgxsdx",resData);
          setData(resData);
        }
      } catch (err) {
        console.log("err>>", err);
      }
    };
    
    const handleChange = (value,name,index) => {
         const updateval = [...data];
      // setData(updateval);
     
        setData((prevDataList) => {
          const newDataList = [...prevDataList];
          newDataList[index] = {
            ...newDataList[index],
            [name]: value,
          };
          return newDataList;
        });
        console.log("jjj2", data[index],"jjj11111",data);
      
    };
    const handleSubmit = (i) => {
      console.log("data for post in module ascess>>", data);
     
  
    };

    const handleDelete = async (id) => {
      const data={
        userId:id
      }
      console.log("khgvfc",data);
      try {
        const respo=await deleteUser(data)
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
    useEffect(() => {
      fetchData();
    }, []);

    return (
      <DashboardLayout>
        <DashboardNavbar />
        <SoftBox>
          <h3 style={{ color: "skyblue" }}>User Table</h3>
        </SoftBox>
        <Card
          style={{
            height: "80vh",
            width: "100%",
            padding: "10px",
            border: "none",
            boxShadow: "0px 3px 4px grey",
          }}
        >
          <Table striped bordered responsive style={{ fontSize: "15px" }}>
            <thead>
              <tr>
                <th> Name</th>
                <th>Account</th>
                <th>Email</th>
                <th>Address Access</th>
                <th>Contact</th>
                <th>Use_Type</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <input
                        className="inp"
                        type="text"
                        name="Name"
                        defaultValue={val.Name}
                        onChange={(e) => {
                          var val = e.target.value;
                          var name = e.target.name;
                          handleChange(val, name, index);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        className="inp"
                        type="text"
                        disabled
                        name="accountNumber"
                        defaultValue={val.accountNumber}
                        onChange={(e) => {
                          var val = e.target.value;
                          var name = e.target.name;
                          handleChange(val, name, index);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        className="inp"
                        type="email"
                        name="email"
                        disabled
                        value={val.email}
                        onChange={(e) => {
                          var val = e.target.value;
                          var name = e.target.name;
                          handleChange(val, name, index);
                        }}
                      />
                    </td> 
                    <td>
                    <textarea className="inp"
                        // type="text"
                        name="address"
                        value={val.address}
                        onChange={(e) => {
                          var val = e.target.value;
                          var name = e.target.name;
                          handleChange(val, name, index);
                        }}></textarea>
                      {/* <input
                        className="inp"
                        type="text"
                        name="address"
                        value={val.address}
                        onChange={(e) => {
                          var val = e.target.value;
                          var name = e.target.name;
                          handleChange(val, name, index);
                        }}
                      /> */}
                    </td>
                    <td>
                      <input
                        className="inp"
                        type="text"
                        name="contact"
                        disabled
                        value={val.contact}
                        onChange={(e) => {
                          var val = e.target.value;
                          var name = e.target.name;
                          handleChange(val, name, index);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        className="inp"
                        type="text"
                        name="type"
                        value={val.type}
                        onChange={(e) => {
                          var val = e.target.value;
                          var name = e.target.name;
                          handleChange(val, name, index);
                        }}
                      />
                    </td>
                    {/* <td>
                        <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        placeholder="module_access"
                        name="module_access"
                        options={optionsmodule}
                        value={modacces}
                      onChange={(e,newValue,name)=>{
                        handleChange(newValue,name,index)
                    }}
                        renderOption={(props, option, { selected }) => (
                          <li {...props}>
                            <Checkbox
                              icon={icon}
                              checkedIcon={checkedIcon}
                              style={{ marginRight: 8 }}
                              checked={selected}
                            />
                            {option}
                          </li>
                        )}
                        style={{ width: 353 }}
                        renderInput={(params) => (
                          <TextField style={{width:"202px !important"}} {...params}  placeholder="Module access"
                          />
                        )}
                      />
                    </td> */}
                    {/* <td>
                      <input
                        className="inp"
                        type="text"
                        name="device_id"
                        disabled
                        value={val.device_id}
                        onChange={(e) => {
                          var val = e.target.value;
                          var name = e.target.name;
                          handleChange(val, name, index);
                        }}
                      />
                    </td> */}
                    <td>
                      <button
                        className="btn1"
                        onClick={(e) => {
                          // console.log("index values", e, index,val)
                          handleSubmit(index);
                        }}
                      >
                        UPDATE
                      </button>
                    </td>
                    <td align="right">
                <IconButton onClick={() => handleDelete(val._id)}>
                  <DeleteIcon />
                </IconButton>
              </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card>
      </DashboardLayout>
    );
  };



export default User;
