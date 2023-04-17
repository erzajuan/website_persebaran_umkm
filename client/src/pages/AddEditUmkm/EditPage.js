import React, { useState, useEffect } from "react";
import "./style.css";
import { getUmkmDetail, updateUmkm } from "../../fetchs/umkmFetch";
import { useParams, useNavigate } from "react-router-dom";

const EditUmkm = () => {
  const [umkm, setUmkm] = useState([]);

  let { umkmId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getUmkmDetail((result) => setUmkm(result), umkmId);
  }, [umkmId]);

  const editHandler = (event) => {
    event.preventDefault();
    updateUmkm(umkmId, umkm, navigate);
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
                    value={umkm.name}
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
                    value={umkm.location}
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
                    value={umkm.description}
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
                    value={umkm.openDays}
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
                    value={umkm.openTime}
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
                    value={umkm.map}
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
              className="btn btn-success mr-1 mt-1 "
              onClick={editHandler}
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUmkm;
