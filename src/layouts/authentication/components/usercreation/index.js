import React from "react";
import { useState,useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import Form from "react-bootstrap/Form";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { usercreate } from "assets/globalAPI/GlobalApi";
import LoadingScreen from "layouts/loading/loading";
// import { MDBSelect } from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";
import SoftSelect from "components/SoftSelect";
import { valHooks } from "jquery";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


function Usercreation() {
  const [isLoading, setIsLoading] = useState(true);
  var cryptojs=require('crypto-js');
  const[module,setModule]=useState([])
  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    var getUserData=localStorage.getItem("userDetails");
    var userData=cryptojs.AES.decrypt(getUserData,"ifbHad").toString(cryptojs.enc.Utf8);
    var jsonData=JSON.parse(userData);
    var moduleAccess=jsonData.module_access;
    var arr=moduleAccess.split(",");
    setModule(arr)
    console.log("datas>>>",arr);
    },[])
  const optionstype = ["admin", "superAdmin"];
   const optionsmodule = ["Retrodata", "Weeklyupload","One Pager","Breakup sheet","userCreation"];
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    device_id: "",
    type: "", // Default type is RegularUser
    module_access: ""
  });

  const handleInputChange = (value,name) => {
    //  name = event.target;
    //  value= event.target;
    if(name==="selectOption")
    {
        name= "module_access";
        setUser((prevUser) => 
           ({
            ...prevUser,
            [name]: value,
          }));
    }
    else{
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
}
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    if(user.email !=null && user.first_name !=null && user.last_name !=null && user.module_access !=null &&
      user.password != null && user.type !=null && user.device_id != null )
      {
    // Here you can perform actions like sending user data to an API or a database
    console.log("User created:", user);
    // if(user!=null)
    // {
    //   toast.success("user registerd successfully");
    // }
    try{
      var resp =await usercreate(user);
      console.log("api status:", resp.data);
      if(resp.status==="200")
      {
        toast.success("user registerd successfully",resp.message);
      }
     
      else if(resp.status==="201")
      {
        toast.error(resp.message);
      }
    }
    catch(err)
    {
      toast.error("error to create user or network error");
    }
  }
  else{
    toast.error("please fill all the mandatory data");
  }
    

  };

  return (
    <><ToastContainer />
    {isLoading?<LoadingScreen/>:
    module.includes("userCreation")?<DashboardLayout>
      
        <DashboardNavbar/>
        <div style={{ display: "flex", justifyContent: "center"}}>
          <Card
            style={{
              width: "400px",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              borderBlock: "3px",
              zIndex: 0
            }}
            className="userCreateCard"
          >
            <SoftBox p={1}  textAlign="center">
              <SoftTypography variant="h5" fontWeight="medium">
                Add User
              </SoftTypography>
            </SoftBox>

            <SoftBox pt={2} pb={3} px={3}>
              <SoftBox>
                <form noValidate onSubmit={handleSubmit}>
                  <SoftBox mb={2}>
                    <SoftInput
                    require
                      type="email"
                      placeholder="email"
                      name="email"
                      id="email"
                    //   defaultvalue={user.email}
                    onChange={(e)=>{
                        // multival=value;
                        var val=e.target.value;
                        var name=e.target.name
                        handleInputChange(val,name)
                        // console.log(e.target.name,"hhjhjhj")
                    }}
                    />
                  </SoftBox>
                  <SoftBox mb={2}>
                    <SoftInput
                      placeholder="device_id"
                      name="device_id"
                      id="device_id"
                      defaultvalue={user.device_id}
                      onChange={(e)=>{
                        var val=e.target.value;
                        var name=e.target.name
                        handleInputChange(val,name)
                    }}
                    />
                  </SoftBox>
                  <SoftBox mb={2}>
                    <SoftInput
                      placeholder="first_name"
                      name="first_name"
                      id="first_name"
                      defaultvalue={user.first_name}
                      onChange={(e)=>{
                        // multival=value;
                        var val=e.target.value;
                        var name=e.target.name
                        handleInputChange(val,name)
                        // console.log(e.target.name,"hhjhjhj")
                    }}
                    />
                  </SoftBox>
                  <SoftBox mb={2}>
                    <SoftInput
                      placeholder="last_name"
                      name="last_name"
                      id="last_name"
                      defaultvalue={user.last_name}
                      onChange={(e)=>{
                        // multival=value;
                        var val=e.target.value;
                        var name=e.target.name
                        handleInputChange(val,name)
                        // console.log(e.target.name,"hhjhjhj")
                    }}
                    />
                  </SoftBox>
                  <SoftBox mb={2}>
                    <SoftInput
                      type="password"
                      placeholder="Password"
                      name="password"
                      id="password"
                      defaultvalue={user.password}
                      onChange={(e)=>{
                        // multival=value;
                        var val=e.target.value;
                        var name=e.target.name
                        handleInputChange(val,name)
                        // console.log(e.target.name,"hhjhjhj")
                    }}
                    />
                  </SoftBox>
                  <SoftBox mb={2}>
                    <Form.Select
                      placeholder="type"
                      name="type"
                      id="type"
                      value={user.type}
                      onChange={(e)=>{
                        // multival=value;
                        var val=e.target.value;
                        var name=e.target.name
                        handleInputChange(val,name)
                        // console.log(e.target.name,"hhjhjhj")
                    }}
                    >
                      {optionstype.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  </SoftBox>
                  <SoftBox mb={2} style={{width:"350px"}}>
                    <Autocomplete
                      multiple
                      id="checkboxes-tags-demo"
                      placeholder="module_access"
                    //   name={selectOption}
                      options={optionsmodule}
                      disableCloseOnSelect
                      getOptionLabel={(option) => option}
                    //   onChange={handleInputChange()}
                      onChange={(e,newValue,name)=>{
                        console.log(newValue,"hhjhjhj");
                        handleInputChange(newValue,name)
                        // multival=value;
                        
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
                        <TextField style={{width:"352px !important"}} {...params} placeholder="Module access"
                        />
                      )}
                    />
                  </SoftBox>
                  <SoftBox mt={4}>
                    <SoftButton variant="gradient" color="dark" fullWidth type="submit">
                      create user
                    </SoftButton>
                  </SoftBox>
                </form>
                <SoftBox mt={3} textAlign="center">
                  <SoftTypography
                    variant="button"
                    color="text"
                    fontWeight="regular"
                  ></SoftTypography>
                </SoftBox>
              </SoftBox>
            </SoftBox>
          </Card>
        </div>
      </DashboardLayout>:<DashboardLayout>
      <DashboardNavbar/>
      <SoftBox
      >
        <Card
        style={{
          display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100%",
            height:"80vh"
        }}
        >
        <p>You dont have access of this module</p>

        </Card>
        </SoftBox>
    </DashboardLayout>}
      
    </>
  );
}

export default Usercreation;
