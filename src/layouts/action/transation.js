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

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Paper,
    IconButton,
    TextField,
    Button,
  } from '@mui/material';
  import DeleteIcon from '@mui/icons-material/Delete';
  // import TextField from '@mui/material/TextField';
  import Autocomplete from '@mui/material/Autocomplete';


// Images
import curved6 from "assets/images/curved-images/curved-6.jpg";
import { adminTransation ,adminAccount} from "assets/globalAPI";
import { Mp } from "@mui/icons-material";

function TransationDelete() {
  const rowsPerPage=20;
  const [agreement, setAgremment] = useState(true);
  const toastId = useRef(null);
  
  const MySwal = withReactContent(Swal);
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [options, setOptions] = useState([]);
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState('');
  const [totalRows, setTotalRows] = useState(0); 
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const handleSetAgremment = () => setAgremment(!agreement);
  // const handleUsernameChange = (event) => {

  //   setUserId(event.target.value);

  // };
  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);

  // };
  const fetchData = async (searchValue = '') => {
    try {
      var data={
        page: page + 1,
        search: searchValue,
      }
      const response = await adminTransation(data);
      setRows(response.data.result);
      setTotalRows(response.data.total);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(search);
  }, [page, rowsPerPage, search]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/accounts/${id}`);
      fetchData(search);
    } catch (error) {
      console.error('Error deleting row:', error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  const handleSearchChange = (event, newValue) => {
    if (typeof newValue === 'string') {
      setSearch(newValue);
      setPage(0);
    } else if (newValue && newValue.inputValue) {
      setSearch(newValue.inputValue);
      setPage(0);
    } else if (newValue) {
      setSearch(newValue.label);
      setPage(0);
    } else {
      setSearch('');
      setPage(0);
    }
  };

  const fetchOptions = async () => {
    try {
      const response = await adminAccount()
      setOptions(response.data.result);
    } catch (error) {
      console.error('Error fetching search options:', error);
    }
  };

  const handleInputChange = (event, newInputValue) => {
    if (newInputValue) {
      fetchOptions(newInputValue);
    }
  };

  return (
  
    <DashboardLayout>
    <DashboardNavbar />
      <Card>
      <Paper>
      <Autocomplete
        freeSolo
        options={options.map((option) => option.accountNumber)}
        onInputChange={handleInputChange}
        onChange={handleSearchChange}
        renderInput={(params) => (
          <TextField {...params} label="Search" variant="outlined" style={{ margin: 16 }} />
        )}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDelete(row.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={totalRows}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
      </Card>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}



export default TransationDelete;
