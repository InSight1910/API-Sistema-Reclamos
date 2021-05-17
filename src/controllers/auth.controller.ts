import { nanoid } from "nanoid";
import { Handler } from "express";
import { Users } from "../interface/user.model";
import { getConnections } from "../db";
export const signup: Handler = (req, res) => {
	const { email, name, password, rut, rol, address, phone }: Users = req.body;
	const newUser: Users = {
		id: nanoid(),
		address,
		email,
		name,
		password,
		phone,
		rol,
		rut,
	};
	getConnections().get("user").push(newUser).write();
	res.json(newUser);
};
