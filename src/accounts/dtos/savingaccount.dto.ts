import { IAccountDTO } from "./baseaccount.dto";

export interface ISavingAccountDTO extends IAccountDTO {
	income: number;
}
