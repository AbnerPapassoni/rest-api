import express from "express";
import debug from "debug";
import accountsService from "../services/accounts.service";

const log: debug.IDebugger = debug("app:accounts-controller");

class AccountsController {
	async listAccounts(req: express.Request, res: express.Response) {
		const accounts = await accountsService.list();
		res.status(200).send(accounts);
	}

	async getAccountById(req: express.Request, res: express.Response) {
		const account = await accountsService.readById(
			Number(req.params.accountNumber)
		);
		res.status(200).send(account);
	}

	async createAccount(req: express.Request, res: express.Response) {
		const account = await accountsService.create(req.body);
		res.status(201).send(account);
	}

	async updateAccount(req: express.Request, res: express.Response) {
		const account = await accountsService.update(req.body);
		res.status(200).send(account);
	}

	async deleteAccount(req: express.Request, res: express.Response) {
		const account = await accountsService.deleteById(
			Number(req.params.accountNumber)
		);
		res.status(204).send();
	}
}

export default new AccountsController();
