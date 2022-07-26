import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

export class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name }: { name: string } = Object(request["query"]);

    try {
      const user = await this.listUserUseCase.read({ name });

      return response.status(200).send({ success: true, user });
    } catch (error) {
      return response.status(404).send({ success: false, message: error["message"] });
    }
  }
}
