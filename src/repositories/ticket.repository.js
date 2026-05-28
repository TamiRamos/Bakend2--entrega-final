import TicketModel
from "../dao/models/ticket.model.js";

export default class TicketRepository {

  create = async (ticket) => {

    return await TicketModel.create(
      ticket
    );
  };
}