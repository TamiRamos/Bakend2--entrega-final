import CartModel
from "../dao/models/cart.model.js";

export const addProductToCart =
async (req, res) => {

  const { cid, pid } =
    req.params;

  const cart =
    await CartModel.findById(cid);

  cart.products.push({

    product: pid,

    quantity: 1
  });

  await cart.save();

  res.json({
    message:
"Producto agregado al carrito"
  });
};