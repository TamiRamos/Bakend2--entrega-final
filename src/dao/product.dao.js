import ProductModel
from "./models/product.model.js";

export default class ProductDAO {

  getAll = async () => {

    return await ProductModel.find();
  };

  getById = async (id) => {

    return await ProductModel.findById(id);
  };

  create = async (product) => {

    return await ProductModel.create(
      product
    );
  };

  update = async (id, data) => {

    return await ProductModel.findByIdAndUpdate(

      id,

      data,

      { new: true }
    );
  };

  delete = async (id) => {

    return await ProductModel.findByIdAndDelete(
      id
    );
  };
}
