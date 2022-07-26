import { PrismaUserRepository } from "../../../repositories/prisma/PrismaUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const prismaRepository = new PrismaUserRepository();

const createUserUseCase = new CreateUserUseCase(prismaRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
