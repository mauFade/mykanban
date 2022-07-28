import { prisma } from "../../services/prisma";
import { IKanbanRepository } from "../Kanban";

import { ICreateKanbanDTO } from "../../usecases/Kanban/CreateKanban/CreateKanbanDTO";
import { IUpdateKanbanDTO } from "../../usecases/Kanban/UpdateKanban/UpdateKanbanDTO";
import { IDeleteKanbanDTO } from "../../usecases/Kanban/DeleteKanban/DeleteKanbanDTO";

export class PrismaKanbanRepository implements IKanbanRepository {
  async create({ userId, title, status, description }: ICreateKanbanDTO) {
    const kanban = await prisma.kanban.create({
      data: {
        userId,
        status,
        title,
        description,
      },
    });

    return kanban;
  }

  async read() {
    const kanbans = await prisma.kanban.findMany({
      include: { user: true },
    });

    return kanbans;
  }

  async update({ id, description, status, title }: IUpdateKanbanDTO) {
    const kanban = await prisma.kanban.update({
      where: { id },
      data: {
        description,
        status,
        title,
      },
    });

    return kanban;
  }

  async delete({ id }: IDeleteKanbanDTO) {
    await prisma.kanban.delete({
      where: { id },
    });
  }
}
