const ApiError = require('../error/Api.Error');
const {List} = require('../models/models');

class ListController {
  async create(req, res, next) {
    try {
      const {title, description, items, userId} = req.body;
      const list = await List.create({
        title,
        description,
        items, 
        userId
      });

      return res.json(list)
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let {userId, limit, page} = req.query;
    page = page || 1;
    limit = limit || 9;

    const offset = page * limit - limit

    let lists;
    if (!userId) {
      lists = await List.findAndCountAll({ limit, offset });
    }
    if (userId) {
      lists = await List.findAndCountAll({ where: { userId }, limit, offset});
    }
    return res.json(lists);
  }
}

module.exports = new ListController()
