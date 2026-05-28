import CartModel
from "../dao/models/cart.model.js";

export default class CartRepository {

  getById = async (id) => {

    return await CartModel.findById(id)
      .populate("products.product");
  };

  create = async () => {

    return await CartModel.create({
      products: []
    });
  };
}