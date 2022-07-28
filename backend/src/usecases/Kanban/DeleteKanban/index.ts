import { PrismaKanbanRepository } from "../../../repositories/prisma/PrismaKanbanRepository";
import { DeleteKanbanController } from "./DeleteKanbanController";
import { DeleteKanbanUseCase } from "./DeleteKanbanUseCase";

const prismaRepository = new PrismaKanbanRepository();

const deleteKanbanUseCase = new DeleteKanbanUseCase(prismaRepository);

const deleteKanbanController = new DeleteKanbanController(deleteKanbanUseCase);

export { deleteKanbanUseCase, deleteKanbanController };
