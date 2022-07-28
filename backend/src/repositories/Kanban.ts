import { Kanban } from "@prisma/client";
import { ICreateKanbanDTO } from "../usecases/Kanban/CreateKanban/CreateKanbanDTO";
import { IDeleteKanbanDTO } from "../usecases/Kanban/DeleteKanban/DeleteKanbanDTO";
import { IUpdateKanbanDTO } from "../usecases/Kanban/UpdateKanban/UpdateKanbanDTO";

export interface IKanbanRepository {
  create: (data: ICreateKanbanDTO) => Promise<Kanban>;
  read: () => Promise<Kanban[]>;
  update: (data: IUpdateKanbanDTO) => Promise<Kanban>;
  delete: (data: IDeleteKanbanDTO) => Promise<void>;
}
