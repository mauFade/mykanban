import { PrismaUserRepository } from "../../../repositories/prisma/PrismaUserRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const prismaRepository = new PrismaUserRepository();

const deleteUserUseCase = new DeleteUserUseCase(prismaRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserUseCase, deleteUserController };
