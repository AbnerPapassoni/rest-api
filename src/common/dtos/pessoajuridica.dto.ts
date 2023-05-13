import { IPessoaDTO } from "./pessoa.dto";

export interface IPessoaJuridicaDTO extends IPessoaDTO {
    cnpj: number,
    razaoSocial: string
}