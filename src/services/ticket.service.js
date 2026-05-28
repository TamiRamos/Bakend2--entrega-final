import TicketRepository
from "../repositories/ticket.repository.js";

const repository =
new TicketRepository();

export const createTicketService =
async (ticketData) => {

  return await repository.create(
    ticketData
  );
};