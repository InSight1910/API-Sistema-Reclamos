import { Router } from "express";
import { signup } from "../controllers/auth.controller";
import { changePassword } from "../controllers/user.controller";

const router = Router();

router.post("/auth/login", (req, res) => {});
router.post("/auth/signup", signup);
router.put("/auth/changePassword/:id", changePassword);

export default router;
