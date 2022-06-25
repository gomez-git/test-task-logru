import User from '../models/User.js';

export const getAll = async () => {
  const users = await User.find();

  return users;
};

export const create = async (req) => {
  const { login, password } = req.body;
  const user = await User.create({ login, password });

  return user;
};

