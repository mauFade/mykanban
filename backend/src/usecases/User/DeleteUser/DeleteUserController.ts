import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId }: { userId: string } = Object(request["query"]);

    const id: number = parseInt(userId);

    try {
      await this.deleteUserUseCase.execute({ id });

      return response.status(200).send({ success: true, message: "User deleted successfully.", userId });
    } catch (error) {
      return response.status(400).send({ success: false, message: error["message"] });
    }
  }
}
