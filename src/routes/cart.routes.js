import { Router } from "express";

import { auth }
from "../middlewares/auth.middleware.js";

import { isUser }
from "../middlewares/role.middleware.js";

import {
  addProductToCart
}
from "../controllers/cart.controller.js";

const router = Router();

router.post(
  "/:cid/product/:pid",
  auth,
  isUser,
  addProductToCart
);

export default router;