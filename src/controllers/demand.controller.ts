import { Handler } from "express";
import { nanoid } from "nanoid";
import { getConnections } from "../db";

import { Demands } from "../interface/demand.model";

export const getDemandsAdmin: Handler = (req, res) => {
	const demands: Demands[] = getConnections().get("demands").value();
	res.json(demands);
};

export const getDemandsUser: Handler = (req, res) => {
	const { id } = req.params;
	let demands: Demands[] = getConnections()
		.get("demands")
		.filter({ userRut: id })
		.value();

	res.json(demands);
};

export const getDemand: Handler = (req, res) => {
	const { id } = req.params;
	const demand = getConnections().get("demands").find({ id }).value();
	res.json(demand);
};

export const getDemandAdmin: Handler = (req, res) => {
	const { id } = req.params;
	const demand: Demands[] = getConnections()
		.get("demands")
		.filter({ adminRut: id })
		.value();
	res.json(demand);
};

export const updateState: Handler = (req, res) => {
	const { id } = req.params;
	const updatedState: Demands = getConnections()
		.get("demands")
		.find({ id })
		.assign(req.body)
		.write();
	res.json(updatedState);
};

export const setAdmin: Handler = (req, res) => {
	const { id } = req.params;
	const { adminRut }: Demands = req.body;
	const updatedState: Demands = getConnections()
		.get("demands")
		.find({ id })
		.assign({
			adminRut,
			state: "in review",
		})
		.write();
	res.json(updatedState);
};

export const editDemands: Handler = (req, res) => {
	const { id } = req.params;
	const updatedDemands: Demands = getConnections()
		.get("demands")
		.find({ id })
		.assign(req.body)
		.write();
	res.json(updatedDemands);
};

export const createDemands: Handler = (req, res) => {
	const {
		adminRut,
		comments,
		date,
		demandType,
		expiredAt,
		records,
		state,
		userRut,
	}: Demands = req.body;

	const newDemand: Demands = {
		id: nanoid(),
		adminRut,
		comments,
		date,
		demandType,
		expiredAt,
		records,
		state,
		userRut,
	};
	getConnections().get("demands").push(newDemand).write();
	res.json(newDemand);
};

export const deleteDemands: Handler = (req, res) => {
	const { id } = req.params;
	getConnections().get("demands").remove({ id }).write();
	res.json({
		msg: "Deleted successfully",
	});
};
