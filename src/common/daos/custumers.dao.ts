import { CustumerDTO } from "../dtos/custumer.dto";
import debug from "debug";

const log: debug.IDebugger = debug("app:in-memory-dao");

class CustumerDAO {
	private _custumers: CustumerDTO[];
	private static _instance: CustumerDAO;

	private constructor() {
		this._custumers = [];
		log("Criando nova instancia de CustumerDao");
	}

	public static getInstance(): CustumerDAO {
		if (!CustumerDAO._instance) {
			CustumerDAO._instance = new CustumerDAO();
		}

		return CustumerDAO._instance;
	}

	list(): CustumerDTO[] {
		let objPessoas: CustumerDTO[] = [];

		for (let custumer of this._custumers) objPessoas.push(custumer);

		return objPessoas;
	}

	create(pessoa: CustumerDTO): CustumerDTO {
		let objPessoas;

		pessoa.indexId = this._custumers.length;
		pessoa.dataCriacao = new Date();
		pessoa.dataAtualizacao = new Date();
		objPessoas = pessoa;
		this._custumers.push(objPessoas);

		return objPessoas;
	}

	update(pessoa: CustumerDTO): CustumerDTO | undefined {
		let objPessoas;

		pessoa.dataAtualizacao = new Date();
		objPessoas = pessoa;

		if (objPessoas.indexId == undefined) return;

		this._custumers[objPessoas.indexId] = objPessoas;

		return objPessoas;
	}

	delete(cpfCnpj: number): void {
		const indexId = this._custumers.findIndex((obj: CustumerDTO) => {
			if ("cpf" in obj) return obj.cpf === cpfCnpj;
			else return obj.cnpj === cpfCnpj;
		});
		log(`Delete index: ${indexId}`);
		this._custumers.splice(indexId, 1);
	}

    read(cpfCnpj: number): CustumerDTO | undefined{
        const custumer = this._custumers.find((obj: CustumerDTO) => {
			if ("cpf" in obj) return obj.cpf === cpfCnpj;
			else return obj.cnpj === cpfCnpj;
		});
        if(!custumer) return;

        return custumer;
    }
}

export default CustumerDAO.getInstance();
