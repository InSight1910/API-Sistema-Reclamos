import { Handler, response } from "express";
import { nanoid } from "nanoid";
import { getConnections } from "../db";
import { DemandResponse } from "../interface/response.model";

export const getResponses: Handler = (req, res) => {
	const { id } = req.params;
	const response: DemandResponse[] = getConnections()
		.get("responses")
		.filter({ idDemanded: id })
		.value();
	res.json(response);
};

export const createResponse: Handler = (req, res) => {
	const { responseDate, text, userRut }: DemandResponse = req.body;
	const newResponse: DemandResponse = {
		idDemanded: nanoid(),
		responseDate,
		text,
		userRut,
	};
	getConnections().get("responses").push(newResponse).write();
	res.json(newResponse);
};

export const deleteResponse: Handler = (req, res) => {
	const { id } = req.params;
	getConnections().get("responses").remove({ idDemanded: id }).write();
	res.json({ msg: "Deleted succesfully" });
};
