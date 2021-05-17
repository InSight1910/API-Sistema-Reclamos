import { Handler } from "express";
import { getConnections } from "../db";

export const getUser: Handler = (req, res) => {
	const { id } = req.params;
	res.json(getConnections().get("user").find({ id }).value());
};

export const getEmail: Handler = (req, res) => {
	const { id } = req.params;
	const email = getConnections().get("user").find({ id }).value().email;

	res.json(email);
};

export const updateUser: Handler = (req, res) => {
	const { id } = req.params;
	const updatedUser = getConnections()
		.get("user")
		.find({ id })
		.assign(req.body)
		.write();
	res.json(updatedUser);
};

export const changePassword: Handler = (req, res) => {
	const { id } = req.params;
	getConnections().get("user").find({ id }).assign(req.body).write();
	res.json({});
};

export const deleteUser: Handler = (req, res) => {
	const { id } = req.params;
	const deletedUser = getConnections().get("user").remove({ id }).write();
	res.json(deletedUser);
};
