import { Router } from "express";
import {
	createResponse,
	deleteResponse,
	getResponses,
} from "../controllers/response.controller";
const router = Router();

router.get("/response/:id", getResponses);
router.post("/response/", createResponse);
router.delete("/response/:id", deleteResponse);

export default router;
