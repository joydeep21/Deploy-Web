import axios from "axios";
//var axios = require('axios');
var FormData = require("form-data");
var api_url = "http://192.168.31.27/hadapi";
axios.defaults.baseURL = "http://192.168.52.132/hadapi/";
axios.defaults.headers.post["Content-Type"] = "application/json";

export function login(data) {
  return axios.post("authenticate/user", data);
}
export function usercreate(data) {
  return axios.post("signup", data);
}

export function credOut(data) {
  return axios.post("admin/insert_cred_outstanding", data);
}
export function debOut(data) {
  return axios.post("admin/insert_debtor_outstanding", data);
}

export function invFg(data) {
  return axios.post("admin/insert_inventory_fg", data);
}
export function invRm(data) {
  return axios.post("admin/insert_inventory_rm", data);
}
export function breupload(data) {
  return axios.post("admin/insert_breakup_cred_outstanding", data);
}
export function onePagerdebt(data) {
  return axios.post("admin/insert_one_pager_debtors", data);
}
export function onePagerdebtfetch(data) {
  return axios.post("admin/get_one_pager_debtors", data);
}
export function getDebtor(data) {
  return axios.post(api_url + "/get_debtor_collection", data);
}

export function authGetUser(data) {
  return axios.post("authenticate/user", data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function authLogin(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function authDistributionChannel(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function authDivision(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function authAccountGroup(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function authSalesOrganization(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function authPostalCodeMaster(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function authGeoMapping(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
export function authIndustryCode(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function authAccountAssignmentGroup(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
export function authCustomerCreation(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function authApprovarCreation(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
export function authGetFirstApprovarList(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function authGetFinalApprovarList(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function authGetCustomer(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function authGetCustomerDetails(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function authSaveApprovalStatus(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
export function authUserRegistration(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function authGSTNIntegration(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

// export function authGetUser(data) {
//   return axios.post(api_url,data,{
//     headers: {
//         'Accept' : 'application/json',
//         'Content-Type': 'application/json'
//     }});
// }

export function deleteApprover(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function settingGSTNvalidation(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
export function getGSTValidationStatus(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function getGSTValidation(data) {
  return axios.post(api_url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
export function fetchUser() {
  return axios.post("get_all_users");
}
