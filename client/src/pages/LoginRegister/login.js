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

  function submitHandler(event) {
    event.preventDefault();
    login(form, loginCbHandler);
    navigate("/");
  }

  return (
    <>
      <div className="text-center login-body bg-success bg-gradient">
        <form className="form-signin bg-light p-4 shadow-lg rounded">
          <h3 className="h1 mb-3 font-weight-bold">SME Hub</h3>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div className="form-label-group text-start">
            <input
              type="username"
              id="inputUsername"
              className="form-control"
              placeholder="Username"
              required
              autoFocus
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
            <label htmlFor="inputUsername">Username</label>
          </div>

          <div className="form-label-group text-start">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <label htmlFor="inputPassword">Password</label>
          </div>

          <p className="message">
            Not registered?{" "}
            <Link style={linkStyle} to="/register">
              Create an account
            </Link>
          </p>
          <button
            onClick={submitHandler}
            className="btn btn-lg btn-primary btn-block bg-success"
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
