import React, { useState, useEffect } from "react";
import { getUmkmDetail } from "../../fetchs/umkmFetch";
import { useParams, Link } from "react-router-dom";

const MyUmkmPage = () => {
  const [umkm, setUmkm] = useState([]);
  const [menus, setMenus] = useState([]);

  let { umkmId } = useParams();
  useEffect(() => {
    getUmkmDetail((result) => setUmkm(result), umkmId);
    getUmkmDetail((result) => setMenus(result.menus), umkmId);
  }, [umkmId]);

  return (
    <>
      <div className="container bootdey">
        <div className="col-md-12">
          <section className="panel">
            <div className="panel-body">
              <div className="col-md-6">
                <div className="pro-img-details">
                  <img
                    className="cover"
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
                    <strong>Open Time:</strong> {umkm.openTime}, {umkm.openDays}
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
                  <div class="table-responsive">
                    <table class="table table-striped table-product">
                      <tbody>
                        {/* MENU */}
                        {menus.length > 0 ? (
                          menus.map((item) => {
                            const { name, price, image } = item;
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
                                    <Link to={`}`} className="btn btn-warning">
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
    </>
  );
};

export default MyUmkmPage;
