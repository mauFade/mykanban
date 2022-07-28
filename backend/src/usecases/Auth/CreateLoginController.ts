import { Request, Response } from "express";
import { CreateLoginUseCase } from "./CreateLoginUseCase";

import helper from "../../helpers/helper";

export class CreateLoginController {
  constructor(private createLoginUseCase: CreateLoginUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password }: { email: string; password: string } = request["body"];

    try {
      const user = await this.createLoginUseCase.execute({ email, password });

      const token = await helper.generateToken(user["id"]);

      return response.status(200).send({ success: true, user, token });
    } catch (error) {
      return response.status(400).send({ success: false, message: error["message"] });
    }
  }
}
