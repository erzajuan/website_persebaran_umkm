import React, { useState, useEffect } from "react";
import { getUmkmDetailMenu } from "../../fetchs/umkmFetch";
import { useParams } from "react-router-dom";
import "./style.css";

const UmkmPage = () => {
  const [umkm, setUmkm] = useState([]);
  const [menu, setMenu] = useState([]);
  let { umkmId } = useParams();
  useEffect(() => {
    getUmkmDetailMenu((umkm, menus) => {
      setUmkm(umkm);
      setMenu(menus);
    }, umkmId);
  }, []);

  return (
    <div className=" p-4 d-flex flex-column ">
      {umkm ? (
        <>
          <div className="m-4">
            <div className="row">
              <div className="col-md-12">
                <div className="contact">
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
                  <div className="row">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          {menu ? (
            <>
              <div class="container">
                <h2 class="box-title mt-3 text-center">Menu</h2>
                <div class="row flow-offset-1">
                  {menu.map((x) => (
                    <div
                      class="col-xs-6 col-md-4"
                      style={{ width: 350, height: 300 }}
                    >
                      <div class="card">
                        <img
                          className="img-thumbnail img-fluid"
                          src={x.image}
                          style={{ width: 350, height: 300 }}
                          alt="cover"
                        />
                        <div class="caption text-center">
                          <h6>{x.name}</h6>
                          <span class="price">
                            <p>{x.price}</p>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>No data</>
          )}
        </>
      ) : (
        <h3>No Data</h3>
      )}
    </div>
  );
};

export default UmkmPage;
