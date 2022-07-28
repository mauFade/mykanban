import { IKanbanRepository } from "../../../repositories/Kanban";
import { ICreateKanbanDTO } from "./CreateKanbanDTO";

export class CreateKanbanUseCase {
  constructor(private createKanbanRepository: IKanbanRepository) {}

  async execute({ userId, title, status, description }: ICreateKanbanDTO) {
    if (!title) {
      throw new Error("Title is required.");
    }

    if (!status) {
      throw new Error("Status is required.");
    }

    if (!description) {
      throw new Error("Description is required.");
    }

    const kanban = await this.createKanbanRepository.create({
      userId,
      description,
      status,
      title,
    });

    return kanban;
  }
}
