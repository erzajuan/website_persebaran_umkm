const menuRoute = require("express").Router();
const { MenuController } = require("../controllers");

menuRoute.get("/", MenuController.getMenu);
menuRoute.get("/:id", MenuController.detail);
menuRoute.post("/", MenuController.create);
menuRoute.delete("/:id", MenuController.delete);
menuRoute.put("/:id", MenuController.update);


module.exports = menuRoute;
