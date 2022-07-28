import { Request, Response } from "express";
import { UpdateKanbanUseCase } from "./UpdateKanbanUseCase";

export class UpdateKanbanController {
  constructor(private updateKanbanUseCase: UpdateKanbanUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { kanbanId }: { kanbanId: string } = Object(request["query"]);

    const { title, description, status }: { title: string; description: string; status: string } = request["body"];

    const id: number = parseInt(kanbanId);

    try {
      const kanban = await this.updateKanbanUseCase.execute({
        id,
        title,
        description,
        status,
      });

      return response.status(200).send({ success: true, kanban });
    } catch (error) {
      return response.status(400).send({ success: false, message: error["message"] });
    }
  }
}
