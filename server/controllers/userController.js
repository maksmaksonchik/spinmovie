const ApiError = require("../error/Api.Error");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('../models/models');

const generateJwt = (id, username) => jwt.sign(
  { id: id, username }, 
  process.env.SECRET_KEY,
  {expiresIn: '24h'}
)

class UserController {
  async registration(req, res, next) {
    const {username, password} = req.body;
    if (!username || !password) {
      return next(ApiError.badRequest('Некорректный логин или пароль'));
    }

    const candidate = await User.findOne({where: {username}})
    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким именем уже существует'));
    }

    const hashPassword = await bcrypt.hash(password, 5);

    const user = await User.create({ username, password: hashPassword });

    const token = generateJwt(user.id, username);
    return res.json({ token })
  }

  async login(req, res, next) {
    const { username, password } = req.body;

    const user = await User.findOne({where: {username}});
    if (!user) {
      return next(ApiError.internal('Пользователь с таким именем не найден'));
    }

    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal('Неверный пароль'));
    }

    const token = generateJwt(user.id, username);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.username);
    return res.json({ token });
  }
}

module.exports = new UserController()
