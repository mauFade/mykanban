import { Request, Response } from "express";
import { CreateKanbanUseCase } from "./CreateKanbanUseCase";

export class CreateKanbanController {
  constructor(private createKanbanUseCase: CreateKanbanUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { token }: { token: any } = Object(request["query"]);

    const { title, status, description }: { title: string; status: string; description: string } = request["body"];

    const userId = token["id"];

    try {
      const kanban = await this.createKanbanUseCase.execute({
        userId,
        title,
        description,
        status,
      });

      return response.status(201).send({ success: true, kanban });
    } catch (error) {
      return response.status(400).send({ success: false, message: error["message"] });
    }
  }
}
