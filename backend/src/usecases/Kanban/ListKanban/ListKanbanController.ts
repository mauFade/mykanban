import { Request, Response } from "express";
import { ListKanbanUseCase } from "./ListKanbanUseCase";

export class ListKanbanController {
  constructor(private listKanbanUseCase: ListKanbanUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { token }: { token: any } = Object(request["query"]);

    const id: number = token["id"];

    const kanbans = await this.listKanbanUseCase.execute();

    return response.status(200).send({ success: true, kanbans, id });
  }
}
