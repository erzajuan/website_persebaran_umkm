import "./style.css";
import React, { useState, useEffect } from "react";
import { getUserDetail, updateUser, deleteUser } from "../../fetchs/userFetch";
import { useNavigate, Link } from "react-router-dom";

const Profile = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: ""
  });
  const [umkm, setUmkm] = useState([]);
  const navigation = useNavigate();
  const { loginCbHandler } = props;

  useEffect(() => {
    getUserDetail(
      (result) => setUser({
        id: result.id,
        username: result.username,
        password: "",
        email: result.email,
        role: result.role
      }),
      localStorage.getItem("access_token")
    );
    getUserDetail(
      (result) => setUmkm(result.umkm.id),
      localStorage.getItem("access_token")
    );
  }, []);

  const submitHandler = () => {
    updateUser(localStorage.getItem("access_token"), user);
    navigation(window.location.pathname);
  };

  const deleteHandler = () => {
    deleteUser(loginCbHandler,user.id);
  };

  return (
    <div className="container m-4">
      <div className="row gutters">
        <div className="col-xl-4 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
          <div className="card-header text-primary">Profile</div>
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Maxwell Admin"
                    />
                  </div>
                  <h5 className="user-name">{user.username}</h5>
                  <h6 className="user-email">{user.email}</h6>
                  <h6 className="user-email">{user.role}</h6>
                  <br></br>
                  <br></br>
                  <Link to={`/myumkm/${umkm}`} className="btn btn-warning">
                    My UMKM
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card h-100 " style={{ width: "28rem" }}>
          <div className="card-header text-primary">Edit Profile</div>

            <div className="card-body">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                </div>
                <div className="col-xl-10 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="fullName">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="Enter username"
                      value={user.username}
                      onChange={(e) =>
                        setUser({ ...user, username: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="row-gutters">
                <div className="col-xl-10 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter New Password"
                      defaultValue=""
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="row-gutters">
                <div className="col-xl-10 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="eMail">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="eMail"
                      placeholder="Enter email"
                      value={user.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="row gutters align-items-end">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text-right">
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn btn-primary  mt-3"
                      onClick={() => submitHandler()}
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      id="delete"
                      name="delete"
                      className="btn btn-danger mt-3 mx-3"
                      onClick={() => deleteHandler()}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
