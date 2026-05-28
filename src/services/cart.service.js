import TicketModel
from "../dao/models/ticket.model.js";

export const purchaseCart = async (
  cart,
  userEmail
) => {

  let total = 0;

  for (const item of cart.products) {

    if (
      item.product.stock >=
      item.quantity
    ) {

      item.product.stock -=
        item.quantity;

      total +=
        item.product.price *
        item.quantity;

      await item.product.save();
    }
  }

  const ticket =
    await TicketModel.create({

      code:
Math.random()
.toString(36)
.substring(2),

      amount: total,

      purchaser: userEmail
    });

  return ticket;
};