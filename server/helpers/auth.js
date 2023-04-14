const jwt = require("jsonwebtoken");
const token = process.env.TOKEN || "token";

const generateToken = (data) => {
  const { id, username, email, image, role, umkm } = data;

  return jwt.sign({ id, username, email, image, role, umkm }, token);
};

const verifToken = (data) => {
    return jwt.verify(data, token);
};

module.exports = { generateToken, verifToken };
