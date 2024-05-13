import React, { useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function  Demo() {
    const [inputValues, setInputValues] = useState({
        value1: 0,
        value2: 0,
        value3: 0,
        value4: 0,
        value5: 0,
        value6: 0,
        value7: 0,
      });
    
      const calculateSum = () => {
        const sum =
          inputValues.value1 +
          inputValues.value2 +
          inputValues.value3 +
          inputValues.value4 +
          inputValues.value5 +
          inputValues.value6 +
          inputValues.value7;
    
        return sum;
      };
    
      const handleInputChange = (name, value) => {
        setInputValues({
          ...inputValues,
          [name]: parseFloat(value) || 0, // Parse the value to a float, default to 0 if parsing fails
        });
      };
   

  return (
    <DashboardLayout>
        <DashboardNavbar />
      <h1>vhxgngchbmhbc</h1>
    </DashboardLayout>
  );
};

export default Demo;
