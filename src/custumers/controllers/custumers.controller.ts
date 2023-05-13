import express from "express";
import debug from "debug";
import custumerService from "../services/custumer.service";

const log: debug.IDebugger = debug('app:custumer-controller');

class CustumerController {
  async listCustumers(req: express.Request, res: express.Response) {
    const custumers = await custumerService.list();
    res.status(200).send(custumers);
  }

  async getCustumerById(req: express.Request, res: express.Response){
    const custumer = await custumerService.readById(Number(req.params.cpfCnpj));
    res.status(200).send(custumer)
  }

  async createCustumer(req: express.Request, res: express.Response) {
    const custumer = await custumerService.create(req.body);
    res.status(201).send(custumer);
  }

  async updateCustumer(req: express.Request, res: express.Response) {
    const custumer = await custumerService.update(req.body);
    res.status(200).send(custumer);
  }

  async deleteCustumer(req: express.Request, res: express.Response) {
    const custumer = await custumerService.deleteById(Number(req.params.cpfCnpj));
    res.status(204).send();
  }
}

export default new CustumerController();
