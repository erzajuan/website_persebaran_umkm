const { user, umkm } = require("../models");
const { decrypt } = require("../helpers/bcrypt");
const { generateToken, verifToken } = require("../helpers/auth");
class UserController {
  static async getUser(req, res) {
    try {
      let result = await user.findAll({
        include: [umkm],
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async detail(req, res) {
    try {
      const id = +req.params.id;
      let result = await user.findByPk(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      let result = await user.findOne({
        include: [umkm],
        where: { username },
      });
      if (result) {
        if (decrypt(password, result.password)) {
          let access_token = generateToken(result);
          let token = verifToken(access_token);
          res.status(200).json({ access_token });
        } else {
          res.status(403).json({ message: "Password Salah" });
        }
      } else {
        res.status(404).json({ message: "Username Not Found" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async register(req, res) {
    try {
      const { username, password, email } = req.body;
      let result = await user.create({
        username,
        password,
        email,
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await user.destroy({
        where: { id },
      });

      result == 1
        ? res
            .status(200)
            .json({ message: `User dengan id ${id} berhasil dihapus` })
        : res
            .status(404)
            .json({ message: `User dengan id ${id} gagal dihapus` });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { username, password, email } = req.body;
      let result = await user.update(
        {
          username,
          password,
          email,
        },
        {
          where: { id },
          individualHooks: true,
        }
      );
      result[0] == 1
        ? res
            .status(200)
            .json({ message: `User dengan id ${id} berhasil diupdate` })
        : res
            .status(404)
            .json({ message: `User dengan id ${id} gagal diupdate` });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async setAdmin(req, res) {
    try {
      const id = +req.params.id;
      let result = await user.update(
        {
          role: "admin",
        },
        {
          where: { id },
          individualHooks: true,
        }
      );
      result[0] == 1
        ? res
            .status(200)
            .json({ message: `User dengan id ${id} berhasil menjadi Admin` })
        : res
            .status(404)
            .json({ message: `User dengan id ${id} gagal menjadi Admin` });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UserController;
