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
        <div>
      <label>
        Value 1:
        <input
          type="number"
          value={inputValues.value1}
          onChange={(e) => handleInputChange("value1", e.target.value)}
        />
      </label>
      <label>
        Value 2:
        <input
          type="number"
          value={inputValues.value2}
          onChange={(e) => handleInputChange("value2", e.target.value)}
        />
      </label>
      <label>
        Value 3:
        <input
          type="number"
          value={inputValues.value3}
          onChange={(e) => handleInputChange("value3", e.target.value)}
        />
      </label>
      <label>
        Value 4:
        <input
          type="number"
          value={inputValues.value4}
          onChange={(e) => handleInputChange("value4", e.target.value)}
        />
      </label>
      <label>
        Value 5:
        <input
          type="number"
          value={inputValues.value5}
          onChange={(e) => handleInputChange("value5", e.target.value)}
        />
      </label>
      <label>
        Value 6:
        <input
          type="number"
          value={inputValues.value6}
          onChange={(e) => handleInputChange("value6", e.target.value)}
        />
      </label>
      <label>
        Value 7:
        <input
          type="number"
          value={inputValues.value7}
          onChange={(e) => handleInputChange("value7", e.target.value)}
        />
      </label>
      <label>
        Value 19:
        <input
          type="number"
          value={inputValues.value10}
          onChange={(e) => handleInputChange("value1", e.target.value)}
        />
      </label>
      {/* Repeat similar blocks for value2 to value7 */}
      <br />
      <label>
        Sum of 7 values:
        <input type="text" value={calculateSum()} readOnly />
      </label>
    </div>
    </DashboardLayout>
  );
};

export default Demo;



var val1={
  "Nov 30 2023": {
      "day75": 0,
      "day90": 0,
      "day100": 0,
      "day110": 0,
      "day120": 0,
      "day150": 0,
      "day151": 0,
      "total": 0
  },
  "Dec 02 2023": {
      "day75": 0,
      "day90": 0,
      "day100": 0,
      "day110": 0,
      "day120": 0,
      "day150": 0,
      "day151": 0,
      "total": 0
  },
  "Nov 25 2023": {
      "day75": 0,
      "day90": 0,
      "day100": 0,
      "day110": 0,
      "day120": 0,
      "day150": 0,
      "day151": 0,
      "total": 0
  },
  "Nov 18 2023": {
      "day75": 0,
      "day90": 0,
      "day100": 0,
      "day110": 0,
      "day120": 0,
      "day150": 0,
      "day151": 0,
      "total": 0
  },
  "Nov 11 2023": {
      "day75": 0,
      "day90": 0,
      "day100": 0,
      "day110": 0,
      "day120": 0,
      "day150": 0,
      "day151": 0,
      "total": 0
  }
}


 // const dynamicKeys = arrayval1.map((e)=>e);
      // dynamicKeys.pop();
      // console.log("the new array",dynamicKeys);
      // const total = dynamicKeys.reduce((acc, key) => acc + updatedValues[rowIndex][key], 0);
      // updatedValues[rowIndex].Total = total;
