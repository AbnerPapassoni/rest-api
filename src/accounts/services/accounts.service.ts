import debug from "debug";
import { Create } from "../../common/interfaces/crud/create.interface";
import { Delete } from "../../common/interfaces/crud/delete.interface";
import { List } from "../../common/interfaces/crud/list.interface";
import { Update } from "../../common/interfaces/crud/update.interface";
import { Read } from "../../common/interfaces/crud/read.interface";
import { Account } from "../dtos/account.dto";
import AccountsDao from "../daos/accounts.dao";

const log: debug.IDebugger = debug("app:in-memory-service");

class AccountService implements Create, Delete, List, Update, Read {
	async create(resource: Account): Promise<Account> {
		return AccountsDao.create(resource);
	}
	async list(): Promise<Account[]> {
		return AccountsDao.list();
	}
	async deleteById(resourceId: number): Promise<void> {
		return AccountsDao.delete(resourceId);
	}
	async readById(resourceId: number): Promise<Account | undefined> {
		return AccountsDao.read(resourceId);
	}
	async update(resource: Account): Promise<Account | undefined> {
		return AccountsDao.update(resource);
	}
}

export default new AccountService();
