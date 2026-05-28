import { Router } from "express";

import {
  createProduct,
  updateProduct,
  deleteProduct
}
from "../controllers/product.controller.js";

import { auth }
from "../middlewares/auth.middleware.js";

import { isAdmin }
from "../middlewares/role.middleware.js";

const router = Router();

router.post(
  "/",
  auth,
  isAdmin,
  createProduct
);

router.put(
  "/:pid",
  auth,
  isAdmin,
  updateProduct
);

router.delete(
  "/:pid",
  auth,
  isAdmin,
  deleteProduct
);

export default router;