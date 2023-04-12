import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./style.css";

const Register = (props) => {
  const { loginCbHandler } = props;
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const linkStyle = {
    textDecoration: "none",
    color: 'green'
  };

  return (
    <div class="text-center login-body bg-success bg-gradient" >
      <form class="form-signin bg-light p-4 shadow-lg rounded">
        <h3 class="h1 mb-3 font-weight-bold">SME Hub</h3>
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
        <label for="inputName" class="sr-only">
          Name
        </label>
        <input
          type="text"
          id="inputName"
          class="form-control"
          placeholder="Name"
          required
          autofocus
        />
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
        <p class="message">Already have an account? <Link to="/" style={linkStyle}>log in</Link></p>
        <button class="btn btn-lg btn-primary btn-block bg-success" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
