import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/api/users";

const login = async (form, loginHandler) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL + "/login",
      data: form,
    });
    const access_token = result.data.access_token;
    const token_data = parseJwt(access_token);
    localStorage.setItem("access_token", access_token);
    loginHandler(true);
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Username/Password wrong!",
    });
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

const getUserDetail = async (cb, token) => {
  try {
    const userData = parseJwt(token);
    let user = await axios({
      method: "GET",
      url: URL + `/detail/${userData.id}`,
    });
    console.log(userData.umkm);
    cb(user.data);
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

const updateUser = async ( token, form) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, save it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const userData = parseJwt(token);
        let user = await axios({
          method: "PUT",
          url: URL + `/${userData.id}`,
          data: form
        });
        console.log(user.data);
        Swal.fire("Updated!", "Your data has been updated!", "success");
      } catch (e) {
        Swal.fire("Failed!", "Update Error!", "error");
        console.log(e);
      }
    }
  });
};

const parseJwt = (token) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

export { login, getUsers, createUser, getUserDetail, updateUser, };
