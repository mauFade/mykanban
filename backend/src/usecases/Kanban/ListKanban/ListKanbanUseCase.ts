import { IKanbanRepository } from "../../../repositories/Kanban";
import { IListKanbanDTO } from "./ListkanbanDTO";

export class ListKanbanUseCase {
  constructor(private listKanbanRepository: IKanbanRepository) {}

  async execute({ id }: IListKanbanDTO) {
    const kanbans = await this.listKanbanRepository.read({ id });

    return kanbans;
  }
}
