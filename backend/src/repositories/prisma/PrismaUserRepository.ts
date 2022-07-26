import { prisma } from "../../services/prisma";

import { IUserRepository } from "../User";

import { ICreateUserDTO } from "src/usecases/User/CreateUser/CreateUserDTO";
import { IUpdateUserDTO } from "src/usecases/User/UpdateUser/UpdateUserDTO";
import { IDeleteUserDTO } from "src/usecases/User/DeleteUser/DeleteUserDTO";

export class PrismaUserRepository implements IUserRepository {
  async create({ name, email, password }: ICreateUserDTO) {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return user;
  }

  async read() {
    const users = await prisma.user.findMany();

    return users;
  }

  async update({ id, name, email, password }: IUpdateUserDTO) {
    const user = await prisma.user.update({
      where: { id },
      data: {
        name,
        email,
        password,
      },
    });

    return user;
  }

  async delete({ id }: IDeleteUserDTO) {
    await prisma.user.delete({
      where: { id },
    });
  }
}
