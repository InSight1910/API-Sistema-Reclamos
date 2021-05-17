import lowdb from "lowdb";
import FileAsync from "lowdb/adapters/FileAsync";
import { Schema } from "./interface/schema.model";

let db: lowdb.LowdbAsync<Schema>;
export const creatConnection = async () => {
	const adapter = new FileAsync<Schema>("db.json");
	db = await lowdb(adapter);
	db.defaults({
		users: [],
		demands: [],
		responses: [],
	}).write();
};

export const getConnections = () => db;
