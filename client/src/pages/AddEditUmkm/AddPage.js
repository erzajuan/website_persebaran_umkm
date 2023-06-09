import React, { useState, useEffect } from "react";
import "./style.css";
import { addUmkm } from "../../fetchs/umkmFetch";
import { useNavigate } from "react-router-dom";

const AddUmkm = () => {
  const [umkm, setUmkm] = useState({
    name: "",
    location: "",
    description: "",
    openDays: "",
    openTime: "",
    map: "",
    image: "",
    userId: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    setUmkm({ ...umkm, userId: localStorage.getItem("userId") });
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    addUmkm(umkm, navigate);
  };

  return (
    <div className="container my-3">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Basic Information</h4>
          <p className="card-title-desc">Fill all information below</p>
          <form>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="name">Umkm Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={(e) => setUmkm({ ...umkm, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Address</label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      setUmkm({ ...umkm, location: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="umkmdesc">Description</label>
                  <textarea
                    className="form-control"
                    id="umkmdesc"
                    rows="5"
                    onChange={(e) =>
                      setUmkm({ ...umkm, description: e.target.value })
                    }
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="opendays">Open Days</label>
                  <input
                    id="opendays"
                    name="opendays"
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      setUmkm({ ...umkm, openDays: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="opentime">Open Time</label>
                  <input
                    id="opentime"
                    name="opentime"
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      setUmkm({ ...umkm, openTime: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="map">Map Link</label>
                  <input
                    id="map"
                    name="map"
                    type="text"
                    className="form-control"
                    onChange={(e) => setUmkm({ ...umkm, map: e.target.value })}
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label>Image</label> <br />
                  <img
                    src={umkm.image}
                    alt="umkm image"
                    className="img-fluid rounded"
                    style={{ maxwidth: "200px" }}
                  />
                  <br />
                  <div>
                    <input
                      type="file"
                      className="btn  mt-2 "
                      onChange={(e) =>
                        setUmkm({
                          ...umkm,
                          image: e.target.files[0],
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-success mr-1 "
              onClick={submitHandler}
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUmkm;
