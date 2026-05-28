import CartDAO
from "../dao/cart.dao.js";

import TicketDAO
from "../dao/ticket.dao.js";

const cartDAO = new CartDAO();

const ticketDAO = new TicketDAO();

export const purchaseCart =
async (req, res) => {

  try {

    const { cid } = req.params;

    const cart =
      await cartDAO.getById(cid);

    if (!cart) {

      return res.status(404).json({
        error: "Carrito no encontrado"
      });
    }

    let total = 0;

    const productsProcessed = [];

    for (const item of cart.products) {

      const product = item.product;

      if (
        product.stock >= item.quantity
      ) {

        product.stock -= item.quantity;

        await product.save();

        total +=
          product.price *
          item.quantity;

        productsProcessed.push(item);
      }
    }

    const ticket =
      await ticketDAO.create({

        code:
Math.random()
.toString(36)
.substring(2),

        purchase_datetime:
          new Date(),

        amount: total,

        purchaser: req.user.email
      });

    res.json({

      status: "success",

      message:
"Compra realizada correctamente",

      ticket,

      products:
productsProcessed
    });

  } catch (error) {

    res.status(500).json({

      error:
"Error al procesar la compra"
    });
  }
};