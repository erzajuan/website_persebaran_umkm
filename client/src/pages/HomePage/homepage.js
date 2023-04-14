import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { getUMKMs } from "../../fetchs/umkmFetch";

const HomePage = (props) => {
  const [activePage, setActivePage] = useState(1);
  const [umkms, setUmkms] = useState([]);
  const itemsPerPage = 9;

  useEffect(() => {
    getUMKMs((result) => setUmkms(result));
  }, []);

  // Calculate total number of pages based on number of items per page
  const totalPages = Math.ceil(umkms.length / itemsPerPage);

  // Filter albums to display based on current active page
  const filteredDatas = umkms.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  return (
    <>
      <h1 className="text-center">Homepage</h1>
      <div className="album py-5 bg-light">
        <div className="container ">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {filteredDatas.map((x, i) => (
              <div className="col" key={x.id}>
                <div className="card shadow-sm">
                  <img
                    src={x.image}
                    alt={x.name}
                    style={{ width: "100%", height: 225 }}
                  />

                  <div className="card-body">
                    <h3 className="card-name"> {x.name}</h3>
                    <p className="card-text overflow-hidden">{x.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">
                        Locations: {x.location}{" "}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
