import { IAccountDTO } from "../dtos/baseaccount.dto";

export interface IAccountDAO {
	list: () => Promise<IAccountDTO[]>;
	create: (resource: any) => Promise<IAccountDTO>;
	update: (resource: any) => Promise<IAccountDTO | undefined>;
	delete: (resourceId: any) => Promise<void>;
	read: (resourceId: any) => Promise<IAccountDTO | undefined>;
}
