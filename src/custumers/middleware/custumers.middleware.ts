import express from "express";

class CustumerMiddleware {
  async validadeRequiredBodyFields(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (req.body && (req.body.cpf || req.body.cnpj)) {
      next();
    } else {
      res.status(400).send("Voce deve enviar um campo de cpf ou cnpj");
    }
  }
}

export default new CustumerMiddleware();
