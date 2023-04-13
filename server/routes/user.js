const userRoute = require("express").Router();
const { UserController } = require("../controllers");

userRoute.get("/", UserController.getUser);
userRoute.get("/detail/:id", UserController.detail);
userRoute.post("/login", UserController.login);
userRoute.post("/", UserController.register);
userRoute.delete("/:id", UserController.delete);
userRoute.put("/:id", UserController.update);
userRoute.put("/admin/:id", UserController.setAdmin);

module.exports = userRoute;
