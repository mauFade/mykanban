import { PrismaKanbanRepository } from "../../../repositories/prisma/PrismaKanbanRepository";
import { ListKanbanController } from "./ListKanbanController";
import { ListKanbanUseCase } from "./ListKanbanUseCase";

const prismaRepository = new PrismaKanbanRepository();

const listKanbanUseCase = new ListKanbanUseCase(prismaRepository);

const listKanbanController = new ListKanbanController(listKanbanUseCase);

export { listKanbanUseCase, listKanbanController };
