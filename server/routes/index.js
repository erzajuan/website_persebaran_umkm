const route = require("express").Router();

route.get("/api", (req, res) => {
    res.status(200).json({
        "message": "Welcome to SME API"
    })
})

const userRoute = require('./user');
const umkmRoute = require('./umkm');
const menuRoute = require('./menu');

route.use("/api/users", userRoute);
route.use("/api/umkms", umkmRoute);
route.use("/api/menus", menuRoute);

module.exports = route;