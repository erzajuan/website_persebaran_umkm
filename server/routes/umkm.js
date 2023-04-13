const umkmRoute = require("express").Router();
const { UmkmController } = require("../controllers");

umkmRoute.get("/", UmkmController.getUmkm);
umkmRoute.get("/detail/:id", UmkmController.detail);
umkmRoute.post("/", UmkmController.create);
umkmRoute.delete("/:id", UmkmController.delete);
umkmRoute.put("/:id", UmkmController.update);
umkmRoute.put("/validate/:id", UmkmController.validate);

module.exports = umkmRoute;
