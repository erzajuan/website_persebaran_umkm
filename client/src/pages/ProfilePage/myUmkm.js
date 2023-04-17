import React, { useState, useEffect } from "react";
import { getUmkmDetail } from "../../fetchs/umkmFetch";
import { deleteMenu } from "../../fetchs/menuFetch";
import { useParams, Link, useNavigate } from "react-router-dom";

const MyUmkmPage = () => {
  const [umkm, setUmkm] = useState([]);
  const [menu, setMenus] = useState([]);
  const [bool, setBool] = useState(false);
  const navigate = useNavigate();

  let { umkmId } = useParams();
  useEffect(() => {
    umkmId == "null" ? setBool(false) : setBool(true);
    getUmkmDetail((result) => setUmkm(result), umkmId);
    getUmkmDetail((result) => setMenus(result.menus), umkmId);
  }, [umkmId]);

  const deleteHandler = (id) => {
    deleteMenu(id, navigate )
  };

  return (
    <>
      {bool ? (
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
                      <Link href={umkm.map} target="_blank" rel="noreferrer">
                        Show on Google Map
                      </Link>
                    </span>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3 className="box-title mt-3">Menu</h3>
                    <Link to={`addmenu`} className="btn btn-primary my-2">
                      {" "}
                      +{" "}
                    </Link>
                    <div className="table-responsive">
                      <table className="table table-striped table-product">
                        <tbody>
                          {/* MENU */}
                          {menu.length > 0 ? (
                            menu.map((item) => {
                              const { id, name, price, image } = item;
                              return (
                                <tr>
                                  <td width="390">
                                    <img
                                      className="img-thumbnail img-fluid"
                                      src={image}
                                      style={{ width: 200, height: 200 }}
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
                                        onClick={() => deleteHandler(+id)}
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
