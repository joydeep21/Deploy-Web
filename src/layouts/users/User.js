import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Card } from "react-bootstrap";
import { fetchUser } from "assets/globalAPI/GlobalApi";
import SoftBox from "components/SoftBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const User = () => {
  const optionsmodule = ["Retrodata", "Weeklyupload", "One Pager", "Breakup sheet", "userCreation"];
  const [data, setData] = useState([
    {
      first_name: "",
      last_name: "",
      email: "",
      module_access: "",
      device_id: "",
    },
  ]);
  var moduleAccess1 = [];
  const fetchData = async (e) => {
    const response = await fetchUser();
    const res = response.data;
    try {
      if (res.status === "200") {
        var resData = res.userdata;
        // console.log(resData);
        setData(resData);
      }
    } catch (err) {
      console.log("err>>", err);
    }
  };
  
  const handleChange = (value,name,index) => {
       const updateval = [...data];
    setData(updateval);
   
    if(name==="selectOption"||name==="removeOption")
    {
    
        name= "module_access";
        setData((prevDataList) => {
          const newDataList = [...prevDataList];
          newDataList[index] = {
            ...newDataList[index],
            [name]: value,
          };

        return newDataList;
      });
    } else {
      setData((prevDataList) => {
        const newDataList = [...prevDataList];
        // console.log("jjj2", data[index]);
        newDataList[index] = {
          ...newDataList[index],
          [name]: value,
        };
        return newDataList;
      });
    }
  };
  const handleSubmit = (i) => {
    console.log("data for post in module ascess>>", data[i]);
   

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
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Module Access</th>
              <th>Device_id</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, index) => {
              var array1=[""];
              var modacces= val.module_access;
              if (typeof val.module_access === "string") {
               
              modacces = val.module_access.split(",");
              
            }

              return (
                <tr key={index}>
                  <td>
                    <input
                      className="inp"
                      type="text"
                      name="firstname"
                      defaultValue={val.firstname}
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
                      name="lastname"
                      defaultValue={val.lastname}
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
                  </td>
                  <td>
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
                  </td>
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


