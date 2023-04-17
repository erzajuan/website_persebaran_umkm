import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/api/menus";

const getMenuDetail = async (cb, id) => {
  try {
    let menus = await axios({
      method: "GET",
      url: URL + `/${id}`,
    });
    cb(menus.data);
  } catch (e) {
    console.log(e);
  }
};

const addMenu = async (form, navigate) => {
  try {
    let menus = await axios({
      method: "POST",
      url: URL,
      data: form,
      headers: {
        "Content-Type": "multipart/form-data",
        access_token: localStorage.getItem("access_token"),
      },
    });
    Swal.fire("Created!", "New menu has been created!", "success");
    navigate(`/myumkm/${form.umkmId}`);
  } catch (e) {
    Swal.fire("Failed!", "Create Error!", "error");
    console.log(e);
  }
};

const updateMenu = async (id, form, navigate, umkmId) => {
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
        let menus = await axios({
          method: "PUT",
          url: URL + `/${id}`,
          data: form,
          headers: { "Content-Type": "multipart/form-data" },
        });
        Swal.fire("Updated!", "Your menu has been updated!", "success");
        navigate(`/myumkm/${umkmId}`);
      } catch (e) {
        Swal.fire("Failed!", "Update Error!", "error");
        console.log(e);
      }
    }
  });
};

const deleteMenu = async (id, navigate) => {
  Swal.fire({
    title: "Are you sure?",
    text: id,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        let menus = await axios({
          method: "DELETE",
          url: URL + `/${id}`,
        });
        Swal.fire("Deleted!", "Menu has been deleted!", "success");
        navigate(window.location.pathname);
      } catch (e) {
        Swal.fire("Failed!", "Delete Error!", "error");
        console.log(e);
      }
    }
  });
};

export { getMenuDetail, addMenu, updateMenu, deleteMenu };
