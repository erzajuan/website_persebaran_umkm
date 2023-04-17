import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { getUserDetail } from "../../fetchs/userFetch";
import { getUMKMs, getUMKMAdmin, validate } from "../../fetchs/umkmFetch";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [activePage, setActivePage] = useState(1);
  const [umkms, setUmkms] = useState([]);
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    role: "",
  });

  const itemsPerPage = 6;

  useEffect(() => {
    getUserDetail(
      (result) =>
        setUser({
          id: result.id,
          username: result.username,
          password: result.password,
          email: result.email,
          role: result.role,
        }),
      localStorage.getItem("access_token")
    );
    user.role == "admin"
      ? getUMKMAdmin((result) => setUmkms(result))
      : getUMKMs((result) => setUmkms(result));
  }, [user.role]);

  const validateHandler = (id) => {
    validate(id);
  };

  // Calculate total number of pages based on number of items per page
  const totalPages = Math.ceil(umkms.length / itemsPerPage);

  // Filter albums to display based on current active page
  const filteredDatas = umkms.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  return (
    <>
      <h1 className="text-center text-success">Homepage</h1>
      <hr />
      <div className="album py-5">
        <div className="container ">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {filteredDatas.map((umkm, i) => {
              if (user.role === "admin") {
                return (
                  <div className="col" key={umkm.id}>
                    <div className="card shadow-sm rounded">
                      <img
                        src={umkm.image}
                        alt={umkm.name}
                        style={{ width: "100%", height: 225 }}
                      />

                      <div className="card-body">
                        <h3 className="card-name"> {umkm.name}</h3>
                        <p className="card-text overflow-hidden">
                          {umkm.description}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <Link
                              to={`/${umkm.id}`}
                              className="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </Link>
                            <button
                              onClick={() => validateHandler(+umkm.id)}
                              type="button"
                              className="btn btn-warning"
                            >
                              Validate
                            </button>
                          </div>
                          <div class="container text-center">
                            <div class="row align-items-start">
                              <div class="col">
                                <small className="text-muted">
                                  Locations: {umkm.location}{" "}
                                </small>
                              </div>
                              <div class="col">
                                <small className="text-muted">
                                  Status: {umkm.status}{" "}
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="col" key={umkm.id}>
                    <div className="card shadow-sm rounded">
                      <img
                        src={umkm.image}
                        alt={umkm.name}
                        style={{ width: "100%", height: 225 }}
                      />

                      <div className="card-body">
                        <h3 className="card-name"> {umkm.name}</h3>
                        <p className="card-text overflow-hidden">
                          {umkm.description}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <Link
                              to={`/${umkm.id}`}
                              className="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </Link>
                          </div>
                          <small className="text-muted">
                            Locations: {umkm.location}{" "}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="mt-3 container d-flex justify-content-center">
          <Pagination>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Pagination.Item
                key={page}
                active={page === activePage}
                onClick={() => setActivePage(page)}
              >
                {page}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default HomePage;
