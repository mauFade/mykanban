import { PrismaUserRepository } from "../../../repositories/prisma/PrismaUserRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const prismaRepository = new PrismaUserRepository();

const updateUserUseCase = new UpdateUserUseCase(prismaRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserUseCase, updateUserController };
