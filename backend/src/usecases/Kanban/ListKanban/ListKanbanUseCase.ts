import { IKanbanRepository } from "../../../repositories/Kanban";

export class ListKanbanUseCase {
  constructor(private listKanbanRepository: IKanbanRepository) {}

  async execute() {
    const kanbans = await this.listKanbanRepository.read();

    return kanbans;
  }
}
