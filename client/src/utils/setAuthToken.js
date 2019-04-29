import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete Auth header if no token
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
