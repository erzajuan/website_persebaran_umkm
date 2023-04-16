const umkmRoute = require("express").Router();
const { UmkmController } = require("../controllers");
const checkToken = require("../services/checkToken");
const upload = require("../services/multer");

umkmRoute.get("/", UmkmController.getUmkm);
umkmRoute.get("/admin", UmkmController.getUmkmAdmin);
umkmRoute.get("/detail/:id", UmkmController.detail);
umkmRoute.post("/", checkToken, upload, UmkmController.create);
umkmRoute.delete("/:id", UmkmController.delete);
umkmRoute.put("/:id", upload, UmkmController.update);
umkmRoute.put("/validate/:id", UmkmController.validate);

module.exports = umkmRoute;
