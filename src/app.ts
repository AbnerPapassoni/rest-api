import express, { json } from "express";
import * as http from "http";

import * as winston from "winston";
import * as expressWinston from "express-winston";
import cors from "cors";
import { debug } from "debug";

import { CommonRoutesConfig } from "./common/common.routes";
import { CustumersRoutes } from "./custumers/custumers.routes.config";
import { AccountsRoutes } from "./accounts/accounts.routes.config";

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: CommonRoutesConfig[] = [];
const debugLog: debug.IDebugger = debug("app");

app.use(express.json());
app.use(cors());

const loggerOptions: expressWinston.LoggerOptions = {
	transports: [new winston.transports.Console()],
	format: winston.format.combine(
		winston.format.json(),
		winston.format.prettyPrint(),
		winston.format.colorize({ all: true })
	),
};

if (!process.env.DEBUG) {
	loggerOptions.meta = false;
}

app.use(expressWinston.logger(loggerOptions));

routes.push(new CustumersRoutes(app));
routes.push(new AccountsRoutes(app));

const runningMessage = `Servidor rodando no port: ${port}`;
app.get("/", (req: express.Request, res: express.Response) => {
	res.status(200).send(runningMessage);
});

server.listen(port, () => {
	routes.forEach((route: CommonRoutesConfig) => {
		debugLog(`Rotas configuradas para ${route.getName()}`);
	});
	console.log(runningMessage);
});
