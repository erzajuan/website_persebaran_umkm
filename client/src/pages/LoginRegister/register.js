import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./style.css";
import { createUser } from "../../fetchs/userFetch";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });


  const navigation = useNavigate();

  const submitHandler = () => {
    createUser(form);
    navigation("/");
  };

  const linkStyle = {
    textDecoration: "none",
    color: 'green'
  };

  return (
    <div className="text-center login-body bg-success bg-gradient" >
      <form className="form-signin bg-light p-4 shadow-lg rounded">
        <h3 className="h1 mb-3 font-weight-bold">SME Hub</h3>
        <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
        <label className="sr-only">
          Username
        </label>
        <input
          type="text"
          id="inputUsername"
          className="form-control"
          placeholder="Username"
          required
          
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <label className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
        
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <label  className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <p className="message">Already have an account? <Link to="/" style={linkStyle}>log in</Link></p>
        <button className="btn btn-lg btn-primary btn-block bg-success" type="submit" onClick={() => submitHandler()} >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
