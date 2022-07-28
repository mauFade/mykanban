import { PrismaLoginRepository } from "../../repositories/prisma/PrismaLoginRepository";
import { CreateLoginController } from "./CreateLoginController";
import { CreateLoginUseCase } from "./CreateLoginUseCase";

const prismaRepository = new PrismaLoginRepository();

const createLoginUseCase = new CreateLoginUseCase(prismaRepository);

const createLoginController = new CreateLoginController(createLoginUseCase);

export { createLoginUseCase, createLoginController };
