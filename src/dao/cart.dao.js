import CartModel
from "./models/cart.model.js";

export default class CartDAO {

  getAll = async () => {

    return await CartModel.find()
      .populate("products.product");
  };

  getById = async (id) => {

    return await CartModel.findById(id)
      .populate("products.product");
  };

  create = async () => {

    return await CartModel.create({
      products: []
    });
  };

  update = async (id, data) => {

    return await CartModel.findByIdAndUpdate(

      id,

      data,

      { new: true }
    );
  };

  delete = async (id) => {

    return await CartModel.findByIdAndDelete(
      id
    );
  };
}