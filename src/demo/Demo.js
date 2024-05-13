// import logo from "./logo.svg";
// import "./App.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";

import { Form, Button } from "react-bootstrap";
import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { incNumber, decNumber } from "./actions/index";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function App1() {
//   const myState = useSelector((state) => state.changetheNumber);
//   const dispatch = useDispatch();

  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Checkbox 1", checked: false },
    { id: 2, label: "Checkbox 2", checked: false },
    { id: 3, label: "Checkbox 3", checked: false },
    // Add more checkboxes as needed
  ]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const handleCheckboxChange = (id) => {
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
    );

    // If any checkbox is unchecked, uncheck "Select All"
    const anyUnchecked = updatedCheckboxes.some((checkbox) => !checkbox.checked);
    setSelectAllChecked(!anyUnchecked);

    setCheckboxes(updatedCheckboxes);
  };

  const handleSelectAllChange = () => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: !selectAllChecked,
    }));

    setSelectAllChecked(!selectAllChecked);
    setCheckboxes(updatedCheckboxes);
  };
  const handleSelectAll = () => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({ ...checkbox, checked: true }));
    setCheckboxes(updatedCheckboxes);
  };

  const handleDeselectAll = () => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({ ...checkbox, checked: false }));
    setCheckboxes(updatedCheckboxes);
  };

  const data = [
    {
      id: "1",

      firstname: "Joy",

      lastname: "deep",

      email: "arnab.baksi@arodek.com",

      password: "0lMD0uRftdPf/txb8iZW1A==",

      status: "1",

      device_id: "joydeep@gmail.com",

      type: "admin",

      module_access: " One Pager",

      image: "http://192.168.52.180/api/profile/male_avatar_default.jpg",
    },

    {
      id: "2",

      firstname: "Rahul",

      lastname: "Sinha",

      email: "rahul.sinha@arodek.com",

      password: "0lMD0uRftdPf/txb8iZW1A==",

      status: "1",

      device_id: "TestIfbDailyFlash",

      type: "user",

      module_access:
        "User profile maintenance , Retrodata upload , Weekly data upload , Export Report-One Pager, Export Report- Breakup sheet",

      image: "https://smartshoe.arodek.com/profile/male_avatar_type2.png",
    },

    {
      id: "5",

      firstname: "bishal",

      lastname: "shaw",

      email: "bishal.shaw@arodek.com",

      password: "0lMD0uRftdPf/txb8iZW1A==",

      status: "1",

      device_id: "ab",

      type: "admin",

      module_access: "all",

      image: "http://192.168.52.180/api/profile/male_avatar_default.jpg",
    },

    {
      id: "24",

      firstname: "Pritam",

      lastname: "Manna",

      email: "pritam.manna@arodek.com",

      password: "cM+eHBR/1RRE7Hs7zXvjwg==",

      status: "1",

      device_id: "ifnhad",

      type: "RegularUser",

      module_access: "userCreation , Breakup sheet , One Pager , Weeklyupload , Retrodata",

      image: null,
    },

    {
      id: "25",

      firstname: "Pritam",

      lastname: "Manna",

      email: "pritammanna814@gmail.com",

      password: "81xXeHKRdB1EQoeMbYAmzg==",

      status: "1",

      device_id: "ifnhad",

      type: "RegularUser",

      module_access: "userCreation , Breakup sheet, One Pager , Weeklyupload , Retrodata",

      image: null,
    },

    {
      id: "26",

      firstname: "arnab",

      lastname: "baksi",

      email: "arnab@arodek.com",

      password: "b6BKqPCijdtv+1TM7BKluA==",

      status: "1",

      device_id: "xyz",

      type: "RegularUser",

      module_access: "Retrodata, Weeklyupload , One Pager",

      image: null,
    },

    {
      id: "27",

      firstname: "",

      lastname: "",

      email: "avfs",

      password: "whZgI0A/ECogT3QRXyJtAw==",

      status: "1",

      device_id: "",

      type: "",

      module_access: "",

      image: null,
    },
  ];
  const optionsmodule = ["Retrodata", "Weeklyupload", "One Pager", "Breakup sheet", "userCreation"];
  const moduleAccessData = data.map((item) => item.module_access.split(",")).flat();

  //   const options = ['Monday', 'Tuesday', 'Thursday',
  // 'Friday', 'Saturday', 'Sunday']
  return (
    <>
      <div className="container">
        <div>
          {data.map((item, index) => {
            const userModuleAccess =
              item.module_access === "all"
                ? optionsmodule
                : item.module_access.split(",").map((access) => access.trim());

            const defaultValue = optionsmodule.filter((option) =>
              userModuleAccess.includes(option)
            );

            return (
              <div key={index}>
                <h3>User {item.id}</h3>
                <Autocomplete
                  multiple
                  id={`checkboxes-tags-demo-${index}`}
                  options={optionsmodule}
                  defaultValue={defaultValue}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option}
                    </li>
                  )}
                  style={{ width: 500 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={`Module Access for User ${item.id}`}
                      placeholder="Favorites"
                    />
                  )}
                />
              </div>
            );
          })}{" "}
        </div>

        {/* <div style={{marginLeft:'40%', marginTop: '60px'}}>
        <h3>Greetings from GeeksforGeeks!</h3>
        <Autocomplete
            options={options}
            style={{ width: 300 }}
            renderInput={(params) =>
        <TextField {...params} label="Combo box" variant="outlined" />}
          />
        </div> */}
      </div>
    </>
  );
}

export default App1;
