import { PrismaKanbanRepository } from "../../../repositories/prisma/PrismaKanbanRepository";
import { CreateKanbanController } from "./CreateKanbanController";
import { CreateKanbanUseCase } from "./CreateKanbanUseCase";

const prismaRepository = new PrismaKanbanRepository();

const createKanbanUseCase = new CreateKanbanUseCase(prismaRepository);

const createKanbanController = new CreateKanbanController(createKanbanUseCase);

export { createKanbanUseCase, createKanbanController };
