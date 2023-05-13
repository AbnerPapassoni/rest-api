import { CommonRoutesConfig } from "../common/common.routes";
import express from "express";
import accountsController from "./controllers/accounts.controller";

export class AccountsRoutes extends CommonRoutesConfig {
	constructor(app: express.Application) {
		super(app, "AccountsRoutes");
	}

	configureRoutes(): express.Application {
		this.app
			.route("/accounts")
			.get(accountsController.listAccounts)
			.post(accountsController.createAccount);

		this.app
			.route("/accounts/:accountNumber")
			.get(accountsController.getAccountById)
			.put(accountsController.updateAccount)
			.delete(accountsController.deleteAccount);

		return this.app;
	}
}
