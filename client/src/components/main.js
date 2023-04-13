import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage, Login, Register } from "../pages";

const Main = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  const loginCbHandler = (result) => {
    setLoginStatus(result);
  };

  // useEffect(() => {
  //   if (localStorage.getItem("access_token")) {
  //     setLoginStatus(true);
  //   } else {
  //     setLoginStatus(false);
  //   }
  // }, [loginStatus]);

  return (
    <>
      <div className="">
        {loginStatus ? (
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
          </Routes>
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
    </>
  );
};

export default Main;
