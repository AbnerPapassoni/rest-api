import debug from "debug";
import { Account } from "../dtos/account.dto";

const log: debug.IDebugger = debug("app:in-memory-dao");

class AccountDAO {
	private _accounts: Account[];
	private static _instance: AccountDAO;

	constructor() {
		this._accounts = [];
		log("Criando uma instancia de AccountsDAO");
	}

	public static getInstance(): AccountDAO {
		if (!AccountDAO._instance) {
			AccountDAO._instance = new AccountDAO();
		}

		return AccountDAO._instance;
	}

	create(account: Account): Account {
		let objAccount;

		account.indexId = this._accounts.length;
		objAccount = account;
		this._accounts.push(objAccount);
		
		return objAccount;
	}

	update(account: Account): Account | undefined {
		let objAccount;

		objAccount = account;

		if (objAccount.indexId === undefined) {
			return;
		}

		this._accounts[objAccount.indexId] = objAccount;

		return objAccount;
	}

	list(): Account[] {
		let objAccount: Account[] = [];

		for (let account of this._accounts) {
			objAccount.push(account);
		}

		return objAccount;
	}

	delete(accountNumber: number): void {
		const indexId = this._accounts.findIndex((obj: Account) => {
			return obj.accountNumber === accountNumber;
		});
		log(`Deleted index: ${indexId}`);
		this._accounts.splice(indexId, 1);
	}

	read(accountNumber: number): Account | undefined {
		const account = this._accounts.find((obj: Account) => {
			return obj.accountNumber === accountNumber;
		});

		if (!account) return;

		return account;
	}
}

export default new AccountDAO();
