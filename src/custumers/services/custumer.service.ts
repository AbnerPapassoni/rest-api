import { Create } from "../../common/interfaces/crud/create.interface";
import { Delete } from "../../common/interfaces/crud/delete.interface";
import { List } from "../../common/interfaces/crud/list.interface";
import { Update } from "../../common/interfaces/crud/update.interface";
import { Read } from "../../common/interfaces/crud/read.interface";
import { CustumerCommonService } from "../../common/services/custumer.service";
import custumersDao from "../../common/daos/custumers.dao"
import { CustumerDTO } from "../../common/dtos/custumer.dto";

class CustumerService extends CustumerCommonService implements Create, Delete, List, Update, Read {
    async list(): Promise<CustumerDTO[]> {
        return custumersDao.list();
    }

    async create(resource: CustumerDTO): Promise<any> {
        return custumersDao.create(resource);
    }

    async update(resource: CustumerDTO): Promise<any> {
        return custumersDao.update(resource);
    }

    async deleteById(resourceId: number): Promise<void>{
        return custumersDao.delete(resourceId);
    }
}

export default new CustumerService();