import React, { useState, useEffect } from "react";
import { getUmkmDetail } from "../../fetchs/umkmFetch";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

const UmkmPage = () => {
  const [umkm, setUmkm] = useState([]);
  const [menu, setMenu] = useState([]);
  let { umkmId } = useParams();
  useEffect(() => {
    getUmkmDetail((umkm,menus) => {setUmkm(umkm); setMenu(menus)}, umkmId);
  }, []);

  return (
    <div className="container m-4 d-flex flex-column ">
      {umkm ? (
        <>
          <div className="container container-contact ">
            <div className="row decor-default">
              <div className="col-md-12">
                <div className="contact">
                  <div className="text-center">
                    <img src={umkm.image} alt="cover" className="cover" />
                  </div>

                  <div className="row">
                    <div className="col-md-4 col-md-5 col-xs-12">
                      <div className="row">
                        <div className="col-xs-3">Nama umkm:</div>
                        <div className="col-xs-9">{umkm.name}</div>
                        <div className="col-xs-3">Alamat:</div>
                        <div className="col-xs-9">{umkm.location}</div>
                        <div className="col-xs-3">Open Days</div>
                        <div className="col-xs-9">{umkm.openDays}</div>
                        <div className="col-xs-3">Open Time:</div>
                        <div className="col-xs-9">{umkm.openTime}</div>
                        <div className="col-xs-3">Map:</div>
                        <div className="col-xs-9">{umkm["map"]}</div>
                      </div>
                    </div>
                    <div className="col-md-4 col-md-7 col-xs-12">
                      <p className="contact-description">{umkm.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {menu ? (
            <>
              <div class="container decor-default">
                <h1 class="text-center text-muted">Menu</h1>
                <div class="row flow-offset-1">
                  {menu.map((x) => (
                    <div class="col-xs-6 col-md-4">
                      <div class="card">
                        <img
                          src="https://www.bootdey.com/image/350x280/FFB6C1/000000"
                          alt=""
                        />
                        <div class="caption">
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
