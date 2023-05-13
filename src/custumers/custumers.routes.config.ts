import { CommonRoutesConfig } from "../common/common.routes";
import express from "express";
import custumersController from "./controllers/custumers.controller";
import custumersMiddleware from "./middleware/custumers.middleware";

export class CustumersRoutes extends CommonRoutesConfig {
	constructor(app: express.Application) {
		super(app, "CustumersRoutes");
	}

	configureRoutes(): express.Application {
		this.app
			.route("/custumers")
			.get(custumersController.listCustumers)
			.post(
				custumersMiddleware.validadeRequiredBodyFields,
				custumersController.createCustumer
			);

		this.app
			.route("/custumers/:cpfCnpj")
			.get(custumersController.getCustumerById)
			.put(custumersController.updateCustumer)
			.delete(custumersController.deleteCustumer);

		return this.app;
	}
}
