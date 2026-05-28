import ProductModel
from "../dao/models/product.model.js";

export default class ProductRepository {

  getAll = async () => {

    return await ProductModel.find();
  };

  create = async (product) => {

    return await ProductModel.create(
      product
    );
  };
}