export interface Demands {
	demandType: string;
	id: string;
	date: Date;
	state: string;
	records: string[];
	userRut: string;
	adminRut: string;
	comments: string[];
	expiredAt: Date;
}
