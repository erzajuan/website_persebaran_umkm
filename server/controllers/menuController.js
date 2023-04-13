const { menu } = require("../models");

class MenuController {
  static async getMenu(req, res) {
    try {
      let result = await menu.findAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json();
    }
  }

  static async detail(req, res) {
    try {
      const id = +req.params.id;
      let result = await menu.findByPk(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json();
    }
  }

  static async create(req, res) {
    try {
      const { name, price, image, umkmId } = req.body;
      let result = await menu.create({
        name,
        price,
        image,
        umkmId,
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json();
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await menu.destroy({ where: { id } });

      result == 1
        ? res
            .status(200)
            .json({ message: `Menu dengan id ${id} berhasil dihapus` })
        : res
            .status(404)
            .json({ message: `Menu dengan id ${id} gagal dihapus` });
    } catch (error) {
      res.status(500).json();
    }
  }

  static async update(req, res) {
    const id = +req.params.id;
    const { name, price, image, umkmId } = req.body;
    try {
      let result = await menu.update(
        { name, price, image, umkmId },
        { where: { id }, individualHooks: true }
      );

      result[0] == 1
        ? res
            .status(200)
            .json({ message: `menu dengan id ${id} berhasil diupdate` })
        : res
            .status(404)
            .json({ message: `menu dengan id ${id} gagal diupdate` });
    } catch (error) {
      res.status(500).json();
    }
  }
}

module.exports = MenuController;
