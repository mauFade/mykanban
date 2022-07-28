import { IKanbanRepository } from "../../../repositories/Kanban";
import { IDeleteKanbanDTO } from "./DeleteKanbanDTO";

export class DeleteKanbanUseCase {
  constructor(private deleteKanbanRepository: IKanbanRepository) {}

  async execute({ id }: IDeleteKanbanDTO) {
    if (!id || id < 1) {
      throw new Error("Kanban id is required.");
    }

    await this.deleteKanbanRepository.delete({ id });
  }
}
