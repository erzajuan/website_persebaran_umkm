import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { HomePage, Login, Register, Profile } from "../pages";
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
            <Route
              path="/"
              element={
                <HomePage
                  loginStatus={loginStatus}
                  loginCbHandler={loginCbHandler}
                ></HomePage>
              }
            ></Route>
            <Route path="profile" element={<Profile></Profile>}></Route>
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
