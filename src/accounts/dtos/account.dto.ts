import { ICheckingAccountDTO } from "./checkingaccount.dto";
import { ISavingAccountDTO } from "./savingaccount.dto";

export type Account = ICheckingAccountDTO | ISavingAccountDTO;
