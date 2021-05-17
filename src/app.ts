import express from "express";
import morgan from "morgan";
import cors from "cors";

import UserRouter from "./routes/user.routes";
import ResponseRouter from "./routes/response.routes";
import DemandRouter from "./routes/demand.routes";
import AuthRouter from "./routes/auth.routes";

import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { options } from "./swaggerOptions";

import { creatConnection } from "./db";

const app = express();
const specs = swaggerJsDoc(options);
creatConnection();

app.set("PORT", process.env.PORT_EXPRESS);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(UserRouter);
app.use(ResponseRouter);
app.use(DemandRouter);
app.use(AuthRouter);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

export default app;
