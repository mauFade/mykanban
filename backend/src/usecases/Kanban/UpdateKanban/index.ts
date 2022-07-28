import { PrismaKanbanRepository } from "../../../repositories/prisma/PrismaKanbanRepository";
import { UpdateKanbanController } from "./UpdateKanbanController";
import { UpdateKanbanUseCase } from "./UpdateKanbanUseCase";

const prismaRepository = new PrismaKanbanRepository();

const updateKanbanUseCase = new UpdateKanbanUseCase(prismaRepository);

const updateKanbanController = new UpdateKanbanController(updateKanbanUseCase);

export { updateKanbanUseCase, updateKanbanController };
