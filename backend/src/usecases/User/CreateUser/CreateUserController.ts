import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

import helper from "../../../helpers/helper";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password }: { name: string; email: string; password: string } = request["body"];

    try {
      const user = await this.createUserUseCase.execute({
        name,
        email,
        password,
      });

      const token = await helper.generateToken(user["id"]);

      return response.status(201).send({ success: true, data: { user, token } });
    } catch (error) {
      return response.status(403).send({ success: false, message: error["message"] });
    }
  }
}
