import { IAccountDTO } from "./baseaccount.dto";

export interface ICheckingAccountDTO extends IAccountDTO {
	transferLimit: number;
}
