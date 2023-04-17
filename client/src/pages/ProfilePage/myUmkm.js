import React, { useState, useEffect } from "react";
import { getUmkmDetail } from "../../fetchs/umkmFetch";
import { useParams, Link, useNavigate } from "react-router-dom";

const MyUmkmPage = () => {
  const [umkm, setUmkm] = useState([]);
  const [menus, setMenus] = useState([]);
  const [bool,setBool] = useState(false);
  const navigate = useNavigate();

  const editHandler = () => {
    navigate("edit");
  };

  let { umkmId } = useParams();
  useEffect(() => {
    umkmId == "null" ? setBool(false) : setBool(true);
    getUmkmDetail((result) => setUmkm(result), umkmId);
    getUmkmDetail((result) => setMenus(result.menus), umkmId);
  }, [umkmId]);

  return (
    <>
      {bool? (
        <div className="container p-4">
          <div className="col-md-12">
            <Link to={"editumkm"} className="btn btn-primary my-3">
              Edit
            </Link>
            <section className="panel">
              <div className="panel-body">
                <div className="col-md-6">
                  <div className="pro-img-details">
                    <img
                      className="cover rounded"
                      src={umkm.image}
                      alt="cover"
                      style={{ width: 500, height: 500 }}
                    ></img>
                  </div>
                </div>
                <div className="col-md-6">
                  <h4 className="pro-d-title">{umkm.name}</h4>
                  <p>{umkm.description}</p>

                  {/* OPEN TIME */}
                  <div className="product_meta">
                    <span className="posted_in">
                      <strong>Open Time:</strong> {umkm.openTime},{" "}
                      {umkm.openDays}
                    </span>
                  </div>

                  {/* LOCATION */}
                  <div className="product_meta">
                    <span className="posted_in">
                      {" "}
                      <strong>Location:</strong> {umkm.location}{" "}
                      <a href={umkm.map} target="_blank">
                        Show on Google Map
                      </a>
                    </span>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <h3 class="box-title mt-3">Menu</h3>
                    <Link to={`addmenu`} className="btn btn-primary my-2"> + </Link>
                    <div class="table-responsive">
                      <table class="table table-striped table-product">
                        <tbody>
                          {/* MENU */}
                          {menus.length > 0 ? (
                            menus.map((item) => {
                              const {id, name, price, image } = item;
                              return (
                                <tr>
                                  <td width="390">
                                    <img
                                      className="img-thumbnail img-fluid"
                                      src={image}
                                      alt="cover"
                                    ></img>
                                  </td>
                                  <td>
                                    <h6 className="pro-d-title">{name}</h6>
                                  </td>
                                  <td>
                                    <h6 className="pro-d-title">Rp. {price}</h6>
                                  </td>
                                  <td>
                                    <div className="d-grid gap-2 col-12 mx-12">
                                      <Link
                                        to={`editmenu/${id}`}
                                        className="btn btn-warning"
                                      >
                                        Edit
                                      </Link>
                                      <br></br>
                                      <button
                                        // onClick={() => deleteHandler(+id)}
                                        type="button"
                                        className="btn btn-danger"
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <></>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <div>
          <Link to={"/myumkm/addumkm"} className="btn btn-primary my-3">
              Add Umkm
            </Link>
        </div>
      )}
    </>
  );
};

export default MyUmkmPage;
