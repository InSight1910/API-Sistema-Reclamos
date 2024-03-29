export const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Sitema de Reclamos API",
			version: "1.0.0",
			description: "Una API para un sistema de reclamos",
		},
		servers: [
			{
				url: "http://localhost:3000",
			},
		],
	},
	apis: ["./src/routes/*.ts"],
};
