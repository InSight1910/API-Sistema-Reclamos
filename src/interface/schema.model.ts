import { Demands } from "./demand.model";
import { DemandResponse } from "./response.model";
import { Users } from "./user.model";

export interface Schema {
	user: Users[];
	demands: Demands[];
	responses: DemandResponse[];
}
