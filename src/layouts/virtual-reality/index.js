// @mui material components
import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Table from 'react-bootstrap/Table';
import TableContainer from "@mui/material/TableContainer";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";
import 'index.css';
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
//import Table from "examples/Tables/Table";
//import DataTable from "examples/Tables/DataTable";
import { authGetCustomer,authGetCustomerDetails,authSaveApprovalStatus } from '../../assets/globalAPI/GlobalApi';
// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function VRInfo() {
  //const { columns, rows } = authorsTableData;
  //const { columns: prCols, rows: prRows } = projectsTableData;
  const navigate = useNavigate();
  const[userAccess,setUserAccess] = useState('');
  const[userID,setUserID] = useState('');
  const[customerlist,setCustomerList] = useState([]);
  const[customerDetails,setCustomerDetails] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const [show, setShow] = useState(false);
  const [approvalStatus, setApprovalStatus] = useState('');
  const [customerid, setcustomerid] = useState('');
  const [state, setState] = useState({
    email: "",
    comment: ""
  });
  useEffect(() => {
    if (localStorage.getItem('userid_details')) { 
      let session = localStorage.getItem('userid_details');
      let userid_array =JSON.parse(session);
      let userid = userid_array.userid;
      let user_type = userid_array.user_type;
      setUserAccess(user_type);
      setUserID(userid);
      }else{
        navigate('/');
      }
      
    const data = {
      "action": 'getCustomer',
      "userid" : userID
    };
    authGetCustomer(JSON.stringify(data)).then(function(response) {
    var res = response.data;
    
      if(res.status=='true' && res.code=='200')
      {
        console.log(res.customer_details);
        setCustomerList(res.customer_details);
      }else{
        setCustomerList(res.customer_details);
    }
    }.bind(this)
  )
  .catch(function(error) {
 
  console.log(error);
  });

 
  },[userID]);
  
  const handleInputChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };
  const handleSubmit = (event) => {
   
    event.preventDefault();
    let session = localStorage.getItem('userid_details');
    let userid_array =JSON.parse(session);
    let userid = userid_array.userid;
    state['action'] = 'saveApproval';
    state['status'] = approvalStatus;
    state['customerid'] = customerid;
    state['userid'] = userid;
  
    authSaveApprovalStatus(JSON.stringify(state)).then(function(response) {
      var res = response.data;
      
        if(res.status=='true' && res.code=='200')
        {
          setShow(false);


          const data = {
            "action": 'getCustomer',
            "userid" : userID
          };
          authGetCustomer(JSON.stringify(data)).then(function(response) {
          var res = response.data;
          
            if(res.status=='true' && res.code=='200')
            {
              console.log(res.customer_details);
              setCustomerList(res.customer_details);
            }else{
              setCustomerList(res.customer_details);
          }
          }.bind(this)
        )
        .catch(function(error) {
       
        console.log(error);
        });
        }else{
          
      }
      }.bind(this)
    )
    .catch(function(error) {
   
    console.log(error);
    });
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
 
  const approveHandle = async (id,status) => {
    
    setShow(true);
    setApprovalStatus(status);
    setcustomerid(id);
  }
  const viewCustomerDetails = async (id) => {
    const data = {
      "action": 'getCustomerFullDetails',
      "id": id
    };
    authGetCustomerDetails(JSON.stringify(data)).then(function(response) {
      var res = response.data;
      
        if(res.status=='true' && res.code=='200')
        {
          console.log(res.customer_details);
          setCustomerDetails(res.customer_details);
          setLgShow(true);
        }else{
          setCustomerDetails(res.customer_details);
      }
      }.bind(this)
    )
    .catch(function(error) {
   
    console.log(error);
    });
   
  }
  return (
    
    <DashboardLayout> 
      <DashboardNavbar />
      {userAccess=='superadmin' || userAccess=='Lev-1' || userAccess=='Lev-2'  ?
      <Table striped bordered hover size="sm" style={{ fontSize: 13 }}>
      <thead>
        <tr>         
          <th>Name</th>
          <th>Email</th>
          <th>Customer Account Group</th>
          <th>GSTN</th>
          <th>PAN</th>
          <th>Create At</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {customerlist.map((item, idx) => {
        return <tr key={idx}>         
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.customer_account_group}</td>
          <td>{item.gstn}</td>
          <td>{item.pan}</td>
          <td>{item.created_at}</td>
          <td>{item.status=='Approve'? <span style={{ color: 'green' }}>{item.status}</span> : <span style={{ color: 'red' }}>{item.status}</span>}</td>
          
          {item.status=='Pending'? <td><Button variant="primary" size="sm" onClick={()=>{viewCustomerDetails(item.id)}}>View</Button> <Button variant="success" size="sm" onClick={()=>{approveHandle(item.id,'Approve')}}>Approve</Button> <Button variant="warning" size="sm" onClick={()=>{approveHandle(item.id,'Reject')}}>Reject</Button>
          <Modal
        size="fullscreen-xxl-down"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Customer Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover style={{ fontSize: 13 }}>

      <tbody>
        <tr>
          <td><strong>Company Code</strong></td>
          <td>{customerDetails.company_code}</td>
          <td><strong>Sales Organization</strong></td>
          <td>{customerDetails.sales_organization}</td>
          <td><strong>Distribution Channel</strong></td>
          <td>{customerDetails.distribution_channel}</td>
          <td><strong>Division</strong></td>
          <td>{customerDetails.division}</td>
        </tr>
        <tr>
          <td><strong>Customer Account Group</strong></td>
          <td>{customerDetails.customer_account_group}</td>
          <td><strong>Name 1</strong></td>
          <td>{customerDetails.name1}</td>
          <td><strong>Name 2</strong></td>
          <td>{customerDetails.name2}</td>
          <td><strong>Name 3</strong></td>
          <td>{customerDetails.name3}</td>
        </tr>
        <tr>
          <td><strong>Search Term 1</strong></td>
          <td>{customerDetails.search_term1}</td>
          <td><strong>Street</strong></td>
          <td>{customerDetails.street}</td>
          <td><strong>Street 2</strong></td>
          <td>{customerDetails.street2}</td>
          <td><strong>Street 3</strong></td>
          <td>{customerDetails.street3}</td>
        </tr>
        <tr>
          <td><strong>District</strong></td>
          <td>{customerDetails.district}</td>
          <td><strong>City Postal Code</strong></td>
          <td>{customerDetails.postal_code}</td>
          <td><strong>City</strong></td>
          <td>{customerDetails.city}</td>
          <td><strong>Country Key</strong></td>
          <td>{customerDetails.country}</td>
        </tr>
        <tr>
          <td><strong>Region</strong></td>
          <td>{customerDetails.region}</td>
          <td><strong>Language Key</strong></td>
          <td>{customerDetails.language}</td>
          <td><strong>Telephone No</strong></td>
          <td>{customerDetails.telephone}</td>
          <td><strong>Mobile No</strong></td>
          <td>{customerDetails.mobile}</td>
        </tr>
        <tr>
          <td><strong>Fax No</strong></td>
          <td>{customerDetails.fax}</td>
          <td><strong>E-Mail</strong></td>
          <td>{customerDetails.email}</td>
          <td><strong>Attribute 1</strong></td>
          <td>{customerDetails.attribute1}</td>
          <td><strong>Attribute 2</strong></td>
          <td>{customerDetails.attribute2}</td>
        </tr>
        <tr>
          <td><strong>PAN</strong></td>
          <td>{customerDetails.pan}</td>
          <td><strong>PAN Reference</strong></td>
          <td>{customerDetails.pan_reference}</td>
          <td><strong>GSTN</strong></td>
          <td>{customerDetails.gstn}</td>
          <td><strong>Industry key</strong></td>
          <td>{customerDetails.industry_key}</td>
        </tr>
        <tr>
          <td><strong>Reconciliation Account in General Ledger</strong></td>
          <td>{customerDetails.industry_key}</td>
          <td><strong>Sales District</strong></td>
          <td>{customerDetails.sales_district}</td>
          <td><strong>Sales Office</strong></td>
          <td>{customerDetails.sales_office}</td>
          <td><strong>Sales Group</strong></td>
          <td>{customerDetails.sales_group}</td>
        </tr>
        <tr>
          <td><strong>Pricing procedure assigned to this customer</strong></td>
          <td>{customerDetails.pricing_procedure}</td>
          <td><strong>Customer Statistics Group</strong></td>
          <td>{customerDetails.customer_statistic_group}</td>
          <td><strong>Shipping Conditions</strong></td>
          <td>{customerDetails.shipping_condition}</td>
          <td><strong>Indicator</strong></td>
          <td>{customerDetails.indicator}</td>
        </tr>
        <tr>
          <td><strong>Incoterms (Part 1)</strong></td>
          <td>{customerDetails.incoterms1}</td>
          <td><strong>Incoterms (Part 2)</strong></td>
          <td>{customerDetails.incoterms2}</td>
          <td><strong>Terms of Payment Key</strong></td>
          <td>{customerDetails.payment_key}</td>
          <td><strong>Credit Control Area</strong></td>
          <td>{customerDetails.credit_control}</td>
        </tr>
        <tr>
          <td><strong>Account assignment group for this customer</strong></td>
          <td>{customerDetails.credit_control}</td>
          <td><strong>Tax classification 1</strong></td>
          <td>{customerDetails.tax_classification1}</td>
          <td><strong>Tax classification 2</strong></td>
          <td>{customerDetails.tax_classification2}</td>
          <td><strong>Tax classification 3</strong></td>
          <td>{customerDetails.tax_classification3}</td>
        </tr>
        <tr>
          <td><strong>Tax classification 4</strong></td>
          <td>{customerDetails.tax_classification4}</td>
          <td><strong>Tax classification 5</strong></td>
          <td>{customerDetails.tax_classification5}</td>
          <td><strong>Tax classification 6</strong></td>
          <td>{customerDetails.tax_classification6}</td>
          <td><strong>Partner Function</strong></td>
          <td>{customerDetails.partner_function}</td>
        </tr>
        <tr>
          <td><strong>Business Partner</strong></td>
          <td>{customerDetails.business_partner}</td>
        </tr>
        
        
      </tbody>
    </Table>
        </Modal.Body>
         </Modal>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Customer</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
        <Modal.Body>
          
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                value={state.email}
                type="email"
                placeholder="name@example.com"
                onChange={handleInputChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Comment</Form.Label>
              <Form.Control as="textarea" rows={3} name="comment" value={state.comment} onChange={handleInputChange} />
            </Form.Group>
          
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
          </td> :<td><Button variant="primary" size="sm" onClick={()=>{viewCustomerDetails(item.id)}}>View</Button></td>}
        </tr>
      })}
        
        
      </tbody>
    </Table>
    : 'You do not have the access of this module!'}
     
    </DashboardLayout>
   
  );
}

export default VRInfo;
