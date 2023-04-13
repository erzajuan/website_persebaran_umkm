import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/api/users";

const login = async (form,loginHandler) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL + "/login",
      data: form,
    });
    const access_token = result.data.access_token;
    localStorage.setItem("access_token", access_token);
    loginHandler(true);
  } catch (e) {
    console.log(e);
  }
};

const getUsers = async (cb) => {
  try {
    let users = await axios({
      method: "GET",
      url: URL,
    });
    cb(users.data);
  } catch (e) {
    console.log(e);
  }
};

const createUser = async (user) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL,
      data: user,
    });

    Swal.fire("Add User", "New user has been added", "success");
  } catch (e) {
    console.log(e);
  }
};

export {login, getUsers, createUser };
