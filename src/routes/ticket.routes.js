import { Router } from "express";

import { auth }
from "../middlewares/auth.middleware.js";

import { purchaseCart }
from "../controllers/ticket.controller.js";

const router = Router();

router.post(
  "/purchase/:cid",
  auth,
  purchaseCart
);

export default router;