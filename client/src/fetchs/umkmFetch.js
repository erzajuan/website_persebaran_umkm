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

const validate = async (id) => {
  try {
    console.log(id)
    let result = await axios({
      method: "PUT",
      url: URL + "/validate/" + id,
    });

    Swal.fire("UMKM" + id, "UMKM Has Been Validates", "success");

    console.log(result)
  } catch (e) {
    console.log(e);
  }
};

export { getUMKMs, getUmkmDetail, getUMKMAdmin, validate, getUmkmDetailMenu};
