import ProductModel
from "../dao/models/product.model.js";

export const createProduct =
async (req, res) => {

  const product =
    await ProductModel.create(
      req.body
    );

  res.json(product);
};

export const updateProduct =
async (req, res) => {

  const { pid } = req.params;

  const product =
    await ProductModel.findByIdAndUpdate(

      pid,

      req.body,

      { new: true }
    );

  res.json(product);
};

export const deleteProduct =
async (req, res) => {

  const { pid } = req.params;

  await ProductModel.findByIdAndDelete(
    pid
  );

  res.json({
    message:
"Producto eliminado"
  });
};