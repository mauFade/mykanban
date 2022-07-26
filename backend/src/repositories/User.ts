import { User } from "@prisma/client";
import { ICreateUserDTO } from "src/usecases/User/CreateUser/CreateUserDTO";
import { IUpdateUserDTO } from "src/usecases/User/UpdateUser/UpdateUserDTO";

export interface IUserRepository {
  create: (data: ICreateUserDTO) => Promise<User>;
  read: () => Promise<User[]>;
  update: (data: IUpdateUserDTO) => Promise<User>;
  delete: () => Promise<void>;
}
