import { Router } from "express";

import {
	getDemand,
	getDemandsAdmin,
	getDemandsUser,
	createDemands,
	deleteDemands,
	editDemands,
	getDemandAdmin,
	updateState,
	setAdmin,
} from "../controllers/demand.controller";

const router = Router();

router.get("/admins", getDemandsAdmin);
router.get("/users/:id", getDemandsUser);
router.get("/demand/:id", getDemand);
router.get("/admins/:id", getDemandAdmin);

router.put("/updateState/:id", updateState);
router.put("/asignDemand/:id", setAdmin);
router.put("/demand/:id", editDemands);

router.post("/demand", createDemands);

router.delete("/demand/:id", deleteDemands);

export default router;
