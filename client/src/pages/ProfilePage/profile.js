import "./style.css";
import React, { useState, useEffect } from "react";
import { getUserDetail, updateUser } from "../../fetchs/userFetch";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    getUserDetail(
      (result) => setUser(result),
      localStorage.getItem("access_token")
    );
  }, []);

  const submitHandler = () => {
    updateUser(localStorage.getItem("access_token"), user);
    navigation(window.location.pathname);
  };

  return (
    <div className="container m-4">
      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="card h-80 " style={{ width: "30rem" }}>
            <div className="card-body">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mb-2 text-primary">Edit Profile</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
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
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="email"
                      className="form-control"
                      id="eMail"
                      placeholder="Enter New Password"
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="row-gutters">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
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
