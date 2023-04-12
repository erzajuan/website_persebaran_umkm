import React, { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import "./style.css";

const Login = (props) => {
  const { loginCbHandler } = props;

  const linkStyle = {
    textDecoration: "none",
    color: 'green'
  };
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const loginUser = async () => {
      try {
          // let result = await axios({
          //     method: 'POST',
          //     url: 'http://localhost:3000/api/users/login',
          //     data: form
          // })
          // const access_token = result.data.access_token
          // localStorage.setItem('access_token', access_token)
          loginCbHandler(true)
      } catch (err) {
          console.log(err)
      }
  }

  const submitHandler = () => {
      // console.log(form)
      loginUser()
  }

  return (
    <>
      <div class="text-center login-body bg-success bg-gradient">
        <form class="form-signin bg-light p-4 shadow-lg rounded">
          <h3 class="h1 mb-3 font-weight-bold">SME Hub</h3>
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" class="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <label for="inputPassword" class="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
          />
          <p class="message">
            Not registered? <Link style={linkStyle} to="/register">Create an account</Link>
          </p>
          <button
            onClick={() => submitHandler()}
            class="btn btn-lg btn-primary btn-block bg-success"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
