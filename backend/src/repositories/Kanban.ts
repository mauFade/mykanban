import { Kanban } from "@prisma/client";
import { IListKanbanDTO } from "src/usecases/Kanban/ListKanban/ListkanbanDTO";
import { ICreateKanbanDTO } from "../usecases/Kanban/CreateKanban/CreateKanbanDTO";
import { IDeleteKanbanDTO } from "../usecases/Kanban/DeleteKanban/DeleteKanbanDTO";
import { IUpdateKanbanDTO } from "../usecases/Kanban/UpdateKanban/UpdateKanbanDTO";

export interface IKanbanRepository {
  create: (data: ICreateKanbanDTO) => Promise<Kanban>;
  read: (data: IListKanbanDTO) => Promise<Kanban[]>;
  update: (data: IUpdateKanbanDTO) => Promise<Kanban>;
  delete: (data: IDeleteKanbanDTO) => Promise<void>;
}
