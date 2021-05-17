import { Router } from "express";

import {
	getUser,
	getEmail,
	changePassword,
	deleteUser,
	updateUser,
} from "../controllers/user.controller";

const router = Router();

router.get("/user/:id", getUser);

router.get("/user/getEmail/:id", getEmail);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

export default router;
