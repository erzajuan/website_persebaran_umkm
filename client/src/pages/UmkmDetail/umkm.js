import React, { useState, useEffect } from "react";
import { getUmkmDetail } from "../../fetchs/umkmFetch";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

const UmkmPage = () => {
  const [umkm, setUmkm] = useState([]);
  let { umkmId } = useParams();
  //test
  useEffect(() => {
    getUmkmDetail(
      (result) => setUmkm(result),
      umkmId
    );
  }, []);

  return (
    <>
      {umkm ? (
        <div class="container container-contact bootstrap snippets bootdeys bootdey">
          <div class="row decor-default">
            <div class="col-md-12">
              <div class="contact">
                <div class="controls">
                  <span
                    class="icon icon-folder"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Archive"
                  ></span>
                  <span
                    class="icon icon-delete"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Delete"
                  ></span>
                  <span
                    class="icon icon-close"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Close"
                  ></span>
                  
                  <img
                    src={umkm.image}
                    alt="cover"
                    class="cover"
                  />
                  <div class="cont">
                    <div class="name">Seevisual</div>
                    <div class="ui-mark">Designer</div>
                    <div class="ui-mark">UI</div>
                    <div class="ui-mark">Rocket</div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4 col-md-5 col-xs-12">
                    <div class="row">
                      <div class="col-xs-3">Nama umkm:</div>
                      <div class="col-xs-9">{umkm.name}</div>
                      <div class="col-xs-3">Alamat:</div>
                      <div class="col-xs-9">{umkm.location}</div>
                      <div class="col-xs-3">Open Days</div>
                      <div class="col-xs-9">{umkm.openDays}</div>
                      <div class="col-xs-3">Open Time:</div>
                      <div class="col-xs-9">{umkm.openTime}</div>
                      <div class="col-xs-3">Map:</div>
                      <div class="col-xs-9">{umkm["map"]}</div>
                    </div>
                  </div>
                  <div class="col-md-4 col-md-7 col-xs-12">
                    <p class="contact-description">
                      {umkm.description}
                    </p>
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

export default UmkmPage;
