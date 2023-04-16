import React, { useState, useEffect } from "react";
import { getUmkmDetail } from "../../fetchs/umkmFetch";
import { useParams } from "react-router-dom";

const MyUmkmPage = () => {
  const [umkm, setUmkm] = useState([]);
  let { umkmId } = useParams();
  useEffect(() => {
    getUmkmDetail((result) => setUmkm(result), umkmId);
  }, [umkmId]);

  return (
    <>
      {umkm ? (
        <div className="container container-contact ">
          <div className="row decor-default">
            <div className="col-md-12">
              <div className="contact">
                <div className="controls">
                  <span
                    className="icon icon-folder"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Archive"
                  ></span>
                  <span
                    className="icon icon-delete"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Delete"
                  ></span>
                  <span
                    className="icon icon-close"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Close"
                  ></span>

                  <img src={umkm.image} alt="cover" className="cover" />
                  <div className="cont">
                    <div className="name">Seevisual</div>
                    <div className="ui-mark">Designer</div>
                    <div className="ui-mark">UI</div>
                    <div className="ui-mark">Rocket</div>
                  </div>
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
                      <div className="col-xs-9">
                        <a href={umkm.map} target="_blank" rel="noreferrer">
                          {" "}
                          Show On Map
                        </a>
                      </div>
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
      ) : (
        <h3>No Data</h3>
      )}
    </>
  );
};

export default MyUmkmPage;
