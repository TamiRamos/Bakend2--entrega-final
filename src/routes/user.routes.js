import { Router } from "express";

import { auth }
from "../middlewares/auth.middleware.js";

import { current }
from "../controllers/user.controller.js";

const router = Router();

router.get(
  "/current",
  auth,
  current
);

export default router;