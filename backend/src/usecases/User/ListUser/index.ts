import { PrismaUserRepository } from "../../../repositories/prisma/PrismaUserRepository";
import { ListUserController } from "./ListUserController";
import { ListUserUseCase } from "./ListUserUseCase";

const prismaRepository = new PrismaUserRepository();

const listUserUseCase = new ListUserUseCase(prismaRepository);

const listUserController = new ListUserController(listUserUseCase);

export { listUserUseCase, listUserController };
