import React, { useState, useEffect } from "react";
import "./style.css";
import { addMenu } from "../../fetchs/menuFetch";
import { useNavigate, useParams } from "react-router-dom";

const AddMenu = () => {
  const [Menu, setMenu] = useState({
    name: "",
    price: "",
    image: "",
    umkmId: 0,
  });

  const { umkmId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setMenu({ ...Menu, umkmId: umkmId });
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    addMenu(Menu, navigate, umkmId);
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
                  <label htmlFor="name">Menu Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={(e) => setMenu({ ...Menu, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    id="price"
                    name="price"
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      setMenu({ ...Menu, price: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Image</label> <br />
                  <img
                    src={Menu.image}
                    alt="Menu image"
                    className="img-fluid rounded"
                    style={{ maxwidth: "200px" }}
                  />
                  <br />
                  <div>
                    <input
                      type="file"
                      className="btn  mt-2 "
                      onChange={(e) =>
                        setMenu({
                          ...Menu,
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

export default AddMenu;
