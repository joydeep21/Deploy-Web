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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-flatpickr components
import Flatpickr from "react-flatpickr";

// react-flatpickr styles
import "flatpickr/dist/flatpickr.css";

// Soft UI Dashboard PRO React components
import SoftInput from "components/SoftInput";

function SoftDatePicker({ placeholder, input, ...rest }) {
  return (
    <Flatpickr
      {...rest}
      render={({ defaultValue }, ref) => {
        return (
          <SoftInput
            {...input}
            defaultValue={defaultValue}
            inputRef={ref}
            placeholder={placeholder}
          />
        );
      }}
    />
  );
}

// Setting default values for the props of SoftDatePicker
SoftDatePicker.defaultProps = {
  input: {},
};

// Typechecking props for the SoftDatePicker
SoftDatePicker.propTypes = {
  input: PropTypes.objectOf(PropTypes.any),
  placeholder: PropTypes.string,
};

export default SoftDatePicker;
