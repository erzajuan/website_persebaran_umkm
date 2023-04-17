import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import {
  HomePage,
  Login,
  Register,
  Profile,
  UmkmPage,
  MyUmkmPage,
  EditUmkm,
  AddUmkm,
  AddMenu,
  EditMenu,
} from "../pages";
import MainNavbar from "./navbar";

const Main = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  const loginCbHandler = (result) => {
    setLoginStatus(result);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
    return () => {
      navigate("/");
    };
  }, [loginStatus]);

  return (
    <div className="">
      {loginStatus ? (
        <>
          <MainNavbar loginCbHandler={loginCbHandler}></MainNavbar>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route
              path="profile"
              element={<Profile loginCbHandler={loginCbHandler}></Profile>}
            ></Route>
            <Route path=":umkmId" element={<UmkmPage></UmkmPage>} />
            <Route path="myumkm/:umkmId/" element={<MyUmkmPage></MyUmkmPage>} />
            <Route path="myumkm/:umkmId/editumkm" element={<EditUmkm></EditUmkm>} />
            <Route path="myumkm/addumkm" element={<AddUmkm></AddUmkm>} />
            <Route path="myumkm/:umkmId/addmenu" element={<AddMenu></AddMenu>} />
            <Route path="myumkm/:umkmId/editmenu/:menuId" element={<EditMenu></EditMenu>} />
            <Route path="myumkm/:umkmId/editmenu" element={<EditMenu></EditMenu>} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route
            path="/"
            element={<Login loginCbHandler={loginCbHandler}></Login>}
          ></Route>
          <Route path="register" element={<Register></Register>}></Route>
        </Routes>
      )}
    </div>
  );
};

export default Main;
