import custumersDao from "../daos/custumers.dao";
import { Read } from "../interfaces/crud/read.interface";
import { CustumerDTO } from "../dtos/custumer.dto";

export class CustumerCommonService implements Read {
    async readById(resourceId: number): Promise<CustumerDTO | undefined> {
        return custumersDao.read(resourceId);
    }
}

export default new CustumerCommonService()