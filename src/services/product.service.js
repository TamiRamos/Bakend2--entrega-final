import ProductRepository
from "../repositories/product.repository.js";

const repository =
new ProductRepository();

export const getProducts =
async () => {

  return await repository.getAll();
};

export const createProductService =
async (product) => {

  return await repository.create(
    product
  );
};