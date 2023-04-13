import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { login } from "../../fetchs/userFetch";

const Login = (props) => {
  const { loginCbHandler } = props;

  const linkStyle = {
    textDecoration: "none",
    color: "green",
  };
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const submitHandler = () => {
    login(form, loginCbHandler);
    navigate("/");
  };

  return (
    <>
      <div class="text-center login-body bg-success bg-gradient">
        <form class="form-signin bg-light p-4 shadow-lg rounded">
          <h3 class="h1 mb-3 font-weight-bold">SME Hub</h3>
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" class="sr-only">
            Username
          </label>
          <input
            type="text"
            id="inputUsername"
            class="form-control"
            placeholder="Username"
            required
            onChange={(e) => setForm({ ...form, username: e.target.value })}
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
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <p class="message">
            Not registered?{" "}
            <Link style={linkStyle} to="/register">
              Create an account
            </Link>
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
