import { Request, Response } from "express";
import { DeleteKanbanUseCase } from "./DeleteKanbanUseCase";

export class DeleteKanbanController {
  constructor(private deleteKanbanUseCase: DeleteKanbanUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { kanbanId }: { kanbanId: string } = Object(request["query"]);

    const id: number = parseInt(kanbanId);

    try {
      await this.deleteKanbanUseCase.execute({ id });

      return response.status(200).send({ success: true, message: "Kanban deleted successfully." });
    } catch (error) {
      return response.status(200).send({ success: false, message: error["message"] });
    }
  }
}
