const { umkm } = require("../models");
const { decrypt } = require("../helpers/bcrypt");

class UmkmController {
  static async getUmkm(req, res) {
    try {
      let result = await umkm.findAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async detail(req, res) {
    try {
      const id = +req.params.id;
      let result = await umkm.findByPk(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async create(req, res) {
    try {
      const {
        name,
        location,
        description,
        openDays,
        openTime,
        map,
        image,
        userId,
      } = req.body;
      let result = await umkm.create({
        name,
        location,
        description,
        openDays,
        openTime,
        map,
        image,
        userId,
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await umkm.destroy({
        where: { id },
      });

      result == 1
        ? res
            .status(200)
            .json({ message: `UMKM dengan id ${id} berhasil dihapus` })
        : res
            .status(404)
            .json({ message: `UMKM dengan id ${id} gagal dihapus` });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { name,
        location,
        description,
        openDays,
        openTime,
        map,
        image,
      } = req.body;
      let result = await umkm.update(
        {
        name,
        location,
        description,
        openDays,
        openTime,
        map,
        image,
        },
        {
          where: { id },
          individualHooks: true,
        }
      );
      result[0] == 1
        ? res
            .status(200)
            .json({ message: `UMKM dengan id ${id} berhasil diupdate` })
        : res
            .status(404)
            .json({ message: `UMKM dengan id ${id} gagal diupdate` });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async validate(req, res) {
    try {
      const id = +req.params.id;
      let result = await umkm.update(
        {
          status: "validated",
        },
        {
          where: { id },
          individualHooks: true,
        }
      );
      result[0] == 1
        ? res
            .status(200)
            .json({ message: `UMKM dengan id ${id} berhasil Tervalidasi` })
        : res
            .status(404)
            .json({ message: `UMKM dengan id ${id} gagal Tervalidasi` });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UmkmController;
