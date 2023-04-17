import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/api/umkms";

const getUMKMs = async (cb) => {
  try {
    let umkms = await axios({
      method: "GET",
      url: URL,
    });
    cb(umkms.data);
  } catch (e) {
    console.log(e);
  }
};

const getUMKMAdmin = async (cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: URL + "/admin",
    });
    cb(result.data);
  } catch (e) {
    console.log(e);
  }
};

const getUmkmDetail = async (cb, id) => {
  try {
    let umkms = await axios({
      method: "GET",
      url: URL + `/detail/${id}`,
    });
    cb(umkms.data);
  } catch (e) {
    console.log(e);
  }
};

const getUmkmDetailMenu = async (cb, id) => {
  try {
    let umkms = await axios({
      method: "GET",
      url: URL + `/detail/${id}`,
    });
    cb(umkms.data, umkms.data.menus);
  } catch (e) {
    console.log(e);
  }
};

const addUmkm = async (form, navigate) => {
  try {
    let umkms = await axios({
      method: "POST",
      url: URL,
      data: form,
      headers: { "Content-Type": "multipart/form-data", "access_token": localStorage.getItem("access_token") },
    });
    Swal.fire("Created!", "Your umkm has been created!", "success");
    navigate("/");
  } catch (e) {
    Swal.fire("Failed!", "Create Error!", "error");
    console.log(e);
  }
};

const updateUmkm = async (id, form, navigate) => {
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
        let umkms = await axios({
          method: "PUT",
          url: URL + `/${id}`,
          data: form,
          headers: { "Content-Type": "multipart/form-data" },
        });
        Swal.fire("Updated!", "Your umkm has been updated!", "success");
        navigate("/");
      } catch (e) {
        Swal.fire("Failed!", "Update Error!", "error");
        console.log(e);
      }
    }
  });
};

const validate = async (id) => {
  try {
    console.log(id);
    let result = await axios({
      method: "PUT",
      url: URL + "/validate/" + id,
    });

    Swal.fire("UMKM" + id, "UMKM Has Been Validates", "success");

    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

export {
  getUMKMs,
  getUmkmDetail,
  getUMKMAdmin,
  validate,
  getUmkmDetailMenu,
  updateUmkm,
  addUmkm,
};
