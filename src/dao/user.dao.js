import UserModel from "./models/user.model.js";

export default class UserDAO {

  getByEmail = async (email) => {
    return await UserModel.findOne({ email });
  };

  create = async (user) => {
    return await UserModel.create(user);
  };

  getById = async (id) => {
    return await UserModel.findById(id);
  };

  update = async (id, data) => {
    return await UserModel.findByIdAndUpdate(
      id,
      data,
      { new: true }
    );
  };
}