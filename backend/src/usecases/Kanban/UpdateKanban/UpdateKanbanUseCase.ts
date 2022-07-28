import { IKanbanRepository } from "../../../repositories/Kanban";
import { IUpdateKanbanDTO } from "./UpdateKanbanDTO";

export class UpdateKanbanUseCase {
  constructor(private updateKanbanRepository: IKanbanRepository) {}

  async execute({ id, description, status, title }: IUpdateKanbanDTO) {
    if (!id || id < 1) {
      throw new Error("Kanban id is required.");
    }

    const kanban = await this.updateKanbanRepository.update({
      id,
      description,
      status,
      title,
    });

    return kanban;
  }
}
