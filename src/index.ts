import app from "./app";

app.listen(app.get("PORT"), () => {
	console.log("Server listenning on port ", app.get("PORT"));
});
