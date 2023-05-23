const ApiError = require('../error/Api.Error');
const {List} = require('../models/models');

class ListController {
  async create(req, res, next) {
    try {
      const {title, description, items } = req.body;
      const list = await List.create({
        title,
        description,
        items,
        userId: req.user.id 
      });

      return res.json(list)
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.body;
      await List.destroy({
        where: {
          id: id,
          userId: req.user.id
        },
      });
      return res.json({id: id})
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getTeamCollections(req, res) {
    let { limit, page} = req.query;
    page = page || 1;
    limit = limit || 10;

    const offset = page * limit - limit

    const lists = await List.findAndCountAll({ where: { userId: 1 }, limit, offset });

    return res.json(lists);
  }

  async getUserCollections(req, res) {
    let { limit, page} = req.query;
    page = page || 1;
    limit = limit || 10;

    const offset = page * limit - limit

    let lists;
    lists = await List.findAndCountAll({ where: { userId: req.user.id }, limit, offset});
    return res.json(lists);
  }
}

module.exports = new ListController()
