import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId }: { userId: string } = Object(request["query"]);

    const { name, email, password }: { name: string; email: string; password: string } = request["body"];

    const id: number = parseInt(userId);

    try {
      const user = await this.updateUserUseCase.execute({
        id,
        name,
        email,
        password,
      });

      return response.status(200).send({ success: true, user });
    } catch (error) {
      return response.status(400).send({ success: false, message: error["message"] });
    }
  }
}
